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
    <div className="glass-panel md:rounded-2xl p-0 md:p-8 bg-transparent md:bg-white border-none md:border md:border-[#E9ECEF] shadow-none md:shadow-sm">
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

          if (isFlashcardMode) {
            return (
              <div
                key={v.id}
                onClick={() => {
                  setRevealedIds(prev => ({
                    ...prev,
                    [v.id]: !prev[v.id]
                  }));
                }}
                className="w-full min-h-[130px] cursor-pointer relative select-none"
                style={{ perspective: '1000px' }}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-500"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side: Turkish Word */}
                  <div 
                    className={`absolute inset-0 w-full h-full p-4 rounded-2xl border flex flex-col justify-between bg-[var(--color-bg-surface)] border-[var(--color-border-primary)] shadow-sm ${
                      isBalkan ? 'border-[#3A5A40] dark:border-emerald-600 bg-emerald-50/5' : ''
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 lang="tr" className="text-base font-bold text-[var(--color-text-primary)] font-technical tracking-wide">
                            {v.turkish_word}
                          </h3>
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-2 py-0.5 rounded-md">
                            {v.category}
                          </span>
                          {isBalkan && (
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-2 py-0.5 rounded-md">
                              Balkanizëm 🤝
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-2">(Kliko për ta zbuluar shqip)</p>
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
                            : 'bg-[var(--color-bg-surface)] border-[var(--color-border-primary)] text-neutral-500 hover:text-[#3A5A40]'
                        }`}
                        title="Dëgjo prononcimin"
                      >
                        🔊
                      </button>
                    </div>
                  </div>

                  {/* Back Side: Albanian Word */}
                  <div 
                    className={`absolute inset-0 w-full h-full p-4 rounded-2xl border flex flex-col justify-between bg-[var(--color-bg-surface-glass)] border-[var(--color-brand-accent)] shadow-sm`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="space-y-2 flex-1">
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Shqip:</span>
                      <span className="text-base font-bold text-[var(--color-brand-accent)] block leading-snug">
                        {v.albanian_word}
                      </span>
                      {v.notes_albanian && (
                        <p className="text-[11px] text-[var(--color-text-secondary)] font-light italic leading-relaxed mt-1 border-t border-[var(--color-border-primary)]/40 pt-1.5">
                          {v.notes_albanian}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={v.id}
              className={`glass-card rounded-2xl p-4 border transition duration-200 relative group overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                isBalkan 
                  ? 'balkan-card' 
                  : 'border-[#E9ECEF] dark:border-neutral-800'
              }`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Turkish Word */}
                    <h3 lang="tr" className="text-base font-bold text-[#1A1D20] dark:text-white font-technical tracking-wide group-hover:text-[#3A5A40] transition-colors">
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
                    <span className={`translation-subtitle mt-0.5 block transition duration-200`}>
                      {v.albanian_word}
                    </span>
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
                      : 'bg-white dark:bg-neutral-850 border-[#E9ECEF] dark:border-neutral-800 text-[#565E64] hover:text-[#3A5A40] hover:border-[#3A5A40]'
                  }`}
                  title="Dëgjo prononcimin"
                >
                  🔊
                </button>
              </div>

              {/* Context Tag/Notes detailing lexical links */}
              {v.notes_albanian && (
                <div className="mt-3 pt-2.5 border-t border-[#E9ECEF]/80 dark:border-neutral-800/80 text-xs text-[#565E64] dark:text-neutral-400 font-light italic leading-relaxed">
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
