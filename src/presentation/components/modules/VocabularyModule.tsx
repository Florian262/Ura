import React from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

export const VocabularyModule: React.FC = () => {
  const { vocabulary } = useLesson();
  const { play, isPlaying, currentSrc } = useAudioPlayer();

  if (vocabulary.length === 0) return null;

  return (
    <div className="glass-panel rounded-none p-6 md:p-8 bg-white border border-[#E9ECEF]">
      <div className="mb-6 pb-4 border-b border-[#E9ECEF]">
        <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 2</span>
        <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Fjalori i Ri (Yeni Kelimeler)</h2>
        <p className="text-xs text-[#565E64] font-light mt-1">
          Lexiku i prezantuar në tekst. Vini re fjalët e shënuara si huazime të përbashkëta historike.
        </p>
      </div>

      {/* Semantic Grid listing lexical items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {vocabulary.map(v => {
          const isBalkan = v.is_shared_balkan_word === 1;
          const isThisPlaying = isPlaying && currentSrc === v.audio_asset_stub;

          return (
            <div
              key={v.id}
              className={`glass-card rounded-none p-4 border transition duration-200 relative group overflow-hidden ${
                isBalkan 
                  ? 'balkan-card' 
                  : 'border-[#E9ECEF]'
              }`}
            >
              {/* Balkanism Accent Light Indicator */}
              {isBalkan && (
                <div className="absolute right-2 top-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-2 py-0.5 rounded-none">
                    Balkanizëm 🤝
                  </span>
                </div>
              )}

              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  {/* Turkish Word */}
                  <h3 className="text-base font-bold text-[#1A1D20] font-technical tracking-wide group-hover:text-[#3A5A40] transition-colors uppercase">
                    {v.turkish_word}
                  </h3>
                  
                  {/* Albanian Translation - Translation Rule */}
                  <span className="translation-subtitle mt-0.5">
                    {v.albanian_word}
                  </span>
                </div>

                {/* Audio asset trigger stub */}
                {v.audio_asset_stub && (
                  <button
                    onClick={() => play(v.audio_asset_stub!)}
                    className={`p-1.5 rounded-none border text-xs transition duration-200 cursor-pointer ${
                      isThisPlaying
                        ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/35 animate-pulse'
                        : 'bg-white border-[#E9ECEF] text-[#565E64] hover:text-[#3A5A40] hover:border-[#3A5A40]'
                    }`}
                    title="Dëgjo prononcimin"
                  >
                    🔊
                  </button>
                )}
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
