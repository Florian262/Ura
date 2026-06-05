import React, { useEffect } from 'react';

export interface DictionaryEntry {
  id: string;
  source: 'al' | 'tr';
  word: string;
  translation: string;
  pos: string;
  inflection?: string;
  notes?: string;
  senses?: string[];
  examples?: { source: string; target: string }[];
  derivatives?: { word: string; translation: string; pos: string }[];
  is_balkan?: boolean;
  chapterTitle?: string;
  is_a1_vocab?: boolean; // Badge flag for A1 Thematic Vocab items
}

interface WordDetailDrawerProps {
  entry: DictionaryEntry | null;
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (word: string, sourceLang: 'tr' | 'al') => void;
}

export const WordDetailDrawer: React.FC<WordDetailDrawerProps> = ({
  entry,
  isOpen,
  onClose,
  onSpeak,
}) => {
  // Prevent body scrolling when the drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end md:items-stretch items-end">
      {/* Backdrop with fade-in animation */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 cursor-pointer animate-fade-in"
      />

      {/* Slide-over Panel for Desktop & Slide-up Sheet for Mobile */}
      <div className="relative z-10 w-full md:max-w-md bg-white dark:bg-neutral-900 md:h-full max-h-[85vh] md:max-h-full rounded-t-3xl md:rounded-t-none md:rounded-l-3xl border-t md:border-t-0 md:border-l border-[#E9ECEF] dark:border-neutral-800 shadow-elevated flex flex-col justify-between overflow-hidden animate-slide-in-right md:animate-slide-in-right max-md:animate-slide-up">
        
        {/* Mobile handle indicator */}
        <div className="md:hidden w-12 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full mx-auto mt-4 mb-1 shrink-0" />

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto px-6 py-6 md:py-8 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#E9ECEF] dark:border-neutral-800 pb-4">
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-xl font-black text-[#1C1917] dark:text-white font-technical uppercase tracking-wide">
                  {entry.word}
                </h3>
                {entry.inflection && (
                  <span className="text-xs font-bold text-[#D97706]">
                    {entry.inflection}
                  </span>
                )}
              </div>

              {/* Part of Speech & Badge Tags */}
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#565E64] dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-750 px-1.5 py-0.5 rounded-md leading-none">
                  {entry.pos}
                </span>
                {entry.is_balkan && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/35 px-1.5 py-0.5 rounded-md leading-none">
                    Huazim Ballkanik 🤝
                  </span>
                )}
                {entry.is_a1_vocab && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-1.5 py-0.5 rounded-md leading-none">
                    Fjalorth A1 📚
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => onSpeak(entry.word, entry.source)}
                className="w-9 h-9 rounded-lg border border-[#E9ECEF] dark:border-neutral-800 hover:border-[#3A5A40] dark:hover:border-[#14B8A6] hover:text-[#3A5A40] dark:hover:text-[#14B8A6] bg-white dark:bg-neutral-850 flex items-center justify-center cursor-pointer shadow-xs transition duration-200 text-lg"
                title="Shqipto fjalën zanor"
              >
                🔊
              </button>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg border border-[#E9ECEF] dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 bg-white dark:bg-neutral-850 text-xs font-bold flex items-center justify-center cursor-pointer shadow-xs transition duration-200 dark:text-neutral-350"
                title="Mbyll"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Meanings */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
              Përkthimi / Kuptimi:
            </span>

            {entry.senses && entry.senses.length > 0 ? (
              <ol className="list-decimal pl-4 space-y-1.5 text-neutral-800 dark:text-neutral-200">
                {entry.senses.map((sense, idx) => (
                  <li key={idx} className="text-sm font-medium">
                    {sense}
                  </li>
                ))}
              </ol>
            ) : (
              <span className="text-base font-semibold text-[#0D9488] dark:text-[#14B8A6] block leading-snug">
                {entry.translation}
              </span>
            )}
          </div>

          {/* Notes */}
          {entry.notes && (
            <div className="bg-[#3A5A40]/5 dark:bg-[#14B8A6]/5 border border-[#3A5A40]/10 dark:border-[#14B8A6]/10 rounded-xl p-4 text-xs text-[#1A1D20] dark:text-neutral-300 font-normal leading-relaxed italic">
              <span className="font-bold text-[#3A5A40] dark:text-[#14B8A6] normal-case not-italic block text-[9px] uppercase tracking-wider mb-1">
                Shënim Gramatikor:
              </span>
              {entry.notes}
            </div>
          )}

          {/* Examples */}
          <div className="space-y-3 pt-4 border-t border-[#E9ECEF] dark:border-neutral-800">
            {entry.examples && entry.examples.length > 0 ? (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                  Shembuj Përdorimi:
                </span>
                <div className="space-y-2.5">
                  {entry.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="text-xs italic font-light text-[#565E64] dark:text-neutral-400 border-l-2 border-[#E9ECEF] dark:border-neutral-850 pl-3 py-0.5"
                    >
                      {ex.source} &rarr;{' '}
                      <span className="font-medium text-[#0D9488] dark:text-[#14B8A6] not-italic">
                        {ex.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-[10px] text-neutral-300 dark:text-neutral-600 italic font-light">
                Nuk ka shembuj shtesë të regjistruar për këtë fjalë.
              </div>
            )}
          </div>

          {/* Derivatives */}
          {entry.derivatives && entry.derivatives.length > 0 && (
            <div className="space-y-2.5 pt-4 border-t border-[#E9ECEF] dark:border-neutral-800">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                Fjalë të prejardhura (Derivatives):
              </span>
              <div className="flex flex-wrap gap-2">
                {entry.derivatives.map((deriv, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-200/50 dark:border-neutral-750/50 rounded-lg px-2.5 py-1.5 text-xs flex items-center"
                  >
                    <span className="font-bold text-[#1C1917] dark:text-neutral-200">
                      {deriv.word}
                    </span>
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-600 mx-1.5">
                      |
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400 italic">
                      {deriv.translation}
                    </span>
                    <span className="text-[8px] text-[#0D9488] dark:text-[#14B8A6] font-bold ml-2 bg-[#0D9488]/10 dark:bg-[#14B8A6]/10 px-1.5 py-0.5 rounded-sm uppercase tracking-wider leading-none">
                      {deriv.pos}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer (Source Metadata) */}
        {entry.chapterTitle && (
          <div className="bg-neutral-50 dark:bg-neutral-850 px-6 py-4 border-t border-[#E9ECEF] dark:border-neutral-800 text-[9px] text-neutral-400 dark:text-neutral-500 flex justify-between items-center font-light shrink-0">
            <span>Burimi: Kurrikula e Mësimit</span>
            <span className="font-medium text-[#565E64] dark:text-neutral-350 bg-neutral-200/40 dark:bg-neutral-800 px-2 py-0.5 rounded-md">
              {entry.chapterTitle}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
