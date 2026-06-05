import React from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { StickyNavbar } from './StickyNavbar';
import { useScrollSpy } from '../../../application/hooks/useScrollSpy';
import { ReadingModule } from '../modules/ReadingModule';
import { VocabularyModule } from '../modules/VocabularyModule';
import { GrammarModule } from '../modules/GrammarModule';
import { WritingModule } from '../modules/WritingModule';
import { ExerciseModule } from '../modules/ExerciseModule';

export const ChapterContainer: React.FC = () => {
  const { 
    currentChapter, 
    activeSection, 
    setActiveSection,
    readingCompleted,
    userName,
    chapters,
    loadChapter,
    exitToDashboard
  } = useLesson();

  const [completions, setCompletions] = React.useState<Record<string, boolean>>({
    reading: false,
    vocab: false,
    grammar: false,
    writing: false,
    exercises: false
  });

  // Load completions on chapter change
  React.useEffect(() => {
    if (currentChapter) {
      const storageKey = `ura_section_completions_${currentChapter.id}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setCompletions(prev => {
            const isDifferent = Object.keys(parsed).some(key => parsed[key] !== prev[key]);
            return isDifferent ? parsed : prev;
          });
        } catch (e) {
          console.error("Failed to parse completions from localStorage", e);
        }
      } else {
        const initial = {
          reading: readingCompleted,
          vocab: readingCompleted,
          grammar: readingCompleted,
          writing: readingCompleted,
          exercises: readingCompleted
        };
        setCompletions(prev => {
          const isDifferent = Object.keys(initial).some(key => (initial as any)[key] !== (prev as any)[key]);
          if (isDifferent) {
            localStorage.setItem(storageKey, JSON.stringify(initial));
            return initial;
          }
          return prev;
        });
      }
    }
  }, [currentChapter?.id, readingCompleted]);

  const markSectionComplete = React.useCallback((sectionId: string) => {
    if (!currentChapter) return;
    setCompletions(prev => {
      if (prev[sectionId] === true) return prev;
      const updated = { ...prev, [sectionId]: true };
      const storageKey = `ura_section_completions_${currentChapter.id}`;
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  }, [currentChapter?.id]);

  React.useEffect(() => {
    if (readingCompleted) {
      markSectionComplete('reading');
    }
  }, [readingCompleted, markSectionComplete]);

  const sectionsList = ['reading', 'vocab', 'grammar', 'writing', 'exercises'];

  // Instantiate our scroll spy
  const { setManualScroll } = useScrollSpy(sectionsList, (id) => {
    setActiveSection(id);
  });

  // Load active section on mount (Pristine Session Scroll Recovery Coordinator)
  React.useEffect(() => {
    if (activeSection && activeSection !== 'reading') {
      setManualScroll(); // Temporarily suspend the intersection observer
      const timer = setTimeout(() => {
        const element = document.getElementById(activeSection);
        if (element) {
          const yOffset = window.innerWidth < 768 ? -120 : -80;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'auto' }); // Instant scroll for seamless coordinate restoration
        }
      }, 150); // Small delay to guarantee that DOM elements are fully loaded
      return () => clearTimeout(timer);
    }
  }, [currentChapter?.id]);

  const handleTabClick = React.useCallback((sectionId: string) => {
    setManualScroll(); // Temporarily suspend the intersection observer
    setActiveSection(sectionId); // Set active tab instantly

    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset if sticky header heights clash
      const yOffset = window.innerWidth < 768 ? -120 : -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [setActiveSection]);

  // Listen for navigation requests from the sidebar
  React.useEffect(() => {
    const handleNavigate = (e: Event) => {
      const sectionId = (e as CustomEvent<string>).detail;
      if (sectionId) {
        handleTabClick(sectionId);
      }
    };
    window.addEventListener('navigate-to-section', handleNavigate);
    return () => {
      window.removeEventListener('navigate-to-section', handleNavigate);
    };
  }, [handleTabClick]);

  if (!currentChapter) return null;

  return (
    <div className="min-h-screen pb-24 text-[var(--color-text-primary)] relative">
      {/* Sticky Top Navbar */}
      <StickyNavbar onTabClick={handleTabClick} completions={completions} />

      {/* Chapters content wrapper */}
      <main className="max-w-4xl mx-auto px-4 mt-8 space-y-16">
        
        {/* SECTION 1: READING & LISTENING */}
        <section id="reading" className="scroll-mt-28 md:scroll-mt-24">
          <ReadingModule />
        </section>

        {/* SECTION 2: VOCABULARY ACQUISITION */}
        {currentChapter.id !== 21 && (
          <section id="vocab" className="scroll-mt-28 md:scroll-mt-24">
            <VocabularyModule onComplete={() => markSectionComplete('vocab')} />
          </section>
        )}

        {/* SECTION 3: GRAMMAR PRESENTATION */}
        {currentChapter.id !== 21 && (
          <section id="grammar" className="scroll-mt-28 md:scroll-mt-24">
            <GrammarModule onComplete={() => markSectionComplete('grammar')} />
          </section>
        )}

        {/* SECTION 4: WRITING ENGINE */}
        {currentChapter.id !== 21 && (
          <section id="writing" className="scroll-mt-28 md:scroll-mt-24">
            <WritingModule onComplete={() => markSectionComplete('writing')} />
          </section>
        )}

        {/* SECTION 5: INTERACTIVE EXERCISES */}
        {currentChapter.id !== 21 && (
          <section id="exercises" className="scroll-mt-28 md:scroll-mt-24">
            <ExerciseModule onComplete={() => markSectionComplete('exercises')} />
          </section>
        )}

        {/* Lesson Completion Summary Card */}
        {readingCompleted && (
          <div 
            id="chapter-completion-card"
            className="glass-panel rounded-2xl p-6 md:p-8 border-2 border-emerald-500 bg-emerald-50/20 shadow-md text-center space-y-6 animate-fade-in"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl animate-bounce">🏆</span>
              <h2 className="text-2xl font-black text-emerald-800 uppercase font-sans tracking-tight">
                Kapitulli u Përfundua!
              </h2>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Urime, <strong className="text-emerald-700">{userName || 'Student'}</strong>! Keni përfunduar me sukses të gjitha detyrat dhe ushtrimet e këtij kapitulli:
              </p>
              <div className="bg-white/80 border border-emerald-100 rounded-xl px-4 py-3 shadow-xs">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block mb-0.5">
                  Kapitulli {currentChapter.id}
                </span>
                <span className="text-base font-bold text-neutral-800 font-technical">
                  {currentChapter.title_albanian} ({currentChapter.title_turkish})
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-emerald-100/60">
              <button
                onClick={exitToDashboard}
                className="px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs active:scale-95"
              >
                ← Kthehu te Paneli
              </button>

              {chapters.find(c => c.id === currentChapter.id + 1) ? (
                <button
                  onClick={() => {
                    const nextId = currentChapter.id + 1;
                    loadChapter(nextId);
                  }}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition cursor-pointer select-none active-cta shadow-md active:scale-95"
                >
                  Vazhdo te Kapitulli Tjetër →
                </button>
              ) : (
                <div className="px-5 py-3 bg-[#3A5A40]/10 border border-[#3A5A40]/30 text-[#3A5A40] text-xs font-bold rounded-xl uppercase tracking-wider flex items-center select-none">
                  ✓ Keni kryer të gjithë kursin!
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
