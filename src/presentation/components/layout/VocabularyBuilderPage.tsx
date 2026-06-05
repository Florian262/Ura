import React, { useState, useMemo, useCallback } from 'react';
import { a1VocabularyData } from '../../../infrastructure/db/a1Vocabulary';
import { a2VocabularyData } from '../../../infrastructure/db/a2Vocabulary';
import { WordDetailDrawer } from '../common/WordDetailDrawer';
import type { DictionaryEntry } from '../common/WordDetailDrawer';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

interface CategoryConfig {
  id: string;
  label: string;
  emoji: string;
  desc: string;
}

const A1_CATEGORIES: CategoryConfig[] = [
  { id: 'greetings', label: 'Përshëndetje & Bazat', emoji: '👋', desc: 'Përshëndetje, shprehje mirësjelljeje dhe fraza bazike.' },
  { id: 'family', label: 'Familja & Njerëzit', emoji: '👥', desc: 'Anëtarët e familjes, profesionet dhe marrëdhëniet shoqërore.' },
  { id: 'home', label: 'Shtëpia & Vendet', emoji: '🏠', desc: 'Dhomat, mobiljet, vendet publike dhe mjedisi rrethues.' },
  { id: 'cooking', label: 'Ushqimi & Gatimi', emoji: '🍳', desc: 'Ushqimet bazë, frutat, perimet, pijet dhe termat e kuzhinës.' },
  { id: 'weather', label: 'Moti & Koha', emoji: '🌤️', desc: 'Stinët, ditët e javës, moti dhe shprehje të kohës.' },
  { id: 'shopping', label: 'Blerjet & Numrat', emoji: '🛍️', desc: 'Pazari, rrobat, çmimet, numrat dhe njësitë matëse.' },
  { id: 'transport', label: 'Transporti & Qyteti', emoji: '🚌', desc: 'Mjetet e transportit, drejtimet dhe orientimi në qytet.' },
  { id: 'verbs', label: 'Foljet e Përditshme', emoji: '🏃‍♂️', desc: 'Veprimet kryesore të përditshme dhe lëvizjet.' },
  { id: 'adjectives', label: 'Mbiemrat & Ngjyrat', emoji: '🎨', desc: 'Cilësitë kryesore, ngjyrat, format dhe përshkrimet.' },
  { id: 'health', label: 'Trupi & Shëndeti', emoji: '🏥', desc: 'Pjesët e trupit, shëndeti, spitali dhe simptomat bazë.' }
];

const A2_CATEGORIES: CategoryConfig[] = [
  { id: 'work', label: 'Punë & Profesione', emoji: '💼', desc: 'Profesione, orari i punës, pagat dhe jeta profesionale.' },
  { id: 'leisure', label: 'Koha e Lirë & Hobit', emoji: '🏖️', desc: 'Sportet, aktivitetet rekreative, arti dhe koha e lirë.' },
  { id: 'travel', label: 'Udhëtime & Turizëm', emoji: '✈️', desc: 'Rezervimet, fluturimet, hotelet dhe eksplorimi i vendeve.' },
  { id: 'education', label: 'Arsimi & Mësimi', emoji: '📚', desc: 'Mësimet, provimet, jeta universitare dhe studimet.' },
  { id: 'environment', label: 'Mjedisi & Natyra', emoji: '🌳', desc: 'Ekologjia, klima, burimet natyrore dhe mbrojtja e natyrës.' },
  { id: 'emotions', label: 'Ndjenjat & Emocionet', emoji: '❤️', desc: 'Ndjenjat pozitive/negative, vlerat dhe marrëdhëniet shpirtërore.' },
  { id: 'technology', label: 'Teknologjia & Media', emoji: '💻', desc: 'Kompjuterat, interneti, programimi dhe pajisjet smart.' },
  { id: 'society', label: 'Jeta Shoqërore', emoji: '👥', desc: 'Ligjet, shteti, drejtësia, traditat dhe politika.' },
  { id: 'verbs', label: 'Foljet A2', emoji: '🏃‍♂️', desc: 'Foljet kyçe të nivelit A2 për të shprehur veprime komplekse.' },
  { id: 'adverbs', label: 'Ndajfolje & Lidhëza', emoji: '🔗', desc: 'Lidhëzat dhe ndajfoljet për të strukturuar fjali të gjata.' }
];

export const VocabularyBuilderPage: React.FC = () => {
  const { playText } = useAudioPlayer();
  const [activeLevel, setActiveLevel] = useState<'A1' | 'A2'>('A1');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Categories config dependent on active level
  const categoriesList = useMemo(() => {
    return activeLevel === 'A1' ? A1_CATEGORIES : A2_CATEGORIES;
  }, [activeLevel]);

  // Active Category configuration
  const activeCategory = useMemo(() => {
    return categoriesList.find(c => c.id === selectedCategoryId) || null;
  }, [selectedCategoryId, categoriesList]);

  // Words in the active category
  const categoryWords = useMemo(() => {
    if (!selectedCategoryId) return [];
    const sourceData = activeLevel === 'A1' ? a1VocabularyData : a2VocabularyData;
    return sourceData.filter(w => w.category === selectedCategoryId);
  }, [selectedCategoryId, activeLevel]);

  // Filtered words based on search query inside the active category
  const filteredWords = useMemo(() => {
    if (!searchQuery) return categoryWords;
    const lowerQuery = searchQuery.toLowerCase().trim();
    return categoryWords.filter(
      w =>
        w.word.toLowerCase().includes(lowerQuery) ||
        w.translation.toLowerCase().includes(lowerQuery) ||
        (w.notes && w.notes.toLowerCase().includes(lowerQuery))
    );
  }, [categoryWords, searchQuery]);

  // Total statistics
  const stats = useMemo(() => {
    const sourceData = activeLevel === 'A1' ? a1VocabularyData : a2VocabularyData;
    const total = sourceData.length;
    const balkan = sourceData.filter(w => w.is_balkan).length;
    const posCounts = sourceData.reduce((acc, w) => {
      acc[w.pos] = (acc[w.pos] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return { total, balkan, posCounts };
  }, [activeLevel]);

  // Audio Speech Synthesis Trigger
  const speakWord = useCallback((word: string, sourceLang: 'tr' | 'al') => {
    playText(word, sourceLang);
  }, [playText]);

  // Map database item to drawer format
  const handleOpenDetail = useCallback((item: any, categoryLabel: string) => {
    const mapped: DictionaryEntry = {
      id: `${activeLevel.toLowerCase()}-vocab-${item.id}`,
      source: 'tr',
      word: item.word,
      translation: item.translation,
      pos: item.pos,
      notes: item.notes,
      examples: item.examples,
      derivatives: item.derivatives,
      is_balkan: item.is_balkan,
      is_a1_vocab: activeLevel === 'A1',
      is_a2_vocab: activeLevel === 'A2',
      chapterTitle: `Fjalorthi Tematik ${activeLevel} • ${categoryLabel}`
    };
    setSelectedEntry(mapped);
    setIsDrawerOpen(true);
  }, [activeLevel]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 relative h-full">
      {/* Background Watermark */}
      <div className="curriculum-watermark opacity-25">
        FJALORTHI
      </div>

      <div className="animate-fade-in space-y-6">
        {/* Volumetric Glowing Header */}
      <div className="glass-panel p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden z-10 shadow-elevated border border-white/20">
        <div className="absolute w-48 h-48 rounded-full bg-teal-500/5 blur-2xl -top-12 -left-12 pointer-events-none"></div>
        <div className="absolute w-48 h-48 rounded-full bg-amber-500/5 blur-2xl -bottom-12 -right-12 pointer-events-none"></div>

        <div className="space-y-4 flex-1 text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0D9488] dark:text-[#14B8A6] uppercase select-none">
              Ndërtuesi i Fjalorit (Kelime Hazinesi {activeLevel})
            </span>
            <h2 className="text-2xl font-black text-[#1A1D20] dark:text-white uppercase tracking-tight font-display leading-tight">
              Fjalorthi Tematik {activeLevel}
            </h2>
            <p className="text-xs text-[#565E64] dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
              Zgjidhni një kategori tematike më poshtë për të mësuar fjalët më të rëndësishme të nivelit {activeLevel}. Çdo fjalë përfshin kuptimin shqip, shqiptimin zanor, shembuj kontekstualë dhe fjalë të prejardhura.
            </p>
          </div>

          {/* Level Switcher Switch Tabs */}
          <div className="flex bg-stone-900/5 dark:bg-white/5 p-1 rounded-xl w-fit border border-stone-900/10 dark:border-white/10 relative z-20">
            <button
              onClick={() => {
                setActiveLevel('A1');
                setSelectedCategoryId(null);
                setSearchQuery('');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeLevel === 'A1'
                  ? 'bg-white dark:bg-neutral-800 text-[#0D9488] shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              Niveli A1 (300 Fjalë)
            </button>
            <button
              onClick={() => {
                setActiveLevel('A2');
                setSelectedCategoryId(null);
                setSearchQuery('');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeLevel === 'A2'
                  ? 'bg-white dark:bg-neutral-800 text-[#3B82F6] shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              Niveli A2 (500 Fjalë)
            </button>
          </div>
        </div>

        {/* Dynamic Badge Stats */}
        <div className="flex gap-3 text-left">
          <div className="bg-[var(--color-bg-surface-glass)] border border-[var(--color-border-primary-glass)] rounded-xl px-4 py-3 shadow-xs">
            <span className="block text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Fjalë Gjithsej</span>
            <span className="text-lg font-black text-[var(--color-brand-accent)]">{stats.total}</span>
          </div>
          <div className="bg-[var(--color-bg-surface-glass)] border border-[var(--color-border-primary-glass)] rounded-xl px-4 py-3 shadow-xs">
            <span className="block text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Huazime Ballkanike</span>
            <span className="text-lg font-black text-[var(--color-brand-secondary)]">{stats.balkan} 🤝</span>
          </div>
        </div>
      </div>

      {/* Main Container Section */}
      {!selectedCategoryId ? (
        /* CATEGORIES GRID VIEW */
        <div className="space-y-4 relative z-10">
          <div className="text-[10px] font-bold text-[#565E64] uppercase tracking-wider text-left">
            Zgjidhni Kategorinë e Fjalëve:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesList.map(category => {
              // Count balkan items in this category
              const sourceData = activeLevel === 'A1' ? a1VocabularyData : a2VocabularyData;
              const balkanCount = sourceData.filter(w => w.category === category.id && w.is_balkan).length;
              const wordCount = activeLevel === 'A1' ? 30 : 50;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategoryId(category.id);
                    setSearchQuery('');
                  }}
                  className="glass-panel text-left p-5 rounded-2xl border border-white/20 bg-white/70 dark:bg-neutral-850/70 hover:bg-[#3A5A40]/5 dark:hover:bg-[#14B8A6]/5 hover:border-[#3A5A40]/20 dark:hover:border-[#14B8A6]/20 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between h-44 group relative overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-500/0 group-hover:to-teal-500/3 transition-all duration-300 pointer-events-none" />

                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 text-lg flex items-center justify-center select-none group-hover:scale-110 transition duration-200">
                      {category.emoji}
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-[#1C1917] dark:text-white uppercase tracking-wide group-hover:text-[#0D9488] dark:group-hover:text-[#14B8A6] transition">
                        {category.label}
                      </h4>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-light mt-1 line-clamp-2 leading-relaxed">
                        {category.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[9px] font-bold text-[#0D9488] dark:text-[#14B8A6] bg-[#0D9488]/10 dark:bg-[#14B8A6]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {wordCount} fjalë
                    </span>

                    {balkanCount > 0 && (
                      <span className="text-[9px] font-bold text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1" title={`${balkanCount} huazime ballkanike në këtë kategori`}>
                        🤝 {balkanCount}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* WORD CARD LIST VIEW FOR SELECTED CATEGORY */
        <div className="space-y-5 relative z-10 animate-fade-in">
          {/* Sub Header Navigation & Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Back to categories button */}
            <button
              onClick={() => setSelectedCategoryId(null)}
              className="self-start px-4 py-2 rounded-xl bg-white dark:bg-neutral-850 text-neutral-600 dark:text-neutral-300 border border-[#E9ECEF] dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition duration-200 text-xs font-bold shadow-xs cursor-pointer flex items-center gap-2"
            >
              ← Kthehu tek Kategoritë
            </button>

            {/* Title / Info */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">{activeCategory?.emoji}</span>
              <div className="text-left">
                <h3 className="text-sm font-black text-[#1C1917] dark:text-white uppercase tracking-wider leading-none">
                  {activeCategory?.label}
                </h3>
                <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-light">
                  Rezultatet: {filteredWords.length} / {activeLevel === 'A1' ? 30 : 50} fjalë
                </span>
              </div>
            </div>

            {/* Local Search Input */}
            <div className="relative md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Kërko në ${activeCategory?.label}...`}
                className="w-full rounded-xl border border-[#E9ECEF] dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 text-xs text-[#1A1D20] dark:text-white placeholder-neutral-450 focus:outline-none font-technical tracking-wide shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-2.5 text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 hover:text-[#1A1D20] dark:hover:text-white bg-transparent border-0 cursor-pointer"
                >
                  Fshi
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredWords.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredWords.map(wordItem => (
                <div
                  key={wordItem.id}
                  onClick={() => handleOpenDetail(wordItem, activeCategory?.label || '')}
                  className="glass-panel p-4 rounded-xl border border-white/20 bg-white dark:bg-neutral-850 hover:border-[#3A5A40]/30 dark:hover:border-[#14B8A6]/30 shadow-xs flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer text-left hover:shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      {/* Turkish Word */}
                      <span lang="tr" className="text-sm font-black text-[#1C1917] dark:text-white font-technical tracking-wide block">
                        {wordItem.word}
                      </span>
                      {/* Part of Speech */}
                      <span className="inline-block text-[8px] font-extrabold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        {wordItem.pos}
                      </span>
                    </div>

                    <div className="flex gap-1.5 items-center">
                      {wordItem.is_balkan && (
                        <span
                          className="text-[8px] font-bold text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/20 px-1.5 py-0.5 rounded"
                          title="Huazim Ballkanik"
                        >
                          🤝 Huazim
                        </span>
                      )}

                      {/* Offline TTS speech synthesis triggers */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid opening drawer
                          speakWord(wordItem.word, 'tr');
                        }}
                        className="w-7 h-7 rounded bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 flex items-center justify-center cursor-pointer text-xs transition border border-transparent dark:border-neutral-800"
                        title="Dëgjo Shqiptimin"
                      >
                        🔊
                      </button>
                    </div>
                  </div>

                  {/* Albanian Translation */}
                  <div className="border-t border-neutral-100 dark:border-neutral-800 pt-2.5">
                    <span className="text-[10px] font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-widest block mb-0.5">
                      Përkthimi:
                    </span>
                    <p className={`text-xs font-semibold line-clamp-1 leading-snug ${activeLevel === 'A1' ? 'text-[#0D9488] dark:text-[#14B8A6]' : 'text-[#3B82F6]'}`}>
                      {wordItem.translation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-panel py-20 text-center text-[#565E64] dark:text-neutral-550 border border-dashed border-[#E9ECEF] dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-850">
              <span className="text-3xl block mb-2 opacity-40">🔍</span>
              <p className="text-xs font-light italic">Nuk u gjet asnjë fjalë që përputhet me kërkimin tuaj.</p>
            </div>
          )}
        </div>
      )}

      </div>

      {/* Reusable Detail Overlay Drawer */}
      <WordDetailDrawer
        entry={selectedEntry}
        isOpen={isDrawerOpen && !!selectedEntry}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedEntry(null);
        }}
        onSpeak={speakWord}
      />
    </div>
  );
};
