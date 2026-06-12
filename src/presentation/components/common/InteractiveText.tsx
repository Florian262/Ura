import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { lookupWord } from '../../../core/harmony/stemmer';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';
import type { DictionaryEntry } from './WordDetailDrawer';

interface InteractiveTextProps {
  text: string;
  onShowDetail: (entry: DictionaryEntry) => void;
  className?: string;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  text,
  onShowDetail,
  className = ""
}) => {
  const [activeEntry, setActiveEntry] = useState<DictionaryEntry | null>(null);
  const [clickedWord, setClickedWord] = useState<string | null>(null);
  const [popupPos, setPopupPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const { playText } = useAudioPlayer();

  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, token: string) => {
    e.stopPropagation();
    const entry = lookupWord(token);
    if (entry) {
      setActiveEntry(entry);
      setClickedWord(token);
      
      const rect = e.currentTarget.getBoundingClientRect();
      const popupWidth = 256; // w-64 is 16rem = 256px
      const leftPos = rect.left + (rect.width / 2) - (popupWidth / 2);
      
      setPopupPos({
        top: rect.bottom + 8,
        left: Math.max(12, Math.min(window.innerWidth - popupWidth - 12, leftPos))
      });
    }
  };

  const closePopup = () => {
    setActiveEntry(null);
    setClickedWord(null);
  };

  // Split text by whitespace and common punctuation, but keep punctuation as distinct tokens
  const tokens = text.split(/(\s+|[.,!?;:()""'’]+)/);

  return (
    <span className={`inline-wrap leading-relaxed ${className}`}>
      {tokens.map((token, idx) => {
        // If token is whitespace or punctuation, render as normal text node
        const isWord = /^[a-zçğışöüÇĞİŞÖÜ]+$/i.test(token.replace(/['’]/g, ''));
        if (!isWord) {
          return <span key={idx}>{token}</span>;
        }

        const isCurrentWordActive = clickedWord === token;

        return (
          <span
            key={idx}
            onClick={(e) => handleWordClick(e, token)}
            className={`cursor-pointer inline-block rounded px-0.5 transition duration-150 select-none ${
              isCurrentWordActive
                ? 'bg-teal-500/20 text-[#3A5A40] dark:text-[#14B8A6] font-bold shadow-xs underline decoration-teal-500'
                : 'hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 hover:text-[#3A5A40] dark:hover:text-[#14B8A6]'
            }`}
          >
            {token}
          </span>
        );
      })}

      {activeEntry && createPortal(
        <>
          {/* Backdrop for easy closing */}
          <div 
            className="fixed inset-0 z-45 bg-transparent" 
            onClick={closePopup} 
          />
          
          {/* Popover Bubble */}
          <div
            style={{ 
              top: `${popupPos.top}px`, 
              left: `${popupPos.left}px`,
              width: '256px'
            }}
            className="fixed z-55 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 rounded-2xl shadow-lg p-4 animate-fade-in text-left pointer-events-auto flex flex-col gap-2.5"
          >
            {/* Header */}
            <div className="flex justify-between items-start border-b border-neutral-100 dark:border-neutral-800 pb-1.5">
              <div>
                <h4 lang="tr" className="text-sm font-black text-neutral-800 dark:text-neutral-100 font-technical">
                  {activeEntry.word}
                </h4>
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 block">
                  {activeEntry.pos}
                </span>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playText(activeEntry.word, 'tr');
                }}
                className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] flex items-center justify-center text-xs transition bg-white dark:bg-neutral-850 cursor-pointer text-neutral-500 dark:text-neutral-400"
                title="Dëgjo fjalën"
              >
                🔊
              </button>
            </div>

            {/* Translation content */}
            <div className="text-xs">
              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">Shqip:</span>
              <p className="font-semibold text-[#0D9488] dark:text-[#14B8A6] leading-tight">
                {activeEntry.translation}
              </p>
            </div>

            {/* Link to detail drawer */}
            <div className="flex justify-between items-center mt-1 pt-1.5 border-t border-neutral-100 dark:border-neutral-800 text-[10px]">
              <button
                onClick={() => {
                  closePopup();
                  onShowDetail(activeEntry);
                }}
                className="text-[#3A5A40] dark:text-[#14B8A6] font-bold hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Më shumë detaje...
              </button>
              
              <button
                onClick={closePopup}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Mbyll
              </button>
            </div>
          </div>
        </>,
        document.body
      )}
    </span>
  );
};
