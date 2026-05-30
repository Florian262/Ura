import React, { useState, useMemo } from 'react';
import { ChapterRepository } from '../../../infrastructure/repository/ChapterRepository';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';
import type { Vocabulary } from '../../../infrastructure/db/seedData';


export const DictionaryPage: React.FC = () => {
  const { play, isPlaying, currentSrc } = useAudioPlayer();
  
  // States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBalkanOnly, setShowBalkanOnly] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');

  // Compile all vocabularies from all chapters in the database
  const allVocabulary = useMemo(() => {
    const chapters = ChapterRepository.getAllChapters();
    const list: (Vocabulary & { level: string; chapterTitle: string })[] = [];
    
    chapters.forEach(ch => {
      const vocab = ChapterRepository.getVocabularyForChapter(ch.id);
      vocab.forEach(v => {
        list.push({
          ...v,
          level: ch.level,
          chapterTitle: ch.title_turkish
        });
      });
    });

    return list;
  }, []);

  // Filtered Vocabularies
  const filteredVocab = useMemo(() => {
    return allVocabulary.filter(v => {
      const matchesSearch = 
        v.turkish_word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.albanian_word.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesBalkan = !showBalkanOnly || v.is_shared_balkan_word === 1;
      
      const matchesLevel = selectedLevel === 'ALL' || v.level === selectedLevel;

      return matchesSearch && matchesBalkan && matchesLevel;
    });
  }, [allVocabulary, searchQuery, showBalkanOnly, selectedLevel]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in space-y-8 relative">
      
      {/* Giant Background Watermark */}
      <div className="curriculum-watermark opacity-20">
        FJALORI
      </div>

      {/* Header */}
      <div className="text-center md:text-left border-b border-[#E9ECEF] pb-6 z-10 relative">
        <h2 className="text-2xl font-black text-[#1A1D20] tracking-tight uppercase font-sans">
          Fjalori i Përbashkët Shqip-Turqisht
        </h2>
        <p className="text-[#565E64] font-light mt-1.5 max-w-2xl leading-relaxed text-sm">
          Seksion i veçantë reference. Këtu mund të kërkoni të gjitha fjalët e prezantuara në kapituj, me fokus në fjalët e përbashkëta Ballkanike (Balkanizma) për të thjeshtuar memorizimin.
        </p>
      </div>

      {/* Control Filters Panel */}
      <div className="glass-panel rounded-none p-6 border border-[#E9ECEF] bg-white flex flex-col md:flex-row gap-4 justify-between items-center z-10 relative">
        {/* Search Input */}
        <div className="w-full md:flex-grow max-w-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Kërko fjalë në shqip ose turqisht..."
            className="w-full rounded-none border border-[#E9ECEF] bg-white px-4 py-2.5 text-sm text-[#1A1D20] placeholder-neutral-400 focus:border-[#565E64] focus:outline-none font-technical tracking-wide"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-xs text-neutral-400 hover:text-[#1A1D20] bg-transparent border-0 cursor-pointer"
            >
              Fshi
            </button>
          )}
        </div>

        {/* Level Filters & Balkan Toggle */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
          {/* Level Filter Selector */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="rounded-none border border-[#E9ECEF] bg-white text-[#565E64] px-3 py-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
          >
            <option value="ALL">Të Gjithë Nivelet</option>
            <option value="A1">Niveli A1</option>
            <option value="A2">Niveli A2</option>
            <option value="B1">Niveli B1</option>
            <option value="B2">Niveli B2</option>
            <option value="C1">Niveli C1</option>
            <option value="C2">Niveli C2</option>
          </select>

          {/* Balkan toggle button */}
          <button
            onClick={() => setShowBalkanOnly(!showBalkanOnly)}
            className={`px-4 py-2.5 rounded-none border text-xs font-bold transition duration-200 cursor-pointer ${
              showBalkanOnly
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white text-[#565E64] border-[#E9ECEF] hover:bg-neutral-50'
            }`}
          >
            {showBalkanOnly ? '✓ Huazimet Ballkanike' : 'Filtro Huazimet Ballkanike 🤝'}
          </button>
        </div>
      </div>

      {/* Vocabulary Results Grid */}
      {filteredVocab.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10 relative">
          {filteredVocab.map(v => {
            const isBalkan = v.is_shared_balkan_word === 1;
            const isThisPlaying = isPlaying && currentSrc === v.audio_asset_stub;

            return (
              <div
                key={`${v.level}-${v.id}`}
                className={`glass-card rounded-none p-4 border transition duration-200 relative group overflow-hidden ${
                  isBalkan 
                    ? 'balkan-card' 
                    : 'border-[#E9ECEF]'
                }`}
              >
                {/* Visual Accent Tags */}
                <div className="absolute right-2 top-2 flex gap-1.5 items-center">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#565E64] bg-neutral-100 border border-[#E9ECEF] px-1.5 py-0.5 rounded-none leading-none">
                    {v.level}
                  </span>
                  {isBalkan && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-1.5 py-0.5 rounded-none leading-none">
                      Balkanizëm 🤝
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start mt-2">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#1A1D20] font-technical tracking-wide group-hover:text-[#3A5A40] transition-colors uppercase">
                      {v.turkish_word}
                    </h3>
                    
                    {/* Translation Rule: Exactly 2 structural font sizes smaller, italic, text-neutral-500 */}
                    <span className="translation-subtitle mt-0.5">
                      {v.albanian_word}
                    </span>
                  </div>

                  {v.audio_asset_stub && (
                    <button
                      onClick={() => play(v.audio_asset_stub!)}
                      className={`p-1.5 rounded-none border text-xs transition duration-200 ${
                        isThisPlaying
                          ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/35 animate-pulse'
                          : 'bg-white border-[#E9ECEF] text-[#565E64] hover:text-[#3A5A40] hover:border-[#3A5A40]'
                      }`}
                    >
                      🔊
                    </button>
                  )}
                </div>

                {v.notes_albanian && (
                  <div className="mt-3 pt-2.5 border-t border-[#E9ECEF]/80 text-xs text-[#565E64] font-light italic leading-relaxed">
                    {v.notes_albanian}
                  </div>
                )}
                
                <div className="text-[9px] text-neutral-400 font-light tracking-wide mt-2 pt-1.5 border-t border-[#E9ECEF]/60 block">
                  Kapitulli: {v.chapterTitle}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="glass-panel border border-dashed border-[#E9ECEF] rounded-none py-16 text-center text-[#565E64] z-10 relative bg-white">
          <span className="text-3xl block mb-2 font-light">🔍</span>
          <p className="text-sm italic font-light">Nuk u gjet asnjë fjalë që përputhet me kërkimin tuaj.</p>
        </div>
      )}
    </div>
  );
};
