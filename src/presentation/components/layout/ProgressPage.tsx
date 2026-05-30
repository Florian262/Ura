import React, { useMemo } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { ProgressRepository } from '../../../infrastructure/repository/ProgressRepository';
import { ChapterRepository } from '../../../infrastructure/repository/ChapterRepository';

export const ProgressPage: React.FC = () => {
  const { chapters, loadChapter, resetAllData } = useLesson();

  const stats = useMemo(() => {
    const totalChaptersCount = chapters.length;
    const progressMap = ProgressRepository.getProgressMap();
    const progressItems = Object.values(progressMap);
    
    const completedChapters = progressItems.filter(p => p.is_completed).length;
    
    // Percentages
    const completionPercentage = totalChaptersCount > 0 
      ? Math.round((completedChapters / totalChaptersCount) * 100) 
      : 0;

    // Balkan words calculation
    let balkanWordsMastered = 0;
    progressItems.forEach(p => {
      if (p.is_completed) {
        const vocab = ChapterRepository.getVocabularyForChapter(p.chapter_id);
        balkanWordsMastered += vocab.filter(v => v.is_shared_balkan_word === 1).length;
      }
    });

    // Last session details
    const lastSession = ProgressRepository.getLastAccessedProgress();
    let lastChapterName = 'Nuk ka sesion aktiv';
    let lastAccessedDate = 'E paprekur';

    if (lastSession) {
      const ch = chapters.find(c => c.id === lastSession.chapter_id);
      if (ch) {
        lastChapterName = `${ch.title_turkish} (${ch.title_albanian})`;
      }
      lastAccessedDate = new Date(lastSession.last_accessed_timestamp).toLocaleString('sq-AL', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
    }

    return {
      totalChaptersCount,
      completedChapters,
      completionPercentage,
      balkanWordsMastered,
      lastChapterName,
      lastAccessedDate,
      lastSession
    };
  }, [chapters]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in space-y-8 relative">
      
      {/* Giant Background Watermark */}
      <div className="curriculum-watermark opacity-20">
        ARRRITJE
      </div>

      {/* Header */}
      <div className="text-center md:text-left border-b border-[#E9ECEF] pb-6 z-10 relative">
        <h2 className="text-2xl font-black text-[#1A1D20] tracking-tight uppercase font-sans">
          Rruga Ime (Progresi Im)
        </h2>
        <p className="text-[#565E64] font-light mt-1.5 max-w-2xl leading-relaxed text-sm">
          Seksion i veçantë statistikash. Këtu mund të gjurmoni progresin tuaj të mësimit offline, huazimet e përbashkëta që keni zotëruar dhe të dhënat e sesioneve të fundit.
        </p>
      </div>

      {/* Main Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative">
        {/* Progress Card A: Completion */}
        <div className="glass-panel rounded-none p-6 border border-[#E9ECEF] bg-white flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-[10px] font-bold text-[#1A1D20] uppercase tracking-widest block mb-2">Progresi i Përgjithshëm</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[#1A1D20]">{stats.completionPercentage}%</span>
            </div>
            <p className="text-xs text-[#565E64] mt-2 font-light">
              Keni përfunduar me sukses <span className="font-bold text-[#3A5A40]">{stats.completedChapters}</span> nga <span className="font-bold text-[#1A1D20]">{stats.totalChaptersCount}</span> kapituj të disponueshëm.
            </p>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-[#E9ECEF] border border-neutral-200 h-2 mt-6 rounded-none">
            <div 
              className="bg-[#3A5A40] h-full transition-all duration-500 rounded-none"
              style={{ width: `${stats.completionPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Card B: Balkanism counter */}
        <div className="glass-panel rounded-none p-6 border border-[#E9ECEF] bg-white flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest block mb-2">Fjalë të Përbashkëta Ballkanike</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[#3A5A40]">{stats.balkanWordsMastered}</span>
              <span className="text-xs font-bold text-[#565E64] uppercase ml-1">fjalë</span>
            </div>
            <p className="text-xs text-[#565E64] mt-2 font-light leading-relaxed">
              Zotërimi i fjalëve të përbashkëta (si dollap, xham, kuti) ju shkurton deri në <span className="font-bold text-[#1A1D20]">30%</span> të kohës së memorizimit të fjalorit të ri turk!
            </p>
          </div>
          <div className="text-[10px] text-neutral-400 font-light italic mt-6 border-t border-[#E9ECEF] pt-3">
            Gjuhë e trashëguar 🤝 Huazime kontaktues
          </div>
        </div>

        {/* Progress Card C: Last session resume */}
        <div className="glass-panel rounded-none p-6 border border-[#E9ECEF] bg-white flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-[10px] font-bold text-[#c0392b] uppercase tracking-widest block mb-2">Sesioni i Fundit</span>
            <h3 className="text-sm font-bold text-[#1A1D20] truncate mt-1">{stats.lastChapterName}</h3>
            <p className="text-xs text-[#565E64] font-light mt-1">Aksesuar më: {stats.lastAccessedDate}</p>
          </div>
          {stats.lastSession ? (
            <button
              onClick={() => loadChapter(stats.lastSession!.chapter_id)}
              className="mt-6 w-full text-center px-4 py-2.5 bg-[#3A5A40] hover:bg-[#2A3F2E] border border-[#3A5A40] text-white rounded-none text-xs font-bold transition cursor-pointer"
            >
              Rihap Kapitullin e Fundit ⚡
            </button>
          ) : (
            <div className="text-[10px] text-neutral-400 italic mt-6 border-t border-[#E9ECEF] pt-3">
              Filloni një kapitull për të gjeneruar të dhëna!
            </div>
          )}
        </div>
      </div>

      {/* Chapters Detailed Status Map */}
      <div className="glass-panel rounded-none p-6 border border-[#E9ECEF] bg-white z-10 relative">
        <h3 className="text-xs font-bold text-[#1A1D20] uppercase tracking-widest border-b border-[#E9ECEF] pb-2 mb-4">
          Statusi i Kapitujve të Kurrikulës
        </h3>

        <div className="divide-y divide-[#E9ECEF]">
          {chapters.map(ch => {
            const progress = ProgressRepository.getChapterProgress(ch.id);
            const isCompleted = progress?.is_completed || false;
            
            return (
              <div key={ch.id} className="py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="text-left">
                  <span className="text-[9px] font-bold text-[#565E64] uppercase mr-2 bg-neutral-100 px-1.5 py-0.5 rounded-none border border-[#E9ECEF] leading-none">
                    {ch.level}
                  </span>
                  <span className="text-sm font-bold text-[#1A1D20] font-technical uppercase">
                    {ch.title_turkish}
                  </span>
                  
                  {/* Translation Rule: 2 sizes smaller, italic, neutral-500 */}
                  <span className="translation-subtitle block sm:inline sm:ml-2 sm:mt-0">
                    ({ch.title_albanian})
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-none border ${
                    isCompleted
                      ? 'text-[#3A5A40] bg-[#3A5A40]/10 border-[#3A5A40]/30'
                      : progress
                      ? 'text-[#565E64] bg-[#E9ECEF] border-[#565E64]/30'
                      : 'text-neutral-450 bg-white border-[#E9ECEF]'
                  }`}>
                    {isCompleted ? 'Përfunduar' : progress ? 'Në Zhvillim' : 'E Paprekur'}
                  </span>

                  <button
                    onClick={() => loadChapter(ch.id)}
                    className="text-xs text-[#3A5A40] hover:text-[#2A3F2E] underline cursor-pointer bg-transparent border-0 font-bold"
                  >
                    Hap mësimin
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Danger Zone: Reset Button */}
      <div className="glass-panel border border-[#c0392b]/30 rounded-none p-6 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 z-10 relative">
        <div className="text-center sm:text-left">
          <h4 className="text-sm font-bold text-[#c0392b] uppercase tracking-wide">Zonë e Ndjeshme (Danger Zone)</h4>
          <p className="text-xs text-[#565E64] font-light mt-0.5">
            Kliko këtu për të fshirë të gjithë progresin tuaj studimor, fjalët e përbashkëta të zotëruara dhe emrin e ruajtur. Ky veprim është i pakthyeshëm.
          </p>
        </div>
        <button
          onClick={resetAllData}
          className="px-5 py-2.5 bg-[#c0392b]/10 hover:bg-[#c0392b]/20 border border-[#c0392b] text-[#c0392b] font-bold rounded-none text-xs uppercase tracking-wider transition cursor-pointer"
        >
          Fshi të gjitha të dhënat ⚠️
        </button>
      </div>

    </div>
  );
};
