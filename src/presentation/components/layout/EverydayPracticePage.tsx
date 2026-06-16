import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { EVERYDAY_PRACTICE_ITEMS, type PracticeItem, type PracticeContentLine } from '../../../infrastructure/db/everydayPracticeData';
import { InteractiveText } from '../common/InteractiveText';
import { WordDetailDrawer, type DictionaryEntry } from '../common/WordDetailDrawer';
import { lookupWord } from '../../../core/harmony/stemmer';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

const ChatIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const BookOpenIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const WarningIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-amber-500 mx-auto" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 text-neutral-400 mx-auto" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ScenarioIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'supermarket':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case 'cafe':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );
    case 'taxi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'introduction':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      );
    case 'routine':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'family':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2" />
          <circle cx="11" cy="7" r="3" />
          <path d="M23 21v-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2" opacity="0.7" />
          <circle cx="19" cy="7" r="3" opacity="0.7" />
        </svg>
      );
    case 'neighborhood':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'weekend':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'doctor':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'hotel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4v16" />
          <path d="M2 8h18a2 2 0 0 1 2 2v10" />
          <path d="M2 17h20" />
          <circle cx="6" cy="11" r="2" />
        </svg>
      );
    case 'travel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M7 8V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" />
          <path d="M3 14h18" />
        </svg>
      );
    case 'future':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'bank':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="21" width="18" height="2" />
          <rect x="5" y="11" width="14" height="10" />
          <path d="M3 11l9-7 9 7" />
          <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
        </svg>
      );
    case 'job':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'home':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'repair':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'business':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 3.42-2 3.42s2.16-.5 3.42-2M21 3s-6.5 0-11 4.5a18.9 18.9 0 0 0-4.5 11c0 0 3 0 5-2l6.5-6.5C21 5.5 21 3 21 3z" />
          <path d="M9 15l3 3" />
        </svg>
      );
    case 'culture':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'sports':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'nature':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 1 9.2a7 7 0 0 1-9 8.8z" />
          <path d="M19 2L9.8 11.2" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
};

export const EverydayPracticePage: React.FC = () => {
  // State coordinates
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2' | 'C1'>('A1');
  const [selectedType, setSelectedType] = useState<'dialog' | 'story'>('dialog');
  const [activeItem, setActiveItem] = useState<PracticeItem | null>(null);
  const [selectedPerspective, setSelectedPerspective] = useState<'firstPerson' | 'thirdPerson'>('firstPerson');
  
  // Track revealed translation indexes
  const [revealedLines, setRevealedLines] = useState<Record<number, boolean>>({});
  
  // Track active paragraph sentence selection
  const [activeSentenceIdx, setActiveSentenceIdx] = useState<number | null>(null);

  // Audio Player hook
  const { playDialogue, playText, stop, isPlaying, currentSrc, activeDialogueIndex } = useAudioPlayer();

  // Drawer state for dictionary word details
  const [drawerEntry, setDrawerEntry] = useState<DictionaryEntry | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Global popup state for words touched in InteractiveText
  const [activeWordPopup, setActiveWordPopup] = useState<{
    entry: DictionaryEntry;
    pos: { top: number; left: number };
    renderAbove: boolean;
    key: string;
  } | null>(null);

  // Global translation toggle
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);

  // Sidebar resizing and layout states
  const [sidebarWidth, setSidebarWidth] = useState<number>(320);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [isMobileListOpen, setIsMobileListOpen] = useState<boolean>(false);

  // Monitor media query for desktop layout
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsLargeScreen(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const workspace = document.getElementById('everyday-practice-workspace');
      if (workspace) {
        const rect = workspace.getBoundingClientRect();
        const newWidth = e.clientX - rect.left;
        setSidebarWidth(Math.max(200, Math.min(500, newWidth)));
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Derived state to customize sidebar element layout responsively
  const isNarrow = sidebarWidth < 280;
  const isVeryNarrow = sidebarWidth < 230;

  // Filter items based on selected level and type
  const filteredItems = useMemo(() => {
    return EVERYDAY_PRACTICE_ITEMS.filter(
      item => item.level === selectedLevel && item.type === selectedType
    );
  }, [selectedLevel, selectedType]);

  // Set the first filtered item as active when level or type shifts
  useEffect(() => {
    if (filteredItems.length > 0) {
      setActiveItem(filteredItems[0]);
    } else {
      setActiveItem(null);
    }
    setRevealedLines({});
    setActiveSentenceIdx(null);
    setShowAllTranslations(false);
    stop();
  }, [filteredItems, stop]);

  // Reset revealed lines when switching active item or perspective
  useEffect(() => {
    setRevealedLines({});
    setActiveSentenceIdx(null);
    setShowAllTranslations(false);
    stop();
  }, [activeItem, selectedPerspective, stop]);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const toggleLineTranslation = (index: number) => {
    setRevealedLines(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const activeContent = useMemo((): PracticeContentLine[] => {
    if (!activeItem) return [];
    if (activeItem.type === 'story' && activeItem.perspectives) {
      return activeItem.perspectives[selectedPerspective] || [];
    }
    return activeItem.content || [];
  }, [activeItem, selectedPerspective]);

  const firstSpeaker = useMemo(() => {
    return activeContent.find(line => line.speaker)?.speaker;
  }, [activeContent]);

  // Handle word click from InteractiveText
  const handleWordClick = (
    entry: DictionaryEntry,
    pos: { top: number; left: number },
    renderAbove: boolean,
    key: string
  ) => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollLeft = window.scrollX || window.pageXOffset;
    setActiveWordPopup({
      entry,
      pos: {
        top: pos.top + scrollTop,
        left: pos.left + scrollLeft
      },
      renderAbove,
      key
    });
  };

  const closeWordPopup = () => {
    setActiveWordPopup(null);
  };

  const handleShowDetail = (entry: DictionaryEntry) => {
    setDrawerEntry(entry);
    setIsDrawerOpen(true);
  };

  // Replicate outside click and touch start handlers to close word details popup
  useEffect(() => {
    if (!activeWordPopup) return;

    const handleOutsideClick = () => {
      closeWordPopup();
    };

    const timer = setTimeout(() => {
      window.addEventListener('click', handleOutsideClick);
      window.addEventListener('touchstart', handleOutsideClick);
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [activeWordPopup]);

  // Replicate scrolling and resize dynamic popup repositioning
  useEffect(() => {
    if (!activeWordPopup) return;

    const handleScroll = () => {
      const element = document.getElementById(`word-span-${activeWordPopup.key}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        
        // 1. Close popup if the word scrolls completely out of the viewport
        const isOutOfViewport = rect.bottom < 0 || rect.top > window.innerHeight;
        if (isOutOfViewport) {
          closeWordPopup();
          return;
        }

        // 2. Close popup if the word scrolls outside its scrollable parent container's visible bounds
        let parent = element.parentElement;
        while (parent && parent !== document.body) {
          const style = window.getComputedStyle(parent);
          const hasScroll = style.overflow === 'auto' || style.overflow === 'scroll' || 
                            style.overflowY === 'auto' || style.overflowY === 'scroll' || 
                            style.overflowX === 'auto' || style.overflowX === 'scroll';
          if (hasScroll) {
            const parentRect = parent.getBoundingClientRect();
            const isOutOfParent = rect.bottom < parentRect.top || rect.top > parentRect.bottom ||
                                  rect.right < parentRect.left || rect.left > parentRect.right;
            if (isOutOfParent) {
              closeWordPopup();
              return;
            }
          }
          parent = parent.parentElement;
        }
      }
    };

    const handleResize = () => {
      const element = document.getElementById(`word-span-${activeWordPopup.key}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const popupWidth = 256;
        const leftPos = rect.left + (rect.width / 2) - (popupWidth / 2);
        
        const spaceBelow = window.innerHeight - rect.bottom;
        const shouldRenderAbove = spaceBelow < 180;
        
        const scrollTop = window.scrollY || window.pageYOffset;
        const scrollLeft = window.scrollX || window.pageXOffset;
        
        const popupTop = shouldRenderAbove ? rect.top + scrollTop - 8 : rect.bottom + scrollTop + 8;
        const popupLeft = Math.max(12, Math.min(window.innerWidth - popupWidth - 12, leftPos + scrollLeft));

        setActiveWordPopup(prev => {
          if (!prev) return null;
          if (prev.pos.top === popupTop && prev.pos.left === popupLeft && prev.renderAbove === shouldRenderAbove) {
            return prev;
          }
          return {
            ...prev,
            pos: { top: popupTop, left: popupLeft },
            renderAbove: shouldRenderAbove
          };
        });
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeWordPopup]);

  const playSequentialText = () => {
    const formattedLines = activeContent.map(line => ({
      speaker: line.speaker,
      text: line.turkish
    }));
    playDialogue(formattedLines);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8 animate-fade-in relative">
      
      {/* Background Watermark */}
      <div className="curriculum-watermark opacity-10 pointer-events-none select-none">
        PRAKTIKË
      </div>

      {/* Header */}
      <div className="text-center md:text-left border-b border-[var(--color-border-primary)] pb-6 relative z-10">
        <h2 className="text-2xl font-black tracking-tight uppercase font-sans text-[var(--color-text-primary)]">
          Praktika e Përditshme <span className="text-xs text-neutral-400 font-normal lowercase italic">(Everyday Life Practice)</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] font-light mt-1.5 max-w-2xl leading-relaxed text-sm">
          Aplikoni njohuritë tuaja në skenarë të jetës reale. Praktikoni dialogje të përditshme ose lexoni tregime me mundësi të ndryshimit të vetës gramatikore.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[var(--color-bg-surface)] border border-[var(--color-border-primary)] p-4 rounded-2xl relative z-10 shadow-xs">
        
        {/* Level Selector Tabs */}
        <div className="flex gap-1.5 p-1 bg-[var(--color-bg-canvas)] rounded-xl border border-[var(--color-border-primary)] w-full md:w-auto overflow-x-auto no-scrollbar">
          {(['A1', 'A2', 'B1', 'B2', 'C1'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLevel === lvl
                  ? 'bg-[#3A5A40] text-white shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Type Segment Control */}
        <div className="flex gap-1.5 p-1 bg-[var(--color-bg-canvas)] rounded-xl border border-[var(--color-border-primary)] w-full md:w-auto">
          <button
            onClick={() => setSelectedType('dialog')}
            className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              selectedType === 'dialog'
                ? 'bg-[#3A5A40] text-white shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'
            }`}
          >
            <ChatIcon className="w-3.5 h-3.5" /> Dialogje
          </button>
          <button
            onClick={() => setSelectedType('story')}
            className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              selectedType === 'story'
                ? 'bg-[#3A5A40] text-white shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'
            }`}
          >
            <BookOpenIcon className="w-3.5 h-3.5" /> Tregime
          </button>
        </div>

      </div>

      {/* Main Workspace */}
      <div 
        id="everyday-practice-workspace"
        className={`flex flex-col lg:flex-row gap-6 relative z-10 ${
          isResizing ? 'select-none cursor-col-resize' : ''
        }`}
      >
        {/* Mobile Selector Dropdown */}
        {!isLargeScreen && (
          <div className="w-full">
            <button 
              onClick={() => setIsMobileListOpen(true)}
              className="w-full py-3.5 px-4 bg-[var(--color-bg-surface)] border border-[var(--color-border-primary)] rounded-2xl flex items-center justify-between text-xs font-bold text-[var(--color-text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600 transition shadow-2xs cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <ScenarioIcon name={activeItem?.icon || 'default'} className="w-4.5 h-4.5 text-[#3A5A40]" />
                {activeItem ? (
                  <span>
                    {activeItem.titleTurkish} <span className="text-[10px] text-[var(--color-text-secondary)] font-normal italic">({activeItem.titleAlbanian})</span>
                  </span>
                ) : (
                  'Zgjidh një skenar...'
                )}
              </span>
              <span className="text-[10px] text-[var(--color-text-secondary)] font-medium">
                Ndrysho Skenarin ▾
              </span>
            </button>
          </div>
        )}

        {/* Left Side: Scenarios List (Desktop Only, Resizable Card) */}
        {isLargeScreen && (
          <div 
            style={{ width: `${sidebarWidth}px` }}
            className="glass-panel border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] rounded-2xl p-5 shadow-xs space-y-4 shrink-0 relative flex flex-col self-start"
          >
            <h3 className={`font-bold text-[var(--color-text-primary)] uppercase tracking-wider ${
              isVeryNarrow ? 'text-[9px]' : 'text-xs'
            }`}>
              {isVeryNarrow ? `Skenarët (${filteredItems.length})` : `Skenarët e Disponueshëm (${filteredItems.length})`}
            </h3>
            
            {filteredItems.length > 0 ? (
              <div className="space-y-3 overflow-y-auto max-h-[65vh] pr-1 no-scrollbar flex-grow">
                {filteredItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={`w-full text-left rounded-xl border transition-all cursor-pointer flex items-start outline-hidden ${
                      isVeryNarrow ? 'p-2 gap-2' : isNarrow ? 'p-3 gap-3' : 'p-4 gap-4'
                    } ${
                      activeItem?.id === item.id
                        ? 'bg-[#3A5A40]/10 border-[#3A5A40] shadow-xs'
                        : 'bg-[var(--color-bg-surface)] border-[var(--color-border-primary)] hover:border-neutral-400 dark:hover:border-neutral-600'
                    }`}
                  >
                    <span className={`bg-[var(--color-bg-canvas)] rounded-lg border border-[var(--color-border-primary)] shrink-0 select-none flex items-center justify-center ${
                      isVeryNarrow ? 'p-1.5' : 'p-2.5'
                    }`}>
                      <ScenarioIcon name={item.icon} className={`${
                        isVeryNarrow ? 'w-4 h-4' : 'w-5.5 h-5.5'
                      } ${activeItem?.id === item.id ? 'text-[#3A5A40]' : 'text-[var(--color-text-secondary)]'}`} />
                    </span>
                    <div className="space-y-1 min-w-0 flex-1">
                      <h4 className={`font-bold text-[var(--color-text-primary)] truncate ${
                        isVeryNarrow ? 'text-xs' : 'text-sm'
                      }`}>
                        {item.titleTurkish}
                      </h4>
                      <h5 className={`text-[var(--color-text-secondary)] italic truncate ${
                        isVeryNarrow ? 'text-[10px]' : 'text-xs'
                      }`}>
                        {item.titleAlbanian}
                      </h5>
                      {!isNarrow && (
                        <p className="text-[10px] text-[var(--color-text-secondary)] leading-relaxed font-light line-clamp-2 mt-1">
                          {item.descriptionAlbanian}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className={`text-center rounded-2xl border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] ${
                isNarrow ? 'p-4 space-y-1.5' : 'p-8 space-y-2'
              }`}>
                <WarningIcon className={`${isNarrow ? 'w-6 h-6' : 'w-8 h-8'} text-amber-500 mx-auto`} />
                <p className="text-xs font-bold">Nuk u gjet asnjë skenar</p>
                {!isNarrow && (
                  <p className="text-[10px] font-light mt-1 max-w-xs mx-auto leading-relaxed">
                    Skenarët e stërvitjes për nivelin <span className="font-bold">{selectedLevel}</span> do të ngarkohen së shpejti. Zgjidhni nivelin <span className="font-bold text-[#3A5A40]">A1</span> për të filluar.
                  </p>
                )}
              </div>
            )}

            {/* Resize Handle on Right Edge */}
            <div
              onMouseDown={startResizing}
              className="absolute -right-1 top-4 bottom-4 w-2 cursor-col-resize hover:bg-[#3A5A40]/30 rounded-full transition-colors flex items-center justify-center z-20 group"
            >
              <div className="w-0.5 h-8 bg-neutral-350 dark:bg-neutral-700 group-hover:bg-[#3A5A40] rounded-sm transition-colors" />
            </div>
          </div>
        )}

        {/* Right Side: Active Workspace Viewer */}
        <div className="flex-grow min-w-0">
          {activeItem ? (
            <div className="glass-panel border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] rounded-2xl p-6 shadow-sm min-h-[50vh] flex flex-col justify-between">
              
              {/* Active Header */}
              <div className="border-b border-[var(--color-border-primary)] pb-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[var(--color-brand-accent)] select-none flex items-center">
                      <ScenarioIcon name={activeItem.icon} className="w-5.5 h-5.5" />
                    </span>
                    <h3 className="text-base font-black text-[var(--color-text-primary)] font-technical leading-none">
                      {activeItem.titleTurkish}
                    </h3>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)] italic mt-1.5 block">
                    {activeItem.titleAlbanian}
                  </span>
                </div>

                {/* Optional Perspective Switcher for Stories */}
                {activeItem.type === 'story' && activeItem.perspectives && (
                  <div className="flex p-0.5 bg-[var(--color-bg-canvas)] border border-[var(--color-border-primary)] rounded-lg self-start sm:self-auto shrink-0">
                    <button
                      onClick={() => setSelectedPerspective('firstPerson')}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        selectedPerspective === 'firstPerson'
                          ? 'bg-[#3A5A40] text-white shadow-sm'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      Veta I (Unë)
                    </button>
                    <button
                      onClick={() => setSelectedPerspective('thirdPerson')}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        selectedPerspective === 'thirdPerson'
                          ? 'bg-[#3A5A40] text-white shadow-sm'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      Veta III (Ahmeti)
                    </button>
                  </div>
                )}
              </div>

              {/* Scenario Control Toolbar */}
              <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-[var(--color-border-primary)] select-none">
                <button
                  onClick={() => {
                    const isSequentialPlaying = isPlaying && currentSrc === 'dialogue';
                    if (isSequentialPlaying) {
                      stop();
                    } else {
                      playSequentialText();
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                    isPlaying && currentSrc === 'dialogue'
                      ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/30 animate-pulse'
                      : 'bg-[var(--color-bg-canvas)] border-[var(--color-border-primary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'
                  }`}
                >
                  <span>
                    {isPlaying && currentSrc === 'dialogue'
                      ? '⏸ Ndalo'
                      : activeItem.type === 'dialog'
                      ? '🔈 Dëgjo Dialogun'
                      : '🔈 Dëgjo Tregimin'}
                  </span>
                </button>

                <button
                  onClick={() => setShowAllTranslations(!showAllTranslations)}
                  className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                    showAllTranslations
                      ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                      : 'bg-[var(--color-bg-canvas)] border-[var(--color-border-primary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {showAllTranslations ? 'Fshih Përkthimet' : 'Shfaq Përkthimet'}
                </button>
              </div>

              {/* Viewport Content Reader */}
              <div className="flex-1 space-y-6">
                {activeItem.type === 'dialog' ? (
                  
                  // Dialog Rendering: Chat Bubbles
                  <div className="space-y-4 max-w-2xl mx-auto py-2">
                    {activeContent.map((line, idx) => {
                      const isLeft = line.speaker === firstSpeaker;
                      const isRevealed = showAllTranslations || !!revealedLines[idx];
                      const isLinePlaying = isPlaying && (
                        currentSrc === line.turkish ||
                        (currentSrc === 'dialogue' && activeDialogueIndex === idx)
                      );
                      
                      return (
                        <div
                          key={idx}
                          className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}
                        >
                          {/* Bubble Card Container */}
                          <div
                            onClick={() => toggleLineTranslation(idx)}
                            className={`max-w-[85%] text-left p-3.5 rounded-2xl border transition-all cursor-pointer outline-hidden relative group shadow-2xs ${
                              isLeft
                                ? 'bg-[var(--color-bg-canvas)] border-[var(--color-border-primary)] rounded-tl-none hover:border-[#3A5A40]/40'
                                : 'bg-[#3A5A40]/10 border-[#3A5A40]/30 rounded-tr-none hover:border-[#3A5A40]/60'
                            } ${isLinePlaying ? 'ring-2 ring-[#3A5A40]/55 border-[#3A5A40] shadow-md scale-[1.01]' : ''}`}
                          >
                            {/* Inside Bubble Header */}
                            <div className="flex justify-between items-center gap-6 mb-1.5 select-none border-b border-[var(--color-border-primary)]/30 pb-1">
                              <span className="text-[8px] font-bold text-[#3A5A40] uppercase tracking-wider font-technical">
                                {line.speaker}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (isLinePlaying) {
                                    stop();
                                  } else {
                                    playText(line.turkish, 'tr');
                                  }
                                }}
                                className={`text-[8px] font-bold hover:text-[#3A5A40] border-b border-transparent hover:border-[#3A5A40] transition cursor-pointer select-none ${
                                  isLinePlaying ? 'text-[#3A5A40] font-extrabold animate-pulse' : 'text-neutral-400'
                                }`}
                              >
                                {isLinePlaying ? '⏸ Po lexohet' : '🔈 Dëgjo'}
                              </button>
                            </div>

                            <p className="text-xs font-bold text-[var(--color-text-primary)] font-technical tracking-wide">
                              <InteractiveText
                                text={line.turkish}
                                activeWordKey={activeWordPopup?.key || null}
                                onWordClick={handleWordClick}
                                lineId={`dialog-${idx}`}
                              />
                            </p>
                            
                            {/* Expandable Translation */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isRevealed ? 'max-h-24 mt-2 border-t border-[var(--color-border-primary)]/40 pt-2 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                              <p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">
                                {line.albanian}
                              </p>
                            </div>

                            {/* Tiny visibility action indicator */}
                            <span className="absolute right-2 bottom-1.5 text-[8px] text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                              {isRevealed ? 'fshih' : 'përkthe'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  
                  // Story Rendering: Paragraph Prose Layout
                  <div className="max-w-2xl mx-auto py-4 space-y-6 text-left">
                    <p className="text-[10px] text-neutral-400 italic mb-4 text-center select-none">
                      Kliko mbi një fjali për të parë përkthimin dhe për ta dëgjuar atë.
                    </p>

                    {/* Turkish Prose Paragraph */}
                    <div className="bg-[var(--color-bg-canvas)]/30 border border-[var(--color-border-primary)] rounded-2xl p-6 shadow-2xs leading-relaxed font-technical tracking-wide">
                      <p className="text-sm md:text-base text-[var(--color-text-primary)] text-justify">
                        {activeContent.map((line, idx) => {
                          const isLinePlaying = isPlaying && (
                            currentSrc === line.turkish ||
                            (currentSrc === 'dialogue' && activeDialogueIndex === idx)
                          );
                          const isSelected = activeSentenceIdx === idx;
                          
                          return (
                            <span
                              key={idx}
                              onClick={() => {
                                setActiveSentenceIdx(idx);
                              }}
                              className={`cursor-pointer transition-all duration-200 rounded-sm px-1.5 py-0.5 inline-wrap ${
                                isLinePlaying
                                  ? 'bg-[#3A5A40]/25 text-[#3A5A40] font-semibold border-b-2 border-[#3A5A40]'
                                  : isSelected
                                  ? 'bg-amber-500/10 border-b border-amber-500/40 font-medium'
                                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                              }`}
                            >
                              <InteractiveText
                                text={line.turkish}
                                activeWordKey={activeWordPopup?.key || null}
                                onWordClick={handleWordClick}
                                lineId={`story-tr-${idx}`}
                              />
                              {" "}
                            </span>
                          );
                        })}
                      </p>
                    </div>

                    {/* Inline translation for the selected sentence */}
                    {activeSentenceIdx !== null && !showAllTranslations && (
                      <div className="p-4 rounded-xl bg-[var(--color-bg-canvas)] border border-[var(--color-border-primary)] text-xs animate-fade-in flex flex-col gap-2.5">
                        <div className="flex justify-between items-center select-none border-b border-[var(--color-border-primary)]/40 pb-1.5">
                          <span className="text-[8px] font-bold text-[#3A5A40] uppercase tracking-wider font-technical">
                            Përkthimi (Fjalia {activeSentenceIdx + 1})
                          </span>
                          <button
                            onClick={() => {
                              const line = activeContent[activeSentenceIdx];
                              if (isPlaying && currentSrc === line.turkish) {
                                stop();
                              } else {
                                playText(line.turkish, 'tr');
                              }
                            }}
                            className={`text-[8px] font-bold hover:text-[#3A5A40] border-b border-transparent hover:border-[#3A5A40] transition cursor-pointer select-none ${
                              isPlaying && currentSrc === activeContent[activeSentenceIdx].turkish
                                ? 'text-[#3A5A40] font-extrabold animate-pulse'
                                : 'text-neutral-400'
                            }`}
                          >
                            {isPlaying && currentSrc === activeContent[activeSentenceIdx].turkish ? '⏸ Po lexohet' : '🔈 Dëgjo Fjalinë'}
                          </button>
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">
                          {activeContent[activeSentenceIdx].albanian}
                        </p>
                      </div>
                    )}

                    {/* All translations display (Bilingual Parallel Paragraph) */}
                    {showAllTranslations && (
                      <div className="bg-[#3A5A40]/5 border border-[#3A5A40]/20 rounded-2xl p-6 shadow-2xs leading-relaxed italic animate-fade-in">
                        <p className="text-xs md:text-sm text-[var(--color-text-secondary)] text-justify">
                          {activeContent.map((line, idx) => {
                            const isSelected = activeSentenceIdx === idx;
                            const isLinePlaying = isPlaying && (
                              currentSrc === line.turkish ||
                              (currentSrc === 'dialogue' && activeDialogueIndex === idx)
                            );
                            
                            return (
                              <span
                                key={idx}
                                onClick={() => setActiveSentenceIdx(idx)}
                                className={`cursor-pointer transition-all duration-200 px-1 rounded-sm ${
                                  isLinePlaying
                                    ? 'text-[#3A5A40] font-bold bg-[#3A5A40]/10'
                                    : isSelected
                                    ? 'bg-amber-500/10 font-semibold text-[var(--color-text-primary)] border-b border-amber-500/30'
                                    : 'opacity-80 hover:opacity-100'
                                }`}
                              >
                                {line.albanian}{" "}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Tip Bar */}
              <div className="text-[9px] text-neutral-400 italic border-t border-[var(--color-border-primary)] pt-4 mt-6 text-center select-none">
                Këshillë: Klikoni mbi fjalët individuale për të parë përkthimin, rrënjët gramatikore dhe shqiptimin e tyre.
              </div>

            </div>
          ) : (
            <div className="glass-panel border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] rounded-2xl p-6 shadow-sm min-h-[50vh] flex flex-col items-center justify-center text-[var(--color-text-secondary)] text-center space-y-3">
              <EyeIcon className="w-10 h-10 text-neutral-400 mx-auto" />
              <p className="text-sm font-bold">Zgjidhni një Skenar</p>
              <p className="text-xs font-light mt-1 max-w-xs leading-relaxed">
                Zgjidhni një skenar stërvitor nga kolona e majtë për të hapur panelin e praktikës dhe leximit.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Global Word Popover Bubble */}
      {activeWordPopup && createPortal(
        <div
          style={{ 
            top: `${activeWordPopup.pos.top}px`, 
            left: `${activeWordPopup.pos.left}px`,
            width: '256px',
            transform: activeWordPopup.renderAbove ? 'translateY(-100%)' : 'none'
          }}
          className="absolute z-55 pointer-events-auto"
        >
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 rounded-2xl shadow-lg p-4 animate-fade-in text-left flex flex-col gap-2.5">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-neutral-100 dark:border-neutral-800 pb-1.5">
              <div>
                <h4 lang="tr" className="text-sm font-black text-neutral-800 dark:text-neutral-100 font-technical">
                  {activeWordPopup.entry.word}
                </h4>
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 block">
                  {activeWordPopup.entry.pos}
                </span>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playText(activeWordPopup.entry.word, 'tr');
                }}
                className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] flex items-center justify-center text-xs transition bg-white dark:bg-neutral-850 cursor-pointer text-neutral-500 dark:text-neutral-400"
                title="Dëgjo fjalën"
              >
                🔊
              </button>
            </div>

            {/* Translation content */}
            <div className="text-xs">
              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 block mb-0.5">
                {activeWordPopup.entry.rootTranslation && activeWordPopup.entry.rootTranslation !== activeWordPopup.entry.translation ? 'Në këtë fjali:' : 'Shqip:'}
              </span>
              <p className="font-semibold text-[#0D9488] dark:text-[#14B8A6] leading-tight">
                {activeWordPopup.entry.translation}
              </p>
            </div>

            {/* Root/Normal Translation content if it differs */}
            {activeWordPopup.entry.rootTranslation && activeWordPopup.entry.rootTranslation !== activeWordPopup.entry.translation && (
              <div className="text-xs border-t border-neutral-100 dark:border-neutral-850 pt-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-450 block mb-0.5">
                  Kuptimi bazë (rrënja {activeWordPopup.entry.inflection}):
                </span>
                <p className="font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                  {activeWordPopup.entry.rootTranslation}
                </p>
              </div>
            )}

            {/* Contextual Grammar Explanation/Notes */}
            {activeWordPopup.entry.notes && (
              <div className="text-[10px] text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-850 p-2 rounded-lg leading-normal italic border-l-2 border-teal-500/50">
                {activeWordPopup.entry.notes}
              </div>
            )}

            {/* Link to detail drawer */}
            <div className="flex justify-between items-center mt-1 pt-1.5 border-t border-neutral-100 dark:border-neutral-800 text-[10px]">
              <button
                onClick={() => {
                  const entryToUse = activeWordPopup.entry;
                  closeWordPopup();
                  if (entryToUse.inflection) {
                    const rootEntry = lookupWord(entryToUse.inflection);
                    if (rootEntry) {
                      handleShowDetail(rootEntry);
                      return;
                    }
                  }
                  handleShowDetail(entryToUse);
                }}
                className="text-[#3A5A40] dark:text-[#14B8A6] font-bold hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Më shumë detaje...
              </button>
              
              <button
                onClick={closeWordPopup}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Mbyll
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Detail Drawer */}
      {isDrawerOpen && drawerEntry && createPortal(
        <WordDetailDrawer
          entry={drawerEntry}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onSpeak={(word, lang) => playText(word, lang)}
        />,
        document.body
      )}

      {/* Mobile Scenarios Drawer/Modal */}
      {!isLargeScreen && isMobileListOpen && createPortal(
        <div 
          className="fixed inset-0 bg-black/60 z-55 flex items-end sm:items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsMobileListOpen(false)}
        >
          <div 
            className="bg-[var(--color-bg-surface)] border border-[var(--color-border-primary)] w-full max-w-md rounded-t-3xl sm:rounded-3xl p-5 space-y-4 max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2.5 border-b border-[var(--color-border-primary)]">
              <h3 className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider">
                Skenarët e Disponueshëm ({filteredItems.length})
              </h3>
              <button 
                onClick={() => setIsMobileListOpen(false)} 
                className="text-[10px] font-bold text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer"
              >
                Mbyll
              </button>
            </div>
            
            {filteredItems.length > 0 ? (
              <div className="space-y-2.5 overflow-y-auto no-scrollbar">
                {filteredItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item);
                      setIsMobileListOpen(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 outline-hidden ${
                      activeItem?.id === item.id
                        ? 'bg-[#3A5A40]/10 border-[#3A5A40]'
                        : 'bg-[var(--color-bg-surface)] border-[var(--color-border-primary)]'
                    }`}
                  >
                    <span className="p-2.5 bg-[var(--color-bg-canvas)] rounded-lg border border-[var(--color-border-primary)] shrink-0 flex items-center justify-center">
                      <ScenarioIcon name={item.icon} className={`w-5.5 h-5.5 ${activeItem?.id === item.id ? 'text-[#3A5A40]' : 'text-[var(--color-text-secondary)]'}`} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-[var(--color-text-primary)] truncate">
                        {item.titleTurkish}
                      </h4>
                      <h5 className="text-[10px] text-[var(--color-text-secondary)] italic truncate">
                        {item.titleAlbanian}
                      </h5>
                      <p className="text-[9px] text-[var(--color-text-secondary)] leading-relaxed font-light line-clamp-2 mt-1">
                        {item.descriptionAlbanian}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-[var(--color-text-secondary)] space-y-2">
                <WarningIcon className="w-8 h-8 text-amber-500 mx-auto" />
                <p className="text-xs font-bold">Nuk u gjet asnjë skenar</p>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

