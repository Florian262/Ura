import React from 'react';
import { useLesson } from '../../../application/state/LessonContext';

interface StickyNavbarProps {
  onTabClick: (sectionId: string) => void;
}

export const StickyNavbar: React.FC<StickyNavbarProps> = ({ onTabClick }) => {
  const { currentChapter, activeSection, exitToDashboard } = useLesson();

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
    <header className="sticky top-[53px] md:top-0 z-30 w-full bg-white border-b border-[#E9ECEF]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Back and Title */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={exitToDashboard}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E9ECEF] bg-white hover:bg-neutral-50 hover:text-[#3A5A40] hover:border-[#3A5A40] transition text-xs font-bold text-[#1A1D20] cursor-pointer shadow-xs"
          >
            ← Paneli
          </button>
          
          <div className="text-left">
            <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest block leading-none">
              Niveli {currentChapter.level} • Mësimi {currentChapter.order_index}
            </span>
            <h2 className="text-sm font-bold text-[#1A1D20] leading-tight uppercase tracking-tight">
              {currentChapter.title_turkish}{' '}
              <span className="text-xs font-light text-[#565E64] italic block md:inline md:ml-1 lowercase normal-case">
                ({currentChapter.title_albanian})
              </span>
            </h2>
          </div>
        </div>

        {/* Tab Items */}
        <nav className="flex items-center justify-start md:justify-end gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
          {sections.map(sec => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleTabClick(sec.id)}
                disabled={false}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                    : 'text-[#565E64] border-transparent hover:bg-[#E9ECEF]/50 hover:text-[#1A1D20]'
                }`}
              >
                <span>{sec.icon}</span>
                <span>{sec.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
