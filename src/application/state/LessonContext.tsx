import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Chapter, ReadingBlock, ReadingQuestion, Vocabulary, GrammarCard, Exercise } from '../../infrastructure/db/seedData';
import { ChapterRepository } from '../../infrastructure/repository/ChapterRepository';
import { ProgressRepository } from '../../infrastructure/repository/ProgressRepository';


interface LessonContextType {
  chapters: Chapter[];
  currentChapter: Chapter | null;
  readingBlock: ReadingBlock | null;
  readingQuestions: ReadingQuestion[];
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
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  
  // Active Navigation Page
  const [activePage, setActivePage] = useState<string>('lessons');
  const [userName, setUserNameState] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // Chapter Content Relational States
  const [readingBlock, setReadingBlock] = useState<ReadingBlock | null>(null);
  const [readingQuestions, setReadingQuestions] = useState<ReadingQuestion[]>([]);
  const [vocabulary, setVocabulary] = useState<Vocabulary[]>([]);
  const [grammarCards, setGrammarCards] = useState<GrammarCard[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // User State Coordinates
  const [activeSection, setActiveSectionState] = useState<string>('reading');
  const [readingCompleted, setReadingCompleted] = useState<boolean>(false);
  const [carouselStep, setCarouselStepState] = useState<number>(0);
  const [writingPreference, setWritingPreferenceState] = useState<'self_check' | 'strict'>('self_check');

  // Load all chapters initially
  useEffect(() => {
    const list = ChapterRepository.getAllChapters();
    setChapters(list);

    // Load saved username
    const savedName = localStorage.getItem('ura_user_name') || '';
    setUserNameState(savedName);

    // Load saved theme
    const savedTheme = (localStorage.getItem('ura_theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

    // Bootloader: Check if welcoming page has been seen
    const welcomeSeen = localStorage.getItem('ura_welcome_seen') === 'true';
    if (!welcomeSeen) {
      setActivePage('welcome');
    } else {
      const lastSession = ProgressRepository.getLastAccessedProgress();
      if (lastSession) {
        loadChapter(lastSession.chapter_id);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('ura_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  const loadChapter = (chapterId: number) => {
    const ch = ChapterRepository.getChapterById(chapterId);
    if (!ch) return;

    // Load Relational Content Rows
    const rb = ChapterRepository.getReadingBlockForChapter(chapterId);
    const rq = rb ? ChapterRepository.getReadingQuestions(rb.id) : [];
    const voc = ChapterRepository.getVocabularyForChapter(chapterId);
    const gc = ChapterRepository.getGrammarCardsForChapter(chapterId);
    const ex = ChapterRepository.getExercisesForChapter(chapterId);

    // Set Relational States
    setCurrentChapter(ch);
    setReadingBlock(rb);
    setReadingQuestions(rq);
    setVocabulary(voc);
    setGrammarCards(gc);
    setExercises(ex);

    // Load User Progress Session Coordinates (Pristine Restore Engine)
    const progress = ProgressRepository.getChapterProgress(chapterId);
    if (progress) {
      setActiveSectionState(progress.last_viewed_section);
      setReadingCompleted(progress.is_completed || false);
      setCarouselStepState(progress.carousel_grammar_step);
      setWritingPreferenceState(progress.writing_validation_preference);
    } else {
      // Initialize new progress coordinate
      setActiveSectionState('reading');
      setReadingCompleted(false);
      setCarouselStepState(0);
      setWritingPreferenceState('self_check');
      
      ProgressRepository.saveChapterProgress({
        chapter_id: chapterId,
        is_completed: false,
        last_viewed_section: 'reading',
        carousel_grammar_step: 0,
        writing_validation_preference: 'self_check'
      });
    }

    setActivePage('lesson_active');
  };

  const saveCurrentProgress = (targetSection?: string) => {
    if (!currentChapter) return;
    ProgressRepository.saveChapterProgress({
      chapter_id: currentChapter.id,
      is_completed: readingCompleted,
      last_viewed_section: targetSection || activeSection,
      carousel_grammar_step: carouselStep,
      writing_validation_preference: writingPreference
    });
  };

  const setActiveSection = (sectionId: string) => {
    setActiveSectionState(sectionId);
    if (currentChapter) {
      ProgressRepository.saveChapterProgress({
        chapter_id: currentChapter.id,
        is_completed: readingCompleted,
        last_viewed_section: sectionId,
        carousel_grammar_step: carouselStep,
        writing_validation_preference: writingPreference
      });
    }
  };

  const setCarouselStep = (step: number) => {
    setCarouselStepState(step);
    if (currentChapter) {
      ProgressRepository.saveChapterProgress({
        chapter_id: currentChapter.id,
        is_completed: readingCompleted,
        last_viewed_section: activeSection,
        carousel_grammar_step: step,
        writing_validation_preference: writingPreference
      });
    }
  };

  const setWritingPreference = (pref: 'self_check' | 'strict') => {
    setWritingPreferenceState(pref);
    if (currentChapter) {
      ProgressRepository.saveChapterProgress({
        chapter_id: currentChapter.id,
        is_completed: readingCompleted,
        last_viewed_section: activeSection,
        carousel_grammar_step: carouselStep,
        writing_validation_preference: pref
      });
    }
  };

  const markChapterCompleted = () => {
    if (!currentChapter) return;
    ProgressRepository.markChapterCompleted(currentChapter.id);
    setReadingCompleted(true);
  };

  const exitToDashboard = () => {
    if (currentChapter) {
      saveCurrentProgress();
    }
    setCurrentChapter(null);
    setReadingBlock(null);
    setReadingQuestions([]);
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

  const resetAllData = () => {
    if (window.confirm('A jeni të sigurt që dëshironi të fshini të gjithë progresin tuaj dhe të dhënat e ruajtura? Kjo do të rivendosë aplikacionin nga fillimi.')) {
      localStorage.clear();
      setChapters(ChapterRepository.getAllChapters());
      setCurrentChapter(null);
      setReadingBlock(null);
      setReadingQuestions([]);
      setVocabulary([]);
      setGrammarCards([]);
      setExercises([]);
      setUserNameState('');
      setActiveSectionState('reading');
      setReadingCompleted(false);
      setCarouselStepState(0);
      setWritingPreferenceState('self_check');
      setActivePage('welcome');
      alert('Të dhënat u fshinë me sukses! Aplikacioni u rivendos.');
    }
  };

  return (
    <LessonContext.Provider value={{
      chapters,
      currentChapter,
      readingBlock,
      readingQuestions,
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
      toggleTheme
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
