import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { Chapter, ReadingBlock, ReadingQuestion, Vocabulary, GrammarCard, Exercise, ListeningBlock, ListeningQuestion } from '../../infrastructure/db/seedData';
import { ChapterRepository } from '../../infrastructure/repository/ChapterRepository';
import { ProgressRepository, type UserProgress } from '../../infrastructure/repository/ProgressRepository';


interface LessonContextType {
  chapters: Chapter[];
  currentChapter: Chapter | null;
  readingBlock: ReadingBlock | null;
  readingQuestions: ReadingQuestion[];
  listeningBlock: ListeningBlock | null;
  listeningQuestions: ListeningQuestion[];
  vocabulary: Vocabulary[];
  grammarCards: GrammarCard[];
  exercises: Exercise[];
  
  // Active State
  activePage: string;
  activeSection: string;
  readingCompleted: boolean;
  carouselStep: number;
  writingPreference: 'self_check' | 'strict';
  userName: string;
  theme: 'light' | 'dark';
  progressMap: Record<number, UserProgress>;
  scrollTarget: { sectionId: string; timestamp: number } | null;
  triggerScrollToSection: (sectionId: string) => void;
  
  // Timer State
  sessionSeconds: number;
  lifetimeSeconds: number;
  isSessionRunning: boolean;
  hasSavedSession: boolean;
  
  // Actions
  setActivePage: (page: string) => void;
  loadChapter: (chapterId: number) => void;
  exitToDashboard: () => void;
  setActiveSection: (sectionId: string) => void;
  setReadingCompleted: (completed: boolean) => void;
  setCarouselStep: (step: number) => void;
  setWritingPreference: (pref: 'self_check' | 'strict') => void;
  saveCurrentProgress: (sectionId?: string) => void;
  markChapterCompleted: () => void;
  completeWelcome: (name: string) => void;
  resetAllData: () => void;
  toggleTheme: () => void;
  resumeSession: () => void;
  resetSession: () => void;
  toggleSession: () => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  
  // Active Navigation Page
  const [activePage, setActivePage] = useState<string>('lessons');
  const [userName, setUserNameState] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [progressMap, setProgressMap] = useState<Record<number, UserProgress>>({});
  const [scrollTarget, setScrollTarget] = useState<{ sectionId: string; timestamp: number } | null>(null);

  const triggerScrollToSection = (sectionId: string) => {
    setScrollTarget({ sectionId, timestamp: Date.now() });
  };
  
  // Chapter Content Relational States
  const [readingBlock, setReadingBlock] = useState<ReadingBlock | null>(null);
  const [readingQuestions, setReadingQuestions] = useState<ReadingQuestion[]>([]);
  const [listeningBlock, setListeningBlock] = useState<ListeningBlock | null>(null);
  const [listeningQuestions, setListeningQuestions] = useState<ListeningQuestion[]>([]);
  const [vocabulary, setVocabulary] = useState<Vocabulary[]>([]);
  const [grammarCards, setGrammarCards] = useState<GrammarCard[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // User State Coordinates
  const [activeSection, setActiveSectionState] = useState<string>('reading');
  const [readingCompleted, setReadingCompleted] = useState<boolean>(false);
  const [carouselStep, setCarouselStepState] = useState<number>(0);
  const [writingPreference, setWritingPreferenceState] = useState<'self_check' | 'strict'>('self_check');

  // Timer States
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [lifetimeSeconds, setLifetimeSeconds] = useState<number>(0);
  const [isSessionRunning, setIsSessionRunning] = useState<boolean>(false);
  const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);

  const sessionSecondsRef = useRef<number>(0);
  const lifetimeSecondsRef = useRef<number>(0);

  // Sync refs with state to prevent stale closures in unload event listeners
  useEffect(() => {
    sessionSecondsRef.current = sessionSeconds;
  }, [sessionSeconds]);

  useEffect(() => {
    lifetimeSecondsRef.current = lifetimeSeconds;
  }, [lifetimeSeconds]);

  // Load timer values from localStorage on mount
  useEffect(() => {
    const savedLifetime = parseInt(localStorage.getItem('ura_lifetime_seconds') || '0', 10);
    const savedSession = parseInt(localStorage.getItem('ura_session_seconds') || '0', 10);
    setLifetimeSeconds(savedLifetime);
    setSessionSeconds(savedSession);

    if (savedSession > 0) {
      setHasSavedSession(true);
      setIsSessionRunning(false); // Kept paused until the user decides to continue or reset
    } else {
      setHasSavedSession(false);
      setIsSessionRunning(true); // Start session immediately
    }
  }, []);

  // Background clock interval (runs every second)
  useEffect(() => {
    const interval = setInterval(() => {
      // Accumulate time only if the page/tab is currently active in the foreground
      if (document.visibilityState === 'visible') {
        setLifetimeSeconds(prev => {
          const next = prev + 1;
          localStorage.setItem('ura_lifetime_seconds', next.toString());
          return next;
        });

        if (isSessionRunning) {
          setSessionSeconds(prev => {
            const next = prev + 1;
            localStorage.setItem('ura_session_seconds', next.toString());
            return next;
          });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isSessionRunning]);

  // Unload and visibility change emergency saving mechanisms
  useEffect(() => {
    const handleSave = () => {
      localStorage.setItem('ura_lifetime_seconds', lifetimeSecondsRef.current.toString());
      localStorage.setItem('ura_session_seconds', sessionSecondsRef.current.toString());
    };

    window.addEventListener('beforeunload', handleSave);
    document.addEventListener('visibilitychange', handleSave);

    return () => {
      window.removeEventListener('beforeunload', handleSave);
      document.removeEventListener('visibilitychange', handleSave);
    };
  }, []);

  // Load all chapters initially
  useEffect(() => {
    const list = ChapterRepository.getAllChapters();
    setChapters(list);

    // Load saved username
    const savedName = localStorage.getItem('ura_user_name') || '';
    setUserNameState(savedName);

    // Load progress map
    const pMap = ProgressRepository.getProgressMap();
    setProgressMap(pMap);

    // Load saved theme
    const savedTheme = (localStorage.getItem('ura_theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.remove('dark');
    }

    // Bootloader: Check if welcoming page has been seen
    const welcomeSeen = localStorage.getItem('ura_welcome_seen') === 'true';
    if (!welcomeSeen) {
      setActivePage('welcome');
    } else {
      setActivePage('lessons'); // Take them directly to the main dashboard
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('ura_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.remove('dark');
    }
  };

  const loadChapter = (chapterId: number) => {
    const ch = ChapterRepository.getChapterById(chapterId);
    if (!ch) return;

    // Load Relational Content Rows
    const rb = ChapterRepository.getReadingBlockForChapter(chapterId);
    const rq = rb ? ChapterRepository.getReadingQuestions(rb.id) : [];
    const lb = ChapterRepository.getListeningBlockForChapter(chapterId);
    const lq = lb ? ChapterRepository.getListeningQuestions(lb.id) : [];
    const voc = ChapterRepository.getVocabularyForChapter(chapterId);
    const gc = ChapterRepository.getGrammarCardsForChapter(chapterId);
    const ex = ChapterRepository.getExercisesForChapter(chapterId);

    // Set Relational States
    setCurrentChapter(ch);
    setReadingBlock(rb);
    setReadingQuestions(rq);
    setListeningBlock(lb);
    setListeningQuestions(lq);
    setVocabulary(voc);
    setGrammarCards(gc);
    setExercises(ex);

    // Load User Progress Session Coordinates (Pristine Restore Engine)
    const progress = ProgressRepository.getChapterProgress(chapterId);
    if (progress) {
      setActiveSectionState('reading'); // Always start at the reading section (the top) when clicking a lesson
      setReadingCompleted(progress.is_completed || false);
      setCarouselStepState(progress.carousel_grammar_step);
      setWritingPreferenceState(progress.writing_validation_preference);
    } else {
      // Initialize new progress coordinate
      setActiveSectionState('reading');
      setReadingCompleted(false);
      setCarouselStepState(0);
      setWritingPreferenceState('self_check');
      
      const updated = ProgressRepository.saveChapterProgress({
        chapter_id: chapterId,
        is_completed: false,
        last_viewed_section: 'reading',
        carousel_grammar_step: 0,
        writing_validation_preference: 'self_check'
      });
      setProgressMap(prev => ({ ...prev, [chapterId]: updated }));
    }

    setActivePage('lesson_active');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const saveCurrentProgress = (targetSection?: string) => {
    if (!currentChapter) return;
    const updated = ProgressRepository.saveChapterProgress({
      chapter_id: currentChapter.id,
      is_completed: readingCompleted,
      last_viewed_section: targetSection || activeSection,
      carousel_grammar_step: carouselStep,
      writing_validation_preference: writingPreference
    });
    setProgressMap(prev => ({ ...prev, [currentChapter.id]: updated }));
  };

  const setActiveSection = (sectionId: string) => {
    setActiveSectionState(sectionId);
    if (currentChapter) {
      const updated = ProgressRepository.saveChapterProgress({
        chapter_id: currentChapter.id,
        is_completed: readingCompleted,
        last_viewed_section: sectionId,
        carousel_grammar_step: carouselStep,
        writing_validation_preference: writingPreference
      });
      setProgressMap(prev => ({ ...prev, [currentChapter.id]: updated }));
    }
  };

  const setCarouselStep = (step: number) => {
    setCarouselStepState(step);
    if (currentChapter) {
      const updated = ProgressRepository.saveChapterProgress({
        chapter_id: currentChapter.id,
        is_completed: readingCompleted,
        last_viewed_section: activeSection,
        carousel_grammar_step: step,
        writing_validation_preference: writingPreference
      });
      setProgressMap(prev => ({ ...prev, [currentChapter.id]: updated }));
    }
  };

  const setWritingPreference = (pref: 'self_check' | 'strict') => {
    setWritingPreferenceState(pref);
    if (currentChapter) {
      const updated = ProgressRepository.saveChapterProgress({
        chapter_id: currentChapter.id,
        is_completed: readingCompleted,
        last_viewed_section: activeSection,
        carousel_grammar_step: carouselStep,
        writing_validation_preference: pref
      });
      setProgressMap(prev => ({ ...prev, [currentChapter.id]: updated }));
    }
  };

  const markChapterCompleted = () => {
    if (!currentChapter) return;
    ProgressRepository.markChapterCompleted(currentChapter.id);
    setReadingCompleted(true);
    setProgressMap(ProgressRepository.getProgressMap());
  };

  const exitToDashboard = () => {
    if (currentChapter) {
      saveCurrentProgress();
    }
    setCurrentChapter(null);
    setReadingBlock(null);
    setReadingQuestions([]);
    setListeningBlock(null);
    setListeningQuestions([]);
    setVocabulary([]);
    setGrammarCards([]);
    setExercises([]);
    setActivePage('lessons');
  };

  const completeWelcome = (name: string) => {
    const trimmed = name.trim();
    localStorage.setItem('ura_user_name', trimmed);
    localStorage.setItem('ura_welcome_seen', 'true');
    setUserNameState(trimmed);
    setActivePage('lessons');
  };

  const resumeSession = () => {
    setIsSessionRunning(true);
    setHasSavedSession(false);
  };

  const resetSession = () => {
    setSessionSeconds(0);
    localStorage.setItem('ura_session_seconds', '0');
    setIsSessionRunning(true);
    setHasSavedSession(false);
  };

  const toggleSession = () => {
    setIsSessionRunning(prev => !prev);
  };

  const resetAllData = () => {
    const confirmation = window.confirm(
      "KUJDES: RIVENDOSJA E TË DHËNAVE\n\n" +
      "Nëse vazhdoni, ky veprim do të kryejë të mëposhtmet:\n" +
      "1. Do të fshijë plotësisht emrin tuaj të regjistruar.\n" +
      "2. Do të fshijë të gjithë progresin e kapitujve (kapitujt e përfunduar do të shënohen si të paprekur).\n" +
      "3. Do të rivendosë temën (dritë/errësirë) dhe të gjitha preferencat tuaja.\n" +
      "4. Do t'ju kthejë në faqen e mirëseardhjes për të filluar mësimin nga fillimi.\n\n" +
      "Ky veprim është i pakthyeshëm. A jeni plotësisht të sigurt që dëshironi të vazhdoni?"
    );

    if (confirmation) {
      localStorage.clear();
      setChapters(ChapterRepository.getAllChapters());
      setProgressMap({});
      setCurrentChapter(null);
      setReadingBlock(null);
      setReadingQuestions([]);
      setListeningBlock(null);
      setListeningQuestions([]);
      setVocabulary([]);
      setGrammarCards([]);
      setExercises([]);
      setUserNameState('');
      setActiveSectionState('reading');
      setReadingCompleted(false);
      setCarouselStepState(0);
      setWritingPreferenceState('self_check');
      setActivePage('welcome');

      // Reset timer states
      setSessionSeconds(0);
      setLifetimeSeconds(0);
      setIsSessionRunning(true);
      setHasSavedSession(false);

      alert('Të dhënat tuaja u fshinë me sukses! Aplikacioni u rivendos në gjendjen fillestare.');
    }
  };

  return (
    <LessonContext.Provider value={{
      chapters,
      currentChapter,
      readingBlock,
      readingQuestions,
      listeningBlock,
      listeningQuestions,
      vocabulary,
      grammarCards,
      exercises,
      activePage,
      activeSection,
      readingCompleted,
      carouselStep,
      writingPreference,
      userName,
      theme,
      progressMap,
      scrollTarget,
      triggerScrollToSection,
      sessionSeconds,
      lifetimeSeconds,
      isSessionRunning,
      hasSavedSession,
      loadChapter,
      exitToDashboard,
      setActivePage,
      setActiveSection,
      setReadingCompleted,
      setCarouselStep,
      setWritingPreference,
      saveCurrentProgress,
      markChapterCompleted,
      completeWelcome,
      resetAllData,
      toggleTheme,
      resumeSession,
      resetSession,
      toggleSession
    }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLesson = () => {
  const context = useContext(LessonContext);
  if (context === undefined) {
    throw new Error('useLesson must be used within a LessonProvider');
  }
  return context;
};
