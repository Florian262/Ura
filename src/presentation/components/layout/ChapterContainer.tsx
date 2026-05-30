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
  const { currentChapter, activeSection, setActiveSection } = useLesson();

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
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'auto' }); // Instant scroll for seamless coordinate restoration
        }
      }, 150); // Small delay to guarantee that DOM elements are fully loaded
      return () => clearTimeout(timer);
    }
  }, [currentChapter?.id]);

  const handleTabClick = (sectionId: string) => {
    setManualScroll(); // Temporarily suspend the intersection observer
    setActiveSection(sectionId); // Set active tab instantly

    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset if sticky header heights clash
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!currentChapter) return null;

  return (
    <div className="min-h-screen pb-24 text-[#1A1D20] relative">
      {/* Sticky Top Navbar */}
      <StickyNavbar onTabClick={handleTabClick} />

      {/* Chapters content wrapper */}
      <main className="max-w-4xl mx-auto px-4 mt-8 space-y-16">
        
        {/* SECTION 1: READING & LISTENING */}
        <section id="reading" className="scroll-mt-24">
          <ReadingModule />
        </section>

        {/* SECTION 2: VOCABULARY ACQUISITION */}
        <section id="vocab" className="scroll-mt-24">
          <VocabularyModule />
        </section>

        {/* SECTION 3: GRAMMAR PRESENTATION */}
        <section id="grammar" className="scroll-mt-24">
          <GrammarModule />
        </section>

        {/* SECTION 4: WRITING ENGINE */}
        <section id="writing" className="scroll-mt-24">
          <WritingModule />
        </section>

        {/* SECTION 5: INTERACTIVE EXERCISES */}
        <section id="exercises" className="scroll-mt-24">
          <ExerciseModule />
        </section>


      </main>
    </div>
  );
};
