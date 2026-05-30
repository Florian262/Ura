import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import type { Chapter } from '../../../infrastructure/db/seedData';
import { ProgressRepository } from '../../../infrastructure/repository/ProgressRepository';

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

  // Solid, heavy progress track generator (24 character width)
  const getProgressBarText = (percentage: number) => {
    const totalWidth = 24;
    if (percentage === 0) {
      return '█' + '─'.repeat(totalWidth - 1);
    }
    if (percentage === 100) {
      return '▬'.repeat(totalWidth - 1) + '█';
    }
    const filledWidth = Math.round((percentage / 100) * totalWidth);
    const left = '▬'.repeat(Math.max(0, filledWidth - 1));
    const right = '─'.repeat(Math.max(0, totalWidth - filledWidth));
    return left + '█' + right;
  };

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
        <div className="z-10 relative space-y-12">
          {/* Typographic Welcome Header */}
          <div className="text-left border-b border-[#DDE1E5] dark:border-neutral-800 pb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 border border-[#111315] bg-[#111315] text-[#FBFBF9] select-none">
                Ura e Gjuhës v1.0 Offline
              </span>
              {userName && (
                <span className="text-[10px] font-bold text-[#636B74] select-none">
                  Mirë se vjen, {userName}! 👋
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#111315] dark:text-white uppercase font-sans leading-none">
              UDHËTIMI I DIJES SATE
            </h1>
            <p className="text-sm text-[#636B74] dark:text-neutral-400 mt-2 font-normal">
              Zgjidh kapitullin ku dëshiron të përqendrohesh sot. Programi është optimizuar plotësisht për përpunim lokal, pa server.
            </p>
          </div>

          {/* 1. THE ACTIVE ANCHOR CARD (Dominates Layout) */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#636B74] uppercase select-none">
              NIVELI AKTUAL NË ZHVILLIM
            </h2>
            {(() => {
              const level = activeLevelKey;
              const syllabus = levelSyllabus[level];
              const { completed, total, percentage } = getLevelProgress(level);
              const progressTrack = getProgressBarText(percentage);

              return (
                <button
                  onClick={() => setSelectedLevel(level)}
                  className="border-2 border-[#111315] dark:border-neutral-700 bg-[#FBFBF9] dark:bg-[#1E2226]/30 p-6 hover:bg-white dark:hover:bg-[#1E2226]/50 transition-colors duration-150 rounded-none w-full text-left cursor-pointer outline-none block group relative overflow-hidden"
                >
                  {/* Top Bar: Code, sub-label & Active Forest Green micro-badge */}
                  <div className="flex justify-between items-center mb-3 flex-wrap gap-2 w-full">
                    <span className="text-sm font-mono font-bold tracking-wider text-[#111315] dark:text-white uppercase">
                      {syllabus.index}. NIVELI {level} — {syllabus.desc}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-bold bg-[#2D4A36] text-white dark:bg-[#4A7253] select-none transition group-hover:bg-[#1F3325]">
                      [ VAZHDO ]
                    </span>
                  </div>

                  {/* Hairline Divider */}
                  <hr className="border-[#DDE1E5] dark:border-neutral-800 my-4 w-full" />

                  {/* Curiosity Syllabus Preview */}
                  <p className="text-xs md:text-sm text-[#111315] dark:text-neutral-300 font-normal leading-relaxed mb-6">
                    {syllabus.preview}
                  </p>

                  {/* Heavy Solid Progress Track */}
                  <div className="space-y-2 mt-auto w-full pt-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#636B74] dark:text-neutral-400 font-semibold select-none">
                      <span>Përparimi: {completed} nga {total} mësime të përfunduara</span>
                      <span className="font-bold text-[#111315] dark:text-white">{percentage}%</span>
                    </div>
                    <div className="text-xs font-mono tracking-tighter text-neutral-400 dark:text-neutral-600 font-semibold select-none overflow-hidden text-ellipsis whitespace-nowrap">
                      {progressTrack}
                    </div>
                  </div>
                </button>
              );
            })()}
          </div>

          {/* 2. THE ROADMAP ROAD VIEW (Future levels) */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#636B74] uppercase select-none">
              VËZHGIMI I RUGËTIMIT TËND (Nivelet e Ardhshme)
            </h2>
            
            <div className="space-y-3">
              {Object.keys(levels).map((level) => {
                // Skip the active level since it is anchored above
                if (level === activeLevelKey) return null;

                const syllabus = levelSyllabus[level];
                const { percentage } = getLevelProgress(level);
                
                const isCompleted = percentage === 100;
                
                // Muted Closed visual badges (but fully clickable!)
                const statusLabel = isCompleted ? '[ PËRFUNDUAR ]' : '[ I mbyllur ]';
                const statusStyle = isCompleted 
                  ? 'border-[#2D4A36]/40 text-[#2D4A36] dark:text-[#4A7253]' 
                  : 'border-[#DDE1E5] dark:border-neutral-800 text-[#636B74] dark:text-neutral-500';

                return (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className="border border-[#DDE1E5] dark:border-neutral-800 bg-[#FBFBF9]/40 dark:bg-transparent p-5 hover:bg-white dark:hover:bg-[#1E2226]/50 hover:border-[#111315] dark:hover:border-neutral-700 transition-colors duration-150 rounded-none w-full text-left cursor-pointer outline-none block opacity-80 hover:opacity-100 group"
                  >
                    <div className="flex justify-between items-center flex-wrap gap-2 w-full">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#636B74] dark:text-neutral-400 group-hover:text-[#111315] dark:group-hover:text-white uppercase transition-colors duration-150">
                        {syllabus.index}. NIVELI {level} — {syllabus.desc}
                      </span>
                      <span className={`text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border select-none ${statusStyle}`}>
                        {statusLabel}
                      </span>
                    </div>

                    <p className="text-xs text-[#636B74] dark:text-neutral-400 mt-2 font-light italic leading-normal group-hover:text-[#111315] dark:group-hover:text-neutral-300 transition-colors duration-150">
                      {syllabus.focus}
                    </p>
                  </button>
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
            className="mb-8 border-0 bg-transparent text-xs font-bold text-[#636B74] dark:text-neutral-400 hover:text-[#2D4A36] dark:hover:text-[#7678ed] cursor-pointer flex items-center gap-1.5 transition uppercase tracking-widest outline-none py-1.5"
          >
            [← Kthehu te Nivelet]
          </button>

          {/* Level Header Info */}
          <div className="mb-12 text-left border-b border-[#DDE1E5] dark:border-neutral-800 pb-6">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#2D4A36] dark:text-[#7678ed] uppercase select-none">
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
                  className="w-full text-left bg-white dark:bg-[#1E2226]/30 border border-[#DDE1E5] dark:border-neutral-800 p-5 rounded-none flex flex-col justify-between hover:border-[#2D4A36] dark:hover:border-[#7678ed] transition-colors duration-150 group relative cursor-pointer outline-none"
                >
                  <div className="flex justify-between items-start mb-3 w-full gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#2D4A36] dark:text-[#7678ed] uppercase tracking-wide">
                      Mësimi {ch.order_index}
                    </span>
                    <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border select-none ${status.style}`}>
                      {status.label}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111315] dark:text-white group-hover:text-[#2D4A36] dark:group-hover:text-[#7678ed] transition-colors duration-150 uppercase tracking-tight mb-1">
                    {ch.title_turkish}
                  </h3>

                  {/* Albanian subtitle styled 2 sizes smaller, italic, neutral-600 */}
                  <span className="translation-subtitle block mt-0.5 text-[#636B74] dark:text-neutral-400">
                    {ch.title_albanian}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
