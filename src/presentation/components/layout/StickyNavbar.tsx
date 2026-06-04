import React from 'react';
import { useLesson } from '../../../application/state/LessonContext';

interface StickyNavbarProps {
  onTabClick: (sectionId: string) => void;
  completions?: Record<string, boolean>;
}

export const StickyNavbar: React.FC<StickyNavbarProps> = ({ onTabClick, completions }) => {
  const { currentChapter, activeSection, exitToDashboard } = useLesson();
  const activeTabRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeSection]);

  if (!currentChapter) return null;

  const sections = [
    { id: 'reading', label: '1. Leximi', icon: '📖', locked: false },
    { id: 'vocab', label: '2. Fjalori', icon: '📚', locked: false },
    { id: 'grammar', label: '3. Gramatika', icon: '✍️', locked: false },
    { id: 'writing', label: '4. Shkrimi', icon: '📝', locked: false },
    { id: 'exercises', label: '5. Ushtrime', icon: '🧩', locked: false }
  ];

  const handleTabClick = (sectionId: string) => {
    onTabClick(sectionId);
  };

  return (
    <header className="sticky top-[53px] md:top-0 z-30 w-full bg-white dark:bg-[#12181F] border-b border-[#E9ECEF] dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-2 md:py-3 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        {/* Back and Title */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={exitToDashboard}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E9ECEF] dark:border-slate-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-slate-850 hover:text-[#3A5A40] dark:hover:text-[#14B8A6] hover:border-[#3A5A40] dark:hover:border-[#14B8A6] transition text-xs font-bold text-[#1A1D20] dark:text-slate-200 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#3A5A40] dark:focus-visible:ring-[#14B8A6] focus:outline-none"
          >
            ← Paneli
          </button>
          
          <div className="text-left flex-1 md:flex-initial">
            <span className="text-[10px] font-bold text-[#3A5A40] dark:text-[#14B8A6] uppercase tracking-widest hidden md:block leading-none mb-1">
              Niveli {currentChapter.level} • Mësimi {currentChapter.order_index}
            </span>
            <h2 className="text-sm font-bold text-[#1A1D20] dark:text-slate-200 leading-tight uppercase tracking-tight flex items-center gap-2 flex-wrap">
              <span>{currentChapter.title_turkish}</span>
              <span className="md:hidden text-[8px] bg-[#3A5A40]/10 text-[#3A5A40] dark:bg-[#14B8A6]/10 dark:text-[#14B8A6] px-1.5 py-0.5 rounded-sm font-bold tracking-wide select-none">
                N{currentChapter.level} • M{currentChapter.order_index}
              </span>
              <span className="text-xs font-light text-[#565E64] dark:text-slate-400 italic hidden md:inline md:ml-1 lowercase normal-case">
                ({currentChapter.title_albanian})
              </span>
            </h2>
          </div>
        </div>

        {/* Tab Items */}
        <nav className="flex items-center justify-start md:justify-end gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar py-1 nav-scroll-fade">
          {sections.map(sec => {
            const isActive = activeSection === sec.id;
            const isCompleted = completions?.[sec.id] === true;
            return (
              <button
                key={sec.id}
                ref={isActive ? activeTabRef : null}
                onClick={() => handleTabClick(sec.id)}
                disabled={false}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition duration-200 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#3A5A40] dark:focus-visible:ring-[#14B8A6] focus:outline-none ${
                  isActive
                    ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                    : 'text-[#565E64] dark:text-slate-400 border-neutral-200 dark:border-slate-800 hover:bg-[#E9ECEF]/50 dark:hover:bg-slate-800/50 hover:text-[#1A1D20] dark:hover:text-slate-100'
                }`}
              >
                <span>{sec.icon}</span>
                <span>{sec.label}</span>
                {isCompleted && (
                  <span className={`text-[10px] font-extrabold ml-0.5 select-none ${isActive ? 'text-white' : 'text-emerald-600'}`}>✓</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
