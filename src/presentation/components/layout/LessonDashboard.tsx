import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import type { Chapter } from '../../../infrastructure/db/seedData';
import { ProgressRepository } from '../../../infrastructure/repository/ProgressRepository';

const UraIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    className={`${className} shrink-0`}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 18c4-5 8-5 12 0" />
    <path d="M9 18c3-3 6-3 9 0" opacity="0.5" />
  </svg>
);

export const LessonDashboard: React.FC = () => {
  const { chapters, loadChapter, userName } = useLesson();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Group chapters by level
  const levels: Record<string, Chapter[]> = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
  };

  chapters.forEach(ch => {
    if (levels[ch.level]) {
      levels[ch.level].push(ch);
    }
  });

  // Pedagogical Preview Syllabus & Curiosity Gaps focus configurations
  const levelSyllabus: Record<string, { desc: string; preview: string; focus: string; index: string }> = {
    A1: { 
      desc: 'FILL ESTAR', 
      index: '01',
      preview: 'Kurrikula: Prezantimi, Harmonia Vokalike, dhe 250 fjalë të përbashkëta (Dollap, Xham, Çorape).', 
      focus: 'Fokusimi: Prezantimi dhe Harmonia Vokalike (Çoğul Eki).' 
    },
    A2: { 
      desc: 'ELEMENTAR', 
      index: '02',
      preview: 'Kurrikula: Koha e shkuar e drejtpërdrejtë dhe strukturat e lakimit vendor për biseda elementare.', 
      focus: 'Fokusimi: Koha e shkuar e drejtpërdrejtë (-dı) dhe përshkrimet elementare.' 
    },
    B1: { 
      desc: 'NDËRMJETËM', 
      index: '03',
      preview: 'Kurrikula: Zotërimi i Mënyrës Habitore të shkuar të pacaktuar për të shprehur habi dhe thashetheme.', 
      focus: 'Fokusimi: Lidhja e fjalive me Mënyrën Habitore (Mënyra e habitshme -miş).' 
    },
    B2: { 
      desc: 'NDËRMJETËM I LARTË', 
      index: '04',
      preview: 'Kurrikula: Strukturat hipotetike kushtore dhe shprehja e dëshirave komplekse në turqisht.', 
      focus: 'Fokusimi: Fjalia kushtore (-se), hipotezat dhe shprehja e dëshirave.' 
    },
    C1: { 
      desc: 'AVANCUAR', 
      index: '05',
      preview: 'Kurrikula: Strukturat letrare akademike, gazetareske dhe pjesoret e ndërlikuara turke.', 
      focus: 'Fokusimi: Pjesoret & strukturat e ndërlikuara letrare turke (Sıfat-Fiiller).' 
    },
    C2: { 
      desc: 'PRANË GJUHËS AMTARE', 
      index: '06',
      preview: 'Kurrikula: Idiomat kulturore, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.', 
      focus: 'Fokusimi: Idiomat, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.' 
    }
  };

  const getLevelProgress = (level: string) => {
    const chapterList = levels[level] || [];
    if (chapterList.length === 0) return { completed: 0, total: 0, percentage: 0 };
    const completedCount = chapterList.filter(ch => {
      const progress = ProgressRepository.getChapterProgress(ch.id);
      return progress?.is_completed === true;
    }).length;
    const percentage = Math.round((completedCount / chapterList.length) * 100);
    return { completed: completedCount, total: chapterList.length, percentage };
  };

  // Determine active incomplete level
  const getActiveLevelKey = () => {
    const keys = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    for (const key of keys) {
      const { percentage, total } = getLevelProgress(key);
      if (percentage < 100 && total > 0) {
        return key;
      }
    }
    return 'C2'; // Fallback
  };

  const activeLevelKey = getActiveLevelKey();



  const getChapterStatus = (chapterId: number) => {
    const progress = ProgressRepository.getChapterProgress(chapterId);
    if (!progress) {
      return { 
        label: 'E paprekur', 
        style: 'text-[#636B74] bg-white dark:bg-transparent border-[#DDE1E5] dark:border-neutral-800' 
      };
    }
    if (progress.is_completed) {
      return { 
        label: 'E Përfunduar', 
        style: 'text-[#2D4A36] bg-[#2D4A36]/10 border-[#2D4A36]/30' 
      };
    }
    return { 
      label: 'Në Zhvillim', 
      style: 'text-[#636B74] bg-neutral-100 dark:bg-neutral-800/50 border-[#DDE1E5] dark:border-neutral-800' 
    };
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in relative min-h-[70vh]">
      
      {/* Giant Background Typography Watermark */}
      <div className="curriculum-watermark opacity-15 select-none">
        STUDIO
      </div>

      {selectedLevel === null ? (
        /* ================= TIER 1: LEVEL ROADMAP SELECTION VIEW ================= */
        <div className="z-10 relative space-y-12 animate-fade-in">
          {/* Typographic Welcome Header */}
          <div className="text-left border-b border-[#DDE1E5] dark:border-neutral-800 pb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 border border-[#111315] dark:border-neutral-800 bg-[#111315] dark:bg-neutral-900 text-[#FBFBF9] select-none">
                Ura e Gjuhës v1.0 Offline
              </span>
              {userName && (
                <span className="text-[10px] font-bold text-[#636B74] select-none">
                  Mirë se vjen, {userName}! 👋
                </span>
              )}
            </div>

            {/* Visual Hero Banner */}
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative border border-[#DDE1E5] dark:border-neutral-800 shadow-sm bg-stone-950">
              <img 
                src="/ura_dashboard_hero.png" 
                alt="Ura e Gjuhës Hero" 
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase font-sans leading-none">
                    UDHËTIMI I DIJES SATE
                  </h1>
                  <p className="text-xs text-neutral-300 mt-1.5 max-w-lg font-normal">
                    Lidhja kulturore dhe gjuhësore mes Shqipërisë dhe Turqisë. Zgjidh kapitullin ku dëshiron të përqendrohesh sot.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Curved learning path roadmap container */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#636B74] uppercase select-none mb-6">
              Rruga e Ndërtimit të Urave (Learning Path)
            </h2>
            
            {/* The vertical dashed connection line */}
            <div className="relative border-l-2 border-dashed border-[#DDE1E5] dark:border-neutral-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-8 py-2">
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => {
                const syllabus = levelSyllabus[level];
                const { completed, total, percentage } = getLevelProgress(level);
                
                const isActive = level === activeLevelKey;
                const isCompleted = percentage === 100;
                
                // Alignment classes forming the bridge arch curve
                const offsets = [
                  'stagger-step-0',
                  'stagger-step-1',
                  'stagger-step-2',
                  'stagger-step-3',
                  'stagger-step-4',
                  'stagger-step-5'
                ];
                const offsetClass = offsets[index];

                // Decorative step indicator node on the dashed line
                const nodeColor = isCompleted 
                  ? 'bg-[var(--color-brand-success)] border-[var(--color-brand-success)]' 
                  : isActive 
                    ? 'bg-[var(--color-brand-accent)] border-[var(--color-brand-accent)] animate-pulse' 
                    : 'bg-[var(--color-bg-surface)] border-[var(--color-border-primary)]';

                return (
                  <div key={level} className="relative">
                    
                    {/* The node circle on the connection line (static, anchored on the straight vertical timeline) */}
                    <div className={`absolute w-3.5 h-3.5 rounded-full border-2 -left-[31px] md:-left-[49px] top-6 z-20 ${nodeColor}`} />

                    {/* Staggered container wrapper shifting only the cards */}
                    <div className={`transition-all duration-500 transform ${offsetClass}`}>
                      <button
                        onClick={() => setSelectedLevel(level)}
                        className={`dashboard-card-transition bg-[var(--color-bg-surface-glass)] backdrop-blur-md rounded-2xl w-full text-left cursor-pointer outline-none block group relative overflow-hidden ${
                          isActive 
                            ? 'border-2 border-[var(--color-brand-accent)] p-6 shadow-elevated hover:bg-[var(--color-bg-surface)] hover:-translate-y-0.5' 
                            : isCompleted 
                              ? 'border border-[var(--color-brand-success)]/30 py-3.5 px-5 hover:bg-[var(--color-bg-surface)] hover:border-[var(--color-brand-success)]/60 shadow-xs hover:shadow-md hover:-translate-y-0.5' 
                              : 'border border-[var(--color-border-primary-glass)] bg-[var(--color-bg-surface-glass)]/35 py-3.5 px-5 opacity-50 hover:opacity-85 hover:border-[var(--color-brand-accent)]/30 shadow-xs hover:shadow-md hover:-translate-y-0.5'
                        }`}
                      >
                        <div className="flex justify-between items-center flex-wrap gap-2 w-full">
                          <span className={`font-mono font-bold tracking-wider text-[var(--color-text-primary)] uppercase flex items-center gap-2 transition-all duration-300 ${
                            isActive ? 'text-sm' : 'text-xs'
                          }`}>
                            <UraIcon className={`transition-all duration-300 ${
                              isActive 
                                ? 'w-4 h-4 text-[var(--color-brand-accent)]' 
                                : isCompleted 
                                  ? 'w-3.5 h-3.5 text-[var(--color-brand-success)]' 
                                  : 'w-3.5 h-3.5 text-[var(--color-text-secondary)] opacity-50'
                            }`} />
                            {syllabus.index}. NIVELI {level} — {syllabus.desc}
                          </span>
                          {isActive ? (
                            <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-bold bg-[var(--color-brand-accent)] text-white select-none rounded-lg transition-all duration-200 group-hover:scale-105">
                              [ VAZHDO ]
                            </span>
                          ) : isCompleted ? (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-[var(--color-brand-success)]/40 text-[var(--color-brand-success)] bg-[var(--color-brand-success-light)] select-none rounded-lg">
                              [ PËRFUNDUAR ]
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-[var(--color-border-primary-glass)] text-[var(--color-text-secondary)] bg-neutral-100/50 dark:bg-stone-900/40 select-none rounded-lg">
                              [ I mbyllur ]
                            </span>
                          )}
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}>
                          <hr className="border-[var(--color-border-primary-glass)] mb-4 w-full" />

                          <p className="text-xs md:text-sm text-[var(--color-text-primary)] opacity-90 leading-relaxed mb-6">
                            {syllabus.preview}
                          </p>

                          <div className="space-y-2 mt-auto w-full pt-2">
                            <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-text-secondary)] font-semibold select-none">
                              <span>Përparimi: {completed} nga {total} mësime të përfunduara</span>
                              <span className="font-bold text-[var(--color-text-primary)]">{percentage}%</span>
                            </div>
                            {/* Premium Visual Progress Bar */}
                            <div className="w-full bg-neutral-200/50 dark:bg-stone-900/60 h-1.5 rounded-full overflow-hidden relative border border-neutral-200/20 dark:border-neutral-800/30 mt-1">
                              <div 
                                className="bg-gradient-to-r from-teal-500 to-[var(--color-brand-accent)] h-full rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Footer Info */}
          <div className="border-t border-[#DDE1E5] dark:border-neutral-800 pt-8 text-center select-none text-[10px] text-[#636B74] font-light leading-relaxed">
            <p>Programi është optimizuar plotësisht për përpunim lokal, pa server.</p>
          </div>
        </div>
      ) : (
        /* ================= TIER 2: LEVEL CHAPTERS VIEW ================= */
        <div className="z-10 relative animate-fade-in">
          {/* Symmetrical sharp Back Button */}
          <button
            onClick={() => setSelectedLevel(null)}
            className="mb-8 border-0 bg-transparent text-xs font-bold text-[#636B74] dark:text-neutral-400 hover:text-[#2D4A36] cursor-pointer flex items-center gap-1.5 transition uppercase tracking-widest outline-none py-1.5"
          >
            [← Kthehu te Nivelet]
          </button>

          {/* Level Header Info */}
          <div className="mb-12 text-left border-b border-[#DDE1E5] dark:border-neutral-800 pb-6">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#2D4A36] uppercase select-none">
              {levelSyllabus[selectedLevel].index}. NIVELI {selectedLevel}
            </span>
            <h2 className="text-3xl font-black text-[#111315] dark:text-white uppercase tracking-tight mt-1">
              {levelSyllabus[selectedLevel].desc}
            </h2>
            <p className="text-xs text-[#636B74] dark:text-neutral-400 mt-2 leading-relaxed max-w-xl font-light">
              {levelSyllabus[selectedLevel].preview} Zgjidhni një kapitull për të filluar mësimin.
            </p>
          </div>

          {/* Chapters Sub-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {levels[selectedLevel].map((ch) => {
              const status = getChapterStatus(ch.id);
              return (
                <button
                   key={ch.id}
                   onClick={() => loadChapter(ch.id)}
                   className="w-full text-left bg-white dark:bg-[#1E2226]/30 border border-[#DDE1E5] dark:border-neutral-800 p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-[#2D4A36] transition-all duration-300 group relative cursor-pointer outline-none shadow-xs hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3 w-full gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#2D4A36] uppercase tracking-wide">
                        Mësimi {ch.order_index}
                      </span>
                      <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border rounded-lg select-none ${status.style}`}>
                        {status.label}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111315] dark:text-white group-hover:text-[#2D4A36] transition-colors duration-150 uppercase tracking-tight mb-1">
                      {ch.title_turkish}
                    </h3>

                    {/* Albanian subtitle styled 2 sizes smaller, italic, neutral-600 */}
                    <span className="translation-subtitle block mt-0.5 text-[#636B74] dark:text-neutral-400">
                      {ch.title_albanian}
                    </span>
                  </div>
                  {/* Dynamic Chapter Badges or fallback styled initials/number */}
                  <div className="w-14 h-14 shrink-0 relative flex items-center justify-center bg-stone-900/5 dark:bg-white/5 rounded-xl overflow-hidden p-1">
                    {ch.id === 1 ? (
                      <img 
                        src="/chapter_1_badge.png" 
                        alt="Kapitulli 1 Badge" 
                        className="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-110" 
                      />
                    ) : ch.id === 2 ? (
                      <img 
                        src="/chapter_2_badge.png" 
                        alt="Kapitulli 2 Badge" 
                        className="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-110" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono font-bold text-sm rounded-lg border border-teal-500/25">
                        K{ch.order_index}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
