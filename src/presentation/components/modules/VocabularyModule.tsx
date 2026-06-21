import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

interface VocabularyModuleProps {
  onComplete?: () => void;
}

export const VocabularyModule: React.FC<VocabularyModuleProps> = ({ onComplete }) => {
  const { vocabulary, currentChapter } = useLesson();
  const { play, playText, isPlaying, currentSrc } = useAudioPlayer();
  // Modes: 'list' | 'flashcard' | 'production'
  const [vocabularyMode, setVocabularyMode] = useState<'list' | 'flashcard' | 'production'>('list');
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [revealedStemIds, setRevealedStemIds] = useState<Record<number, boolean>>({});
  const [showTranslation, setShowTranslation] = useState<boolean>(false);

  const isB2 = currentChapter?.level === 'B2';

  const getCategoryLabel = (category: string) => {
    if (isB2) {
      const mapping: Record<string, string> = {
        'emër': 'İsim',
        'folje': 'Fiil',
        'mbiemër': 'Sıfat',
        'ndajfolje': 'Zarf',
        'përemër': 'Zamir',
        'lidhëz': 'Bağlaç',
        'pasthirrmë': 'Ünlem',
        'shprehje': 'İfade',
      };
      return mapping[category] || category;
    }
    return category;
  };

  // Production Mode states
  const [productionIndex, setProductionIndex] = useState<number>(0);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [productionChecked, setProductionChecked] = useState<boolean>(false);
  const [productionCorrect, setProductionCorrect] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  if (vocabulary.length === 0) return null;

  const currentProdWord = vocabulary[productionIndex];

  const handleInsertSpecialChar = (char: string) => {
    setTypedAnswer(prev => prev + char);
  };

  const handleCheckProduction = () => {
    if (!currentProdWord) return;
    const cleanTyped = typedAnswer.trim().toLowerCase();
    const cleanTarget = currentProdWord.turkish_word.trim().toLowerCase();

    const normalize = (s: string) => s
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');

    const isCorrect = cleanTyped === cleanTarget || normalize(cleanTyped) === normalize(cleanTarget);
    setProductionCorrect(isCorrect);
    setProductionChecked(true);
    if (isCorrect) {
      onComplete?.();
    }
  };

  const handleNextProduction = () => {
    if (productionIndex < vocabulary.length - 1) {
      setProductionIndex(prev => prev + 1);
      setTypedAnswer('');
      setProductionChecked(false);
      setProductionCorrect(false);
      setShowAnswer(false);
    }
  };

  const handlePrevProduction = () => {
    if (productionIndex > 0) {
      setProductionIndex(prev => prev - 1);
      setTypedAnswer('');
      setProductionChecked(false);
      setProductionCorrect(false);
      setShowAnswer(false);
    }
  };

  return (
    <div className="glass-panel md:rounded-2xl p-0 md:p-8 bg-transparent md:bg-white border-none md:border md:border-[#E9ECEF] shadow-none md:shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-[#E9ECEF]">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">
            {isB2 ? '2. Bölüm' : 'Sekuenca 2'}
          </span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">
            {isB2 ? 'Yeni Kelimeler' : 'Fjalori i Ri (Yeni Kelimeler)'}
          </h2>
          <p className="text-xs text-[#565E64] font-light mt-1">
            {isB2 
              ? 'Metinde geçen yeni kelimeler. Ortak kelimelere dikkat ediniz.' 
              : 'Lexiku i prezantuar në tekst. Vini re fjalët e shënuara si huazime të përbashkëta historike.'}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {isB2 && (
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
                showTranslation
                  ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                  : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
              }`}
            >
              {showTranslation ? 'Çeviriyi Gizle' : 'Arnavutça Çeviri'}
            </button>
          )}
          <button
            onClick={() => setVocabularyMode('list')}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
              vocabularyMode === 'list'
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {isB2 ? '📋 Liste Görünümü' : '📋 Mënyra Listë'}
          </button>
          <button
            onClick={() => {
              setVocabularyMode('flashcard');
              setRevealedIds({});
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
              vocabularyMode === 'flashcard'
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {isB2 ? '🎴 Kart Eşleştirme' : '🎴 Mënyra Flashcard'}
          </button>
          <button
            onClick={() => {
              setVocabularyMode('production');
              setProductionIndex(0);
              setTypedAnswer('');
              setProductionChecked(false);
              setProductionCorrect(false);
              setShowAnswer(false);
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
              vocabularyMode === 'production'
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {isB2 ? '✍️ Yazma Oyunu' : '✍️ Lojë Shkrimi'}
          </button>
        </div>
      </div>

      {vocabularyMode === 'production' && currentProdWord && (
        <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-6 space-y-6 max-w-lg mx-auto shadow-xs animate-fade-in">
          <div className="flex justify-between items-center pb-3 border-b border-[#E9ECEF]/80">
            <div>
              <span className="text-[10px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                {isB2 ? 'Yazma Oyunu' : 'Spelling & Production Game'}
              </span>
              <p className="text-xs text-[#565E64] font-light mt-1">
                {isB2 ? 'Kelimenin Türkçe karşılığını yazınız.' : 'Shkruani fjalën korresponduese në turqisht.'}
              </p>
            </div>
            <span className="text-xs font-semibold text-[#3A5A40] font-technical">
              {isB2 
                ? `Kelime ${productionIndex + 1} / ${vocabulary.length}` 
                : `Fjala ${productionIndex + 1} nga ${vocabulary.length}`}
            </span>
          </div>

          <div className="space-y-4">
            {/* Albanian Prompt */}
            <div className="text-center p-4 bg-white rounded-xl border border-[#E9ECEF] shadow-xs">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
                {isB2 ? 'Arnavutça:' : 'Shqip:'}
              </span>
              <h3 className="text-lg font-bold text-[#3A5A40] leading-snug mt-1">
                {currentProdWord.albanian_word}
              </h3>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-2 py-0.5 rounded-md inline-block mt-2">
                {getCategoryLabel(currentProdWord.category)}
              </span>
            </div>

            {/* Input field */}
            <div className="space-y-2">
              <input
                type="text"
                value={typedAnswer}
                disabled={productionChecked && productionCorrect}
                onChange={(e) => setTypedAnswer(e.target.value)}
                placeholder={isB2 ? 'Türkçe kelimeyi yazınız...' : 'Shkruani fjalën në turqisht...'}
                className="w-full px-4 py-3 text-sm font-technical border border-[#E9ECEF] rounded-xl focus:outline-hidden focus:border-[#3A5A40] focus:ring-1 focus:ring-[#3A5A40] bg-white text-neutral-900 shadow-inner text-center"
              />

              {/* Special characters keypad helper */}
              {!(productionChecked && productionCorrect) && (
                <div className="flex gap-1.5 justify-center flex-wrap">
                  {['ç', 'ğ', 'ı', 'ö', 'ş', 'ü'].map(char => (
                    <button
                      key={char}
                      onClick={() => handleInsertSpecialChar(char)}
                      className="w-8 h-8 rounded-lg border border-[#E9ECEF] bg-white text-neutral-800 hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] text-xs font-bold font-technical flex items-center justify-center transition active:scale-90 shadow-xs cursor-pointer"
                    >
                      {char}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Verification and feedback buttons */}
            <div className="flex gap-2 justify-center">
              {!productionChecked ? (
                <>
                  <button
                    onClick={handleCheckProduction}
                    className="px-5 py-2.5 bg-[#3A5A40] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition cursor-pointer select-none active-cta shadow-md"
                  >
                    {isB2 ? 'Kontrol Et' : 'Kontrollo'}
                  </button>
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-4 py-2 bg-white border border-[#E9ECEF] text-[#565E64] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                  >
                    {isB2 ? 'Cevabı Göster' : 'Trego Përgjigjen'}
                  </button>
                </>
              ) : (
                <div className="text-center w-full space-y-3">
                  <p className={`text-sm font-bold ${productionCorrect ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
                    {productionCorrect 
                      ? (isB2 ? '✓ Doğru!' : '✓ E saktë!') 
                      : (isB2 ? '✗ Yanlış. Tekrar deneyiniz.' : '✗ E pasaktë. Provojeni përsëri.')}
                  </p>
                  {!productionCorrect && (
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setProductionChecked(false)}
                        className="px-4 py-2 bg-[#3A5A40] text-white font-bold rounded-xl text-xs transition cursor-pointer"
                      >
                        {isB2 ? 'Tekrar Dene' : 'Provo përsëri'}
                      </button>
                      <button
                        onClick={() => setShowAnswer(true)}
                        className="px-4 py-2 bg-white border border-[#E9ECEF] text-[#565E64] hover:text-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                      >
                        {isB2 ? 'Cevabı Göster' : 'Trego Përgjigjen'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Answer Display */}
            {showAnswer && (
              <div className="p-3 bg-[#3A5A40]/10 border border-[#3A5A40]/30 rounded-xl text-center animate-fade-in space-y-1.5">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
                  {isB2 ? 'Doğru Kelime:' : 'Fjala e saktë:'}
                </span>
                <span lang="tr" className="text-base font-extrabold text-[#3A5A40] font-technical tracking-wide">
                  {currentProdWord.turkish_word}
                </span>
                {currentProdWord.stem_breakdown && (
                  <p className="text-[11px] text-[#565E64] font-technical pt-1 border-t border-[#3A5A40]/20">
                    {isB2 ? 'Kelime Yapısı:' : 'Morfologjia:'} {currentProdWord.stem_breakdown}
                  </p>
                )}
              </div>
            )}

            {/* Navigation controls */}
            <div className="flex justify-between items-center pt-4 border-t border-[#E9ECEF]/80 mt-6">
              <button
                onClick={handlePrevProduction}
                disabled={productionIndex === 0}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                  productionIndex === 0
                    ? 'border-[#E9ECEF] text-neutral-300 bg-white cursor-not-allowed'
                    : 'border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50'
                }`}
              >
                {isB2 ? '← Önceki' : '← Paraardhësja'}
              </button>
              <button
                onClick={handleNextProduction}
                disabled={productionIndex === vocabulary.length - 1}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                  productionIndex === vocabulary.length - 1
                    ? 'border-[#E9ECEF] text-neutral-300 bg-white cursor-not-allowed'
                    : 'border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50'
                }`}
              >
                {isB2 ? 'Sonraki →' : 'Pasardhësja →'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Semantic Grid listing lexical items */}
      {vocabularyMode !== 'production' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          {vocabulary.map(v => {
            const isBalkan = v.is_shared_balkan_word === 1;
            const isThisPlaying = isPlaying && currentSrc === v.turkish_word;
            const isRevealed = revealedIds[v.id] || vocabularyMode === 'list';

            if (vocabularyMode === 'flashcard') {
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
                              {getCategoryLabel(v.category)}
                            </span>
                            {isBalkan && (
                              <span className="text-[9px] font-bold uppercase tracking-wider text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-2 py-0.5 rounded-md">
                                {isB2 ? 'Ortak Kelime 🤝' : 'Balkanizëm 🤝'}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-neutral-400 mt-2">
                            {isB2 ? '(Arnavutça karşılığını görmek için tıklayın)' : '(Kliko për ta zbuluar shqip)'}
                          </p>
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
                        <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">
                          {isB2 ? 'Arnavutça:' : 'Shqip:'}
                        </span>
                        <span className="text-base font-bold text-[var(--color-brand-accent)] block leading-snug">
                          {v.albanian_word}
                        </span>
                        {isB2 ? (
                          (v.notes_turkish || v.notes_albanian) && (
                            <div className="text-[11px] text-[var(--color-text-secondary)] font-light italic leading-relaxed mt-1 border-t border-[var(--color-border-primary)]/40 pt-1.5">
                              <p>{v.notes_turkish || v.notes_albanian}</p>
                              {showTranslation && v.notes_turkish && v.notes_albanian && (
                                <p className="text-[10px] text-neutral-400 mt-1">Shqip: {v.notes_albanian}</p>
                              )}
                            </div>
                          )
                        ) : (
                          v.notes_albanian && (
                            <p className="text-[11px] text-[var(--color-text-secondary)] font-light italic leading-relaxed mt-1 border-t border-[var(--color-border-primary)]/40 pt-1.5">
                              {v.notes_albanian}
                            </p>
                          )
                        )}
                        {v.stem_breakdown && (
                          <div className="p-2 bg-[#3A5A40]/5 rounded-xl border border-[#3A5A40]/25 text-[10px] font-technical font-medium text-[#3A5A40]">
                            {isB2 ? 'Kelime Yapısı:' : 'Zbërthimi:'} {v.stem_breakdown}
                          </div>
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
                        {getCategoryLabel(v.category)}
                      </span>
  
                      {/* Balkanism Accent Light Indicator */}
                      {isBalkan && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-2 py-0.5 rounded-md select-none shrink-0">
                          {isB2 ? 'Ortak Kelime 🤝' : 'Balkanizëm 🤝'}
                        </span>
                      )}
                    </div>
                    
                    {/* Albanian Translation - Translation Rule */}
                    {(!isB2 || showTranslation) && (
                      <div className="relative">
                        <span className={`translation-subtitle mt-0.5 block transition duration-200`}>
                          {v.albanian_word}
                        </span>
                      </div>
                    )}
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
                {isB2 ? (
                  (v.notes_turkish || v.notes_albanian) && (
                    <div className="mt-3 pt-2.5 border-t border-[#E9ECEF]/80 dark:border-neutral-800/80 text-xs text-[#565E64] dark:text-neutral-400 font-light italic leading-relaxed">
                      <div>{v.notes_turkish || v.notes_albanian}</div>
                      {showTranslation && v.notes_turkish && v.notes_albanian && (
                        <div className="mt-1 text-[11px] text-neutral-400">
                          Përkthimi: {v.notes_albanian}
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  v.notes_albanian && (
                    <div className="mt-3 pt-2.5 border-t border-[#E9ECEF]/80 dark:border-neutral-800/80 text-xs text-[#565E64] dark:text-neutral-400 font-light italic leading-relaxed">
                      {v.notes_albanian}
                    </div>
                  )
                )}
 
                {/* Agglutinative Stem Breakdown */}
                {v.stem_breakdown && (
                  <div className="mt-3 pt-2.5 border-t border-[#E9ECEF]/80 dark:border-neutral-800/80">
                    <button
                      onClick={() => setRevealedStemIds(prev => ({ ...prev, [v.id]: !prev[v.id] }))}
                      className="text-[10px] font-bold text-[#3A5A40] hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                    >
                      <span>🔍</span> {revealedStemIds[v.id] 
                        ? (isB2 ? 'Analizi Gizle' : 'Fshih analizën e rrënjës') 
                        : (isB2 ? 'Kelime Analizi (Morfoloji)' : 'Zbërthe rrënjën (Morfologjia)')}
                    </button>
                    {revealedStemIds[v.id] && (
                      <div className="mt-2 p-2.5 bg-[#3A5A40]/5 rounded-xl border border-[#3A5A40]/25 text-xs font-technical font-medium text-[#3A5A40] animate-fade-in">
                        {v.stem_breakdown}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
