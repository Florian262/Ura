import React, { useState, useMemo, useCallback } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';
import { WordDetailDrawer } from '../common/WordDetailDrawer';
import type { DictionaryEntry } from '../common/WordDetailDrawer';

export const SavedWordsPage: React.FC = () => {
  const { savedWords, toggleSavedWord } = useLesson();
  const { playText } = useAudioPlayer();

  // Modes: 'list' | 'flashcard' | 'practice'
  const [activeTab, setActiveTab] = useState<'list' | 'flashcard' | 'practice'>('list');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Drawer states
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Flashcards state
  const [flashIndex, setFlashIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Practice/Spelling Game state
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // Audio Speech synthesis wrapper
  const handleSpeak = useCallback((word: string, sourceLang: 'tr' | 'al') => {
    playText(word, sourceLang);
  }, [playText]);

  // Open detailed drawer
  const handleOpenDetail = useCallback((item: DictionaryEntry) => {
    setSelectedEntry(item);
    setIsDrawerOpen(true);
  }, []);

  // Filtered saved words for searching
  const filteredWords = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return savedWords;
    return savedWords.filter(
      item =>
        item.word.toLowerCase().includes(query) ||
        item.translation.toLowerCase().includes(query) ||
        (item.notes && item.notes.toLowerCase().includes(query))
    );
  }, [savedWords, searchQuery]);

  // Reset games indexes when tab changes
  const handleTabChange = (tab: 'list' | 'flashcard' | 'practice') => {
    setActiveTab(tab);
    setFlashIndex(0);
    setIsFlipped(false);
    setPracticeIndex(0);
    setTypedAnswer('');
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setShowAnswer(false);
  };

  // Keyboard helper insertion
  const handleInsertChar = (char: string) => {
    setTypedAnswer(prev => prev + char);
  };

  // Verification checking logic
  const handleCheckSpelling = () => {
    const currentWord = filteredWords[practiceIndex];
    if (!currentWord) return;

    const cleanTyped = typedAnswer.trim().toLowerCase();
    const cleanTarget = currentWord.word.trim().toLowerCase();

    // Custom normalization to handle dotless and dotted Turkish I matching
    const normalize = (s: string) =>
      s
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c');

    const match = cleanTyped === cleanTarget || normalize(cleanTyped) === normalize(cleanTarget);
    setIsCorrect(match);
    setIsAnswerChecked(true);
  };

  const handleNextPractice = () => {
    if (practiceIndex < filteredWords.length - 1) {
      setPracticeIndex(prev => prev + 1);
      setTypedAnswer('');
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setShowAnswer(false);
    }
  };

  const handlePrevPractice = () => {
    if (practiceIndex > 0) {
      setPracticeIndex(prev => prev - 1);
      setTypedAnswer('');
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setShowAnswer(false);
    }
  };

  const handleNextFlash = () => {
    if (flashIndex < filteredWords.length - 1) {
      setFlashIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevFlash = () => {
    if (flashIndex > 0) {
      setFlashIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 relative h-full">
      {/* Background Watermark */}
      <div className="curriculum-watermark opacity-25 select-none pointer-events-none">
        TË RUAJTURAT
      </div>

      <div className="animate-fade-in space-y-6">
        {/* Glowing Title Panel */}
        <div className="glass-panel p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden z-10 shadow-elevated border border-white/20">
          <div className="absolute w-48 h-48 rounded-full bg-teal-500/5 blur-2xl -top-12 -left-12 pointer-events-none"></div>
          <div className="absolute w-48 h-48 rounded-full bg-amber-500/5 blur-2xl -bottom-12 -right-12 pointer-events-none"></div>

          <div className="space-y-3 flex-1 text-left">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0D9488] dark:text-[#14B8A6] uppercase select-none">
              Fjalori Im Personal (Kişisel Kelime Listem)
            </span>
            <h2 className="text-2xl font-black text-[#1A1D20] dark:text-white uppercase tracking-tight font-display leading-tight">
              Fjalët e mia të ruajtura ({savedWords.length})
            </h2>
            <p className="text-xs text-[#565E64] dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
              Mësoni dhe rishikoni fjalët që keni shënuar si të ruajtura gjatë leximit të kapitujve. Zgjidhni mënyrën listë për të kërkuar, mënyrën kartë për vetë-testim, ose lojën e shkrimit për të ushtruar gërmëzimin.
            </p>

            {/* Mode switch navigation */}
            <div className="flex flex-wrap bg-neutral-100 dark:bg-neutral-800/40 p-1 rounded-xl w-fit border border-neutral-200/50 dark:border-neutral-750/50 relative z-20">
              <button
                onClick={() => handleTabChange('list')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'list'
                    ? 'bg-white dark:bg-neutral-800 text-[#0D9488] dark:text-[#14B8A6] shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                📋 Lista e Fjalëve
              </button>
              <button
                onClick={() => handleTabChange('flashcard')}
                disabled={savedWords.length === 0}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  savedWords.length === 0 ? 'opacity-40 cursor-not-allowed' : ''
                } ${
                  activeTab === 'flashcard'
                    ? 'bg-white dark:bg-neutral-800 text-amber-500 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                🎴 Kartela Flip
              </button>
              <button
                onClick={() => handleTabChange('practice')}
                disabled={savedWords.length === 0}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  savedWords.length === 0 ? 'opacity-40 cursor-not-allowed' : ''
                } ${
                  activeTab === 'practice'
                    ? 'bg-white dark:bg-neutral-800 text-[#3B82F6] shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                ✍️ Lojë Shkrimi
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {savedWords.length === 0 && (
          <div className="glass-panel p-12 text-center max-w-xl mx-auto space-y-6 border border-dashed border-[#3A5A40]/30 rounded-3xl">
            <div className="w-20 h-20 bg-[#3A5A40]/10 text-[#3A5A40] dark:bg-neutral-800 dark:text-amber-500 rounded-full flex items-center justify-center text-4xl mx-auto select-none animate-pulse">
              ⭐
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-extrabold text-[#1A1D20] dark:text-neutral-200 uppercase tracking-tight">Fjalori është bosh</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                Nuk keni asnjë fjalë të ruajtur ende. Kur lexoni një dialog ose tekst në kapituj, klikoni mbi çdo fjalë dhe shtypni ikonën e yllit (⭐) për ta shtuar këtu për studim të mëtejshëm.
              </p>
            </div>
          </div>
        )}

        {savedWords.length > 0 && (
          <>
            {/* 1. LIST VIEW MODE */}
            {activeTab === 'list' && (
              <div className="space-y-4 text-left">
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Kërko në fjalët e mia të ruajtura..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs border border-neutral-250 dark:border-neutral-800 rounded-xl focus:outline-hidden focus:border-[#3A5A40] bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 shadow-inner"
                  />
                  <span className="absolute left-3.5 top-3 text-neutral-400">🔍</span>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-2.5 text-xs text-neutral-400 hover:text-neutral-600 bg-transparent border-0 cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Words list grid */}
                {filteredWords.length === 0 ? (
                  <div className="text-center py-10 text-neutral-400 text-xs italic">
                    Nuk u gjet asnjë fjalë që përputhet me kërkimin tuaj.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-1 no-scrollbar border border-neutral-100 dark:border-neutral-800/40 rounded-xl p-2 bg-neutral-50/30 dark:bg-neutral-900/10">
                    {filteredWords.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleOpenDetail(item)}
                        className="bg-white dark:bg-neutral-850 border border-neutral-200/70 dark:border-neutral-800/70 rounded-2xl p-4 shadow-xs hover:border-[#3A5A40]/40 dark:hover:border-emerald-600/40 hover:shadow-sm transition duration-200 flex flex-col justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div>
                              <h4 lang="tr" className="text-base font-extrabold text-[#1A1D20] dark:text-neutral-200 font-technical group-hover:text-[#3A5A40] dark:group-hover:text-[#14B8A6] transition duration-200">
                                {item.word}
                              </h4>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 block mt-0.5">
                                {item.pos}
                              </span>
                            </div>

                            <div className="flex gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => handleSpeak(item.word, 'tr')}
                                className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] flex items-center justify-center text-xs transition bg-white dark:bg-neutral-850 cursor-pointer text-neutral-500 dark:text-neutral-455"
                                title="Dëgjo shqiptimin"
                              >
                                🔊
                              </button>
                              <button
                                onClick={() => toggleSavedWord(item)}
                                className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 text-amber-500 hover:text-amber-600 flex items-center justify-center text-xs transition bg-white dark:bg-neutral-850 cursor-pointer shadow-xs"
                                title="Hiq nga të ruajturat"
                              >
                                ★
                              </button>
                            </div>
                          </div>

                          <p className="text-xs font-semibold text-[#0D9488] dark:text-[#14B8A6] leading-tight mb-2">
                            {item.translation}
                          </p>

                          {item.notes && (
                            <p className="text-[10px] text-neutral-500 dark:text-neutral-450 leading-relaxed font-light line-clamp-2 italic mb-2 border-l border-neutral-200 dark:border-neutral-800 pl-2">
                              {item.notes}
                            </p>
                          )}
                        </div>

                        {item.chapterTitle && (
                          <div className="text-[8px] text-neutral-455 dark:text-neutral-500 uppercase tracking-widest pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800 mt-2 select-none">
                            {item.chapterTitle}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2. FLASHCARD MODE */}
            {activeTab === 'flashcard' && filteredWords.length > 0 && (
              <div className="space-y-6 max-w-md mx-auto animate-fade-in">
                {/* Counter index */}
                <div className="flex justify-between items-center text-xs text-neutral-500 font-bold px-2 select-none">
                  <span>🎴 Vetë-Vlerësim (Self-Testing)</span>
                  <span className="font-technical text-[#3A5A40]">
                    Karta {flashIndex + 1} / {filteredWords.length}
                  </span>
                </div>

                {/* Flip Card frame */}
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="w-full h-64 cursor-pointer relative select-none"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front: Turkish Word */}
                    <div
                      className="absolute inset-0 w-full h-full p-6 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-850 shadow-md flex flex-col justify-between items-center text-center"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                        TURQISHT (Türkçe)
                      </span>

                      <div className="space-y-2">
                        <h3 lang="tr" className="text-2xl font-black text-neutral-900 dark:text-white font-technical tracking-wide">
                          {filteredWords[flashIndex].word}
                        </h3>
                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-2 py-0.5 rounded-md">
                          {filteredWords[flashIndex].pos}
                        </span>
                      </div>

                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleSpeak(filteredWords[flashIndex].word, 'tr')}
                          className="w-9 h-9 rounded-xl border border-neutral-250 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] flex items-center justify-center text-base transition cursor-pointer text-neutral-400"
                          title="Dëgjo shqiptimin"
                        >
                          🔊
                        </button>
                        <span className="text-[10px] text-neutral-400 mt-2 block self-center select-none font-light">
                          (Kliko mbi kartë për ta kthyer)
                        </span>
                      </div>
                    </div>

                    {/* Back: Albanian Translation */}
                    <div
                      className="absolute inset-0 w-full h-full p-6 rounded-3xl border border-teal-500/50 bg-teal-50/5 dark:bg-neutral-850 shadow-md flex flex-col justify-between items-center text-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <span className="text-[9px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                        SHQIP
                      </span>

                      <div className="space-y-3">
                        <h3 className="text-xl font-extrabold text-[#0D9488] dark:text-[#14B8A6] leading-snug">
                          {filteredWords[flashIndex].translation}
                        </h3>
                        {filteredWords[flashIndex].notes && (
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed italic font-light">
                            {filteredWords[flashIndex].notes}
                          </p>
                        )}
                      </div>

                      <span className="text-[10px] text-neutral-400 font-light select-none">
                        (Kliko për të parë fjalën turqisht)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center px-1">
                  <button
                    onClick={handlePrevFlash}
                    disabled={flashIndex === 0}
                    className={`px-4 py-2 rounded-xl border text-xs font-bold transition cursor-pointer ${
                      flashIndex === 0
                        ? 'border-neutral-205 text-neutral-300 dark:text-neutral-700 bg-white dark:bg-neutral-850 cursor-not-allowed'
                        : 'border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-850 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    ← Paraardhësja
                  </button>

                  <button
                    onClick={handleNextFlash}
                    disabled={flashIndex === filteredWords.length - 1}
                    className={`px-4 py-2 rounded-xl border text-xs font-bold transition cursor-pointer ${
                      flashIndex === filteredWords.length - 1
                        ? 'border-neutral-205 text-neutral-300 dark:text-neutral-700 bg-white dark:bg-neutral-850 cursor-not-allowed'
                        : 'border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-850 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    Pasardhësja →
                  </button>
                </div>
              </div>
            )}

            {/* 3. WRITING PRACTICE GAME */}
            {activeTab === 'practice' && filteredWords.length > 0 && (
              <div className="bg-neutral-50 dark:bg-neutral-900/40 border border-[#E9ECEF] dark:border-neutral-800 rounded-3xl p-6 space-y-6 max-w-lg mx-auto shadow-xs animate-fade-in text-left">
                <div className="flex justify-between items-center pb-3 border-b border-[#E9ECEF]/80 dark:border-neutral-800">
                  <div>
                    <span className="text-[10px] font-bold text-[#3A5A40] bg-white dark:bg-neutral-850 border border-[#E9ECEF] dark:border-neutral-800 px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                      Lojë Shkrimi
                    </span>
                    <p className="text-xs text-[#565E64] dark:text-neutral-400 font-light mt-1">
                      Shkruani fjalën korresponduese në turqisht.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#3A5A40] dark:text-[#14B8A6] font-technical">
                    Fjala {practiceIndex + 1} nga {filteredWords.length}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Prompt: Albanian word */}
                  <div className="text-center p-5 bg-white dark:bg-neutral-850 rounded-2xl border border-[#E9ECEF] dark:border-neutral-800 shadow-xs">
                    <span className="text-[9px] text-neutral-455 dark:text-neutral-500 uppercase tracking-widest block font-bold">
                      Shqip:
                    </span>
                    <h3 className="text-lg font-bold text-[#3A5A40] dark:text-white leading-snug mt-1">
                      {filteredWords[practiceIndex].translation}
                    </h3>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-2 py-0.5 rounded-md inline-block mt-2">
                      {filteredWords[practiceIndex].pos}
                    </span>
                  </div>

                  {/* Input form */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={typedAnswer}
                      disabled={isAnswerChecked && isCorrect}
                      onChange={(e) => setTypedAnswer(e.target.value)}
                      placeholder="Shkruani fjalën në turqisht..."
                      className="w-full px-4 py-3 text-sm font-technical border border-[#E9ECEF] dark:border-neutral-800 rounded-xl focus:outline-hidden focus:border-[#3A5A40] focus:ring-1 focus:ring-[#3A5A40] bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-inner text-center"
                    />

                    {/* Special characters keypad helper */}
                    {!(isAnswerChecked && isCorrect) && (
                      <div className="flex gap-1.5 justify-center flex-wrap">
                        {['ç', 'ğ', 'ı', 'ö', 'ş', 'ü'].map(char => (
                          <button
                            key={char}
                            onClick={() => handleInsertChar(char)}
                            className="w-8 h-8 rounded-lg border border-[#E9ECEF] dark:border-neutral-800 bg-white dark:bg-neutral-850 text-neutral-800 dark:text-neutral-200 hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] text-xs font-bold font-technical flex items-center justify-center transition active:scale-90 shadow-xs cursor-pointer"
                          >
                            {char}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Control / feedback row */}
                  <div className="flex gap-2 justify-center">
                    {!isAnswerChecked ? (
                      <>
                        <button
                          onClick={handleCheckSpelling}
                          className="px-5 py-2.5 bg-[#3A5A40] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition cursor-pointer select-none active-cta shadow-md"
                        >
                          Kontrollo
                        </button>
                        <button
                          onClick={() => setShowAnswer(true)}
                          className="px-4 py-2 bg-white dark:bg-neutral-800 border border-[#E9ECEF] dark:border-neutral-750 text-[#565E64] dark:text-neutral-300 hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                        >
                          Trego Përgjigjen
                        </button>
                      </>
                    ) : (
                      <div className="text-center w-full space-y-3">
                        <p className={`text-sm font-bold ${isCorrect ? 'text-[#3A5A40] dark:text-emerald-500' : 'text-[#c0392b]'}`}>
                          {isCorrect ? '✓ E saktë!' : '✗ E pasaktë. Provojeni përsëri.'}
                        </p>
                        {!isCorrect && (
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() => setIsAnswerChecked(false)}
                              className="px-4 py-2 bg-[#3A5A40] text-white font-bold rounded-xl text-xs transition cursor-pointer"
                            >
                              Provo përsëri
                            </button>
                            <button
                              onClick={() => setShowAnswer(true)}
                              className="px-4 py-2 bg-white dark:bg-neutral-800 border border-[#E9ECEF] dark:border-neutral-750 text-[#565E64] dark:text-neutral-300 hover:text-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                            >
                              Trego Përgjigjen
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Show Answer Block */}
                  {showAnswer && (
                    <div className="p-3 bg-[#3A5A40]/10 border border-[#3A5A40]/30 rounded-xl text-center animate-fade-in space-y-1.5">
                      <span className="text-[9px] text-neutral-450 dark:text-neutral-500 uppercase tracking-widest block font-bold">
                        Fjala e saktë:
                      </span>
                      <span lang="tr" className="text-base font-extrabold text-[#3A5A40] dark:text-[#14B8A6] font-technical tracking-wide">
                        {filteredWords[practiceIndex].word}
                      </span>
                      {filteredWords[practiceIndex].inflection && (
                        <p className="text-[10px] text-[#565E64] dark:text-neutral-400 font-technical pt-1 border-t border-[#3A5A40]/20">
                          Morfologjia: Rrënja &rarr; {filteredWords[practiceIndex].inflection}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Nav links */}
                  <div className="flex justify-between items-center pt-4 border-t border-[#E9ECEF]/80 dark:border-neutral-800 mt-6 select-none">
                    <button
                      onClick={handlePrevPractice}
                      disabled={practiceIndex === 0}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                        practiceIndex === 0
                          ? 'border-[#E9ECEF] dark:border-neutral-800 text-neutral-300 dark:text-neutral-700 bg-white dark:bg-neutral-850 cursor-not-allowed'
                          : 'border-[#E9ECEF] dark:border-neutral-800 bg-white dark:bg-neutral-850 text-[#565E64] dark:text-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      ← Paraardhësja
                    </button>
                    <button
                      onClick={handleNextPractice}
                      disabled={practiceIndex === filteredWords.length - 1}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                        practiceIndex === filteredWords.length - 1
                          ? 'border-[#E9ECEF] dark:border-neutral-800 text-neutral-300 dark:text-neutral-700 bg-white dark:bg-neutral-850 cursor-not-allowed'
                          : 'border-[#E9ECEF] dark:border-neutral-800 bg-white dark:bg-neutral-850 text-[#565E64] dark:text-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      Pasardhësja →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Drawer Overlay for word click detail popup */}
      {isDrawerOpen && selectedEntry && (
        <WordDetailDrawer
          entry={selectedEntry}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onSpeak={handleSpeak}
        />
      )}
    </div>
  );
};
