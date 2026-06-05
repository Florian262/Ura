import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

interface VocabularyModuleProps {
  onComplete?: () => void;
}

export const VocabularyModule: React.FC<VocabularyModuleProps> = ({ onComplete }) => {
  const { vocabulary } = useLesson();
  const { play, playText, isPlaying, currentSrc } = useAudioPlayer();
  const [isFlashcardMode, setIsFlashcardMode] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});

  if (vocabulary.length === 0) return null;

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white border border-[#E9ECEF] shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-[#E9ECEF]">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 2</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Fjalori i Ri (Yeni Kelimeler)</h2>
          <p className="text-xs text-[#565E64] font-light mt-1">
            Lexiku i prezantuar në tekst. Vini re fjalët e shënuara si huazime të përbashkëta historike.
          </p>
        </div>
        <button
          onClick={() => {
            setIsFlashcardMode(!isFlashcardMode);
            setRevealedIds({}); // Reset when toggling mode
            onComplete?.();
          }}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
            isFlashcardMode
              ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
              : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
          }`}
        >
          {isFlashcardMode ? '🎴 Mënyra Listë' : '🎴 Mënyra Flashcard'}
        </button>
      </div>

      {/* Semantic Grid listing lexical items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {vocabulary.map(v => {
          const isBalkan = v.is_shared_balkan_word === 1;
          const isThisPlaying = isPlaying && currentSrc === v.turkish_word;
          const isRevealed = revealedIds[v.id] || !isFlashcardMode;

          return (
            <div
              key={v.id}
              onClick={() => {
                if (isFlashcardMode) {
                  setRevealedIds(prev => ({
                    ...prev,
                    [v.id]: !prev[v.id]
                  }));
                }
              }}
              className={`glass-card rounded-2xl p-4 border transition duration-200 relative group overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                isFlashcardMode ? 'cursor-pointer' : ''
              } ${
                isBalkan 
                  ? 'balkan-card' 
                  : 'border-[#E9ECEF]'
              }`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Turkish Word */}
                    <h3 lang="tr" className="text-base font-bold text-[#1A1D20] font-technical tracking-wide group-hover:text-[#3A5A40] transition-colors">
                      {v.turkish_word}
                    </h3>
                    
                    {/* Part of Speech Badge */}
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-2 py-0.5 rounded-md select-none shrink-0">
                      {v.category}
                    </span>

                    {/* Balkanism Accent Light Indicator */}
                    {isBalkan && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-2 py-0.5 rounded-md select-none shrink-0">
                        Balkanizëm 🤝
                      </span>
                    )}
                  </div>
                  
                  {/* Albanian Translation - Translation Rule */}
                  <div className="relative">
                    <span className={`translation-subtitle mt-0.5 block transition duration-200 ${
                      !isRevealed ? 'blur-xs select-none pointer-events-none opacity-30' : ''
                    }`}>
                      {v.albanian_word}
                    </span>
                    {!isRevealed && (
                      <span className="text-[10px] text-neutral-400 font-light block mt-1">
                        (Kliko për ta zbuluar)
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card flip click
                    if (v.audio_asset_stub) {
                      play(v.audio_asset_stub, v.turkish_word);
                    } else {
                      playText(v.turkish_word, 'tr');
                    }
                    onComplete?.();
                  }}
                  className={`p-1.5 rounded-lg border text-xs transition duration-200 cursor-pointer shadow-xs shrink-0 ${
                    isThisPlaying
                      ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/35 animate-pulse'
                      : 'bg-white border-[#E9ECEF] text-[#565E64] hover:text-[#3A5A40] hover:border-[#3A5A40]'
                  }`}
                  title="Dëgjo prononcimin"
                >
                  🔊
                </button>
              </div>

              {/* Context Tag/Notes detailing lexical links */}
              {v.notes_albanian && (
                <div className="mt-3 pt-2.5 border-t border-[#E9ECEF]/80 text-xs text-[#565E64] font-light italic leading-relaxed">
                  {v.notes_albanian}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
