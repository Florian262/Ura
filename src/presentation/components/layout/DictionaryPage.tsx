import React, { useState, useEffect, useMemo, useRef, useCallback, useDeferredValue } from 'react';
import { ChapterRepository } from '../../../infrastructure/repository/ChapterRepository';
import { a1VocabularyData } from '../../../infrastructure/db/a1Vocabulary';
import { a2VocabularyData } from '../../../infrastructure/db/a2Vocabulary';
import { WordDetailDrawer } from '../common/WordDetailDrawer';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

export interface DictionaryEntry {
  id: string;
  source: 'al' | 'tr';
  word: string;
  translation: string;
  pos: string;              // Part of speech: emër, folje, mbiemër, ndajfolje, përemër, lidhëz, pasthirrmë
  inflection?: string;      // Suffix helpers, e.g. "-u" (Alb nouns), "(-e)" (Turk Dativ verbs)
  notes?: string;
  senses?: string[];        // Array of secondary senses
  examples?: { source: string; target: string }[];
  derivatives?: { word: string; translation: string; pos: string }[];
  is_balkan?: boolean;
  chapterTitle?: string;    // If derived from curriculum
  is_a1_vocab?: boolean;    // Badge flag for A1 Thematic Vocab items
  is_a2_vocab?: boolean;    // Badge flag for A2 Thematic Vocab items
}

export const DictionaryPage: React.FC = () => {
  const { playText } = useAudioPlayer();
  // States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [selectedPOS, setSelectedPOS] = useState<string>('ALL');
  const [showBalkanOnly, setShowBalkanOnly] = useState<boolean>(false);
  const [loadedEntries, setLoadedEntries] = useState<DictionaryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Mobile drawer states
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Cache mechanics
  const cacheRef = useRef<Map<string, DictionaryEntry[]>>(new Map());
  const fetchingRef = useRef<Set<string>>(new Set());

  // Compile static curriculum vocabulary
  const curriculumEntries = useMemo(() => {
    const chapters = ChapterRepository.getAllChapters();
    const list: DictionaryEntry[] = [];
    chapters.forEach(ch => {
      const vocab = ChapterRepository.getVocabularyForChapter(ch.id);
      vocab.forEach((v, index) => {
        list.push({
          id: `curr-${ch.id}-${index}`,
          source: 'tr',
          word: v.turkish_word,
          translation: v.albanian_word,
          pos: v.category, // Derived from core lesson items
          inflection: v.is_shared_balkan_word === 1 ? undefined : undefined,
          notes: v.notes_albanian || undefined,
          is_balkan: v.is_shared_balkan_word === 1,
          chapterTitle: `Niveli ${ch.level} • Mësimi ${ch.order_index}`
        });
      });
    });
    return list;
  }, []);

  // Compile static A1 thematic vocabulary
  const a1VocabEntries = useMemo(() => {
    const getCategoryLabel = (cat: string): string => {
      const mapping: Record<string, string> = {
        greetings: 'Përshëndetje & Bazat 👋',
        family: 'Familja & Njerëzit 👥',
        home: 'Shtëpia & Vendet 🏠',
        cooking: 'Ushqimi & Gatimi 🍳',
        weather: 'Moti & Koha 🌤️',
        shopping: 'Blerjet & Numrat 🛍️',
        transport: 'Transporti & Qyteti 🚌',
        verbs: 'Foljet e Përditshme 🏃‍♂️',
        adjectives: 'Mbiemrat & Ngjyrat 🎨',
        health: 'Trupi & Shendeti 🏥'
      };
      return mapping[cat] || cat;
    };

    return a1VocabularyData.map((item): DictionaryEntry => ({
      id: `a1-vocab-${item.id}`,
      source: 'tr',
      word: item.word,
      translation: item.translation,
      pos: item.pos,
      notes: item.notes,
      examples: item.examples,
      derivatives: item.derivatives,
      is_balkan: item.is_balkan,
      is_a1_vocab: true,
      chapterTitle: `Fjalorthi Tematik A1 • ${getCategoryLabel(item.category)}`
    }));
  }, []);

  // Compile static A2 thematic vocabulary
  const a2VocabEntries = useMemo(() => {
    const getCategoryLabel = (cat: string): string => {
      const mapping: Record<string, string> = {
        work: 'Punë & Profesione 💼',
        leisure: 'Koha e Lirë & Hobit 🏖️',
        travel: 'Udhëtime & Turizëm ✈️',
        education: 'Arsimi & Mësimi 📚',
        environment: 'Mjedisi & Natyra 🌳',
        emotions: 'Ndjenjat & Emocionet ❤️',
        technology: 'Teknologjia & Media 💻',
        society: 'Jeta Shoqërore 👥',
        verbs: 'Foljet e Përditshme A2 🏃‍♂️',
        adverbs: 'Ndajfolje & Lidhëza A2 🔗'
      };
      return mapping[cat] || cat;
    };

    return a2VocabularyData.map((item): DictionaryEntry => ({
      id: `a2-vocab-${item.id}`,
      source: 'tr',
      word: item.word,
      translation: item.translation,
      pos: item.pos,
      notes: item.notes,
      examples: item.examples,
      derivatives: item.derivatives,
      is_balkan: item.is_balkan,
      is_a2_vocab: true,
      chapterTitle: `Fjalorthi Tematik A2 • ${getCategoryLabel(item.category)}`
    }));
  }, []);

  // Map letters to normalized JSON files
  const getLetterFile = (query: string): string => {
    if (!query) return '';
    const trimmed = query.trim();
    if (trimmed.length === 0) return '';
    
    // Check first character
    const firstChar = trimmed.charAt(0).toLowerCase();
    if (['ç'].includes(firstChar)) return 'c';
    if (['ë'].includes(firstChar)) return 'e';
    if (['ı'].includes(firstChar)) return 'i';
    if (['ö'].includes(firstChar)) return 'o';
    if (['ü'].includes(firstChar)) return 'u';
    if (['ş'].includes(firstChar)) return 's';
    if (['ğ'].includes(firstChar)) return 'g';
    
    return firstChar.match(/[a-z]/) ? firstChar : 'a';
  };

  // Asynchronous split-json loader effect
  useEffect(() => {
    const letter = getLetterFile(searchQuery);
    if (!letter) return;

    // Check cache first
    if (cacheRef.current.has(letter)) {
      return;
    }

    // Check if already in-flight
    if (fetchingRef.current.has(letter)) {
      return;
    }

    fetchingRef.current.add(letter);
    setIsLoading(true);

    fetch(`/dict/${letter}.json`)
      .then(res => {
        if (!res.ok) throw new Error(`Letter file ${letter}.json not found`);
        return res.json();
      })
      .then((data: DictionaryEntry[]) => {
        cacheRef.current.set(letter, data);
        setLoadedEntries(prev => {
          // Merge and avoid duplicate items in state
          const existingIds = new Set(prev.map(item => item.id));
          const newItems = data.filter(item => !existingIds.has(item.id));
          return [...prev, ...newItems];
        });
      })
      .catch(err => {
        console.warn('Dictionary fetch error:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  // Combine curriculum, a1 thematic vocabulary, and dynamically fetched entries
  const allEntries = useMemo(() => {
    const map = new Map<string, DictionaryEntry>();
    
    const mergeIntoMap = (item: DictionaryEntry) => {
      const key = item.word.toLowerCase().trim();
      if (!map.has(key)) {
        // Deep copy key properties to avoid mutating state
        map.set(key, { 
          ...item,
          senses: item.senses ? [...item.senses] : [],
          examples: item.examples ? [...item.examples] : [],
          derivatives: item.derivatives ? [...item.derivatives] : []
        });
      } else {
        const existing = map.get(key)!;
        
        // 1. Merge translations (comma separated, unique)
        const t1 = existing.translation.split(',').map(x => x.trim()).filter(Boolean);
        const t2 = item.translation.split(',').map(x => x.trim()).filter(Boolean);
        existing.translation = Array.from(new Set([...t1, ...t2])).join(', ');

        // 2. Merge parts of speech
        const p1 = existing.pos.split(',').map(x => x.trim()).filter(Boolean);
        const p2 = item.pos.split(',').map(x => x.trim()).filter(Boolean);
        existing.pos = Array.from(new Set([...p1, ...p2])).join(', ');

        // 3. Merge senses (definitions)
        const s1 = existing.senses || [];
        const s2 = item.senses || [];
        existing.senses = Array.from(new Set([...s1, ...s2])).filter(Boolean);

        // 4. Merge example sentences (deduplicated by source text)
        const ex1 = existing.examples || [];
        const ex2 = item.examples || [];
        const seenSources = new Set(ex1.map(x => x.source.toLowerCase().trim()));
        const uniqueExamples = [...ex1];
        ex2.forEach(x => {
          const srcClean = x.source.toLowerCase().trim();
          if (!seenSources.has(srcClean)) {
            seenSources.add(srcClean);
            uniqueExamples.push(x);
          }
        });
        existing.examples = uniqueExamples;

        // 5. Merge derivatives (deduplicated by word)
        const d1 = existing.derivatives || [];
        const d2 = item.derivatives || [];
        const seenDerivs = new Set(d1.map(x => x.word.toLowerCase().trim()));
        const uniqueDerivs = [...d1];
        d2.forEach(x => {
          const wClean = x.word.toLowerCase().trim();
          if (!seenDerivs.has(wClean)) {
            seenDerivs.add(wClean);
            uniqueDerivs.push(x);
          }
        });
        existing.derivatives = uniqueDerivs;

        // 6. Merge grammatical notes
        if (item.notes && existing.notes) {
          if (!existing.notes.toLowerCase().includes(item.notes.toLowerCase())) {
            existing.notes = `${existing.notes} | ${item.notes}`;
          }
        } else if (item.notes) {
          existing.notes = item.notes;
        }

        // 7. Merge badges & source info
        if (item.is_balkan) existing.is_balkan = true;
        if (item.is_a1_vocab) existing.is_a1_vocab = true;
        if (item.is_a2_vocab) existing.is_a2_vocab = true;
        if (item.chapterTitle) {
          if (existing.chapterTitle) {
            if (!existing.chapterTitle.toLowerCase().includes(item.chapterTitle.toLowerCase())) {
              existing.chapterTitle = `${existing.chapterTitle} • ${item.chapterTitle}`;
            }
          } else {
            existing.chapterTitle = item.chapterTitle;
          }
        }
        if (item.inflection && !existing.inflection) {
          existing.inflection = item.inflection;
        }
      }
    };

    loadedEntries.forEach(mergeIntoMap);
    curriculumEntries.forEach(mergeIntoMap);
    a1VocabEntries.forEach(mergeIntoMap);
    a2VocabEntries.forEach(mergeIntoMap);

    return Array.from(map.values());
  }, [loadedEntries, curriculumEntries, a1VocabEntries, a2VocabEntries]);

  // Filter entries based on queries & POS tags
  const filteredEntries = useMemo(() => {
    return allEntries.filter(entry => {
      // 1. Search Query Match
      const matchesSearch = 
        entry.word.toLowerCase().includes(deferredSearchQuery.toLowerCase()) ||
        entry.translation.toLowerCase().includes(deferredSearchQuery.toLowerCase()) ||
        (entry.notes && entry.notes.toLowerCase().includes(deferredSearchQuery.toLowerCase()));

      // 2. Balkan Filter
      const matchesBalkan = !showBalkanOnly || entry.is_balkan === true;

      // 3. Part of Speech Filter
      const matchesPOS = selectedPOS === 'ALL' || entry.pos.toLowerCase() === selectedPOS.toLowerCase();

      return matchesSearch && matchesBalkan && matchesPOS;
    }).sort((a, b) => a.word.localeCompare(b.word));
  }, [allEntries, deferredSearchQuery, showBalkanOnly, selectedPOS]);

  // Clamped visible results to prevent rendering lag on massive word counts
  const visibleEntries = useMemo(() => {
    return filteredEntries.slice(0, 40);
  }, [filteredEntries]);

  // Automatically select first entry in results on desktop when list changes
  useEffect(() => {
    if (filteredEntries.length > 0) {
      // If current selection is no longer in filtered list, reset to first matching
      const stillExists = filteredEntries.some(e => e.id === selectedEntry?.id);
      if (!stillExists) {
        setSelectedEntry(filteredEntries[0]);
      }
    } else {
      setSelectedEntry(null);
    }
  }, [filteredEntries, selectedEntry]);

  // Handle entry select
  const handleSelectEntry = (entry: DictionaryEntry) => {
    setSelectedEntry(entry);
    setIsDrawerOpen(true);
  };

  // Speech synthesis pronunciation helper
  const speakWord = useCallback((word: string, sourceLang: 'tr' | 'al') => {
    playText(word, sourceLang);
  }, [playText]);

  const posTags = [
    { id: 'ALL', label: 'Çdo gjë' },
    { id: 'emër', label: 'Emra' },
    { id: 'folje', label: 'Folje' },
    { id: 'mbiemër', label: 'Mbiemra' },
    { id: 'ndajfolje', label: 'Ndajfolje' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 relative h-full">
      {/* Background Typography Watermark */}
      <div className="curriculum-watermark opacity-25">
        FJALORI
      </div>

      <div className="animate-fade-in space-y-6">
        {/* Premium Dictionary Header Card */}
      <div className="glass-panel p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden z-10 shadow-elevated border border-white/20">
        {/* Volumetric background glow circles */}
        <div className="absolute w-48 h-48 rounded-full bg-teal-500/5 blur-2xl -top-12 -left-12 pointer-events-none"></div>
        <div className="absolute w-48 h-48 rounded-full bg-amber-500/5 blur-2xl -bottom-12 -right-12 pointer-events-none"></div>

        <div className="space-y-2 flex-1 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0D9488] uppercase select-none">
            Arkiva e Fjalëve (Sözlük Portal)
          </span>
          <h2 className="text-2xl font-black text-[#1A1D20] dark:text-white uppercase tracking-tight font-display leading-tight">
            Fjalori i Plotë Turqisht-Shqip
          </h2>
          <p className="text-xs text-[#565E64] dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
            Kërkoni fjalë, përkthime dhe shprehje. Përdorni kolonat për analizë gramatikore, rregulla përdorimi, shembuj dhe shqiptim zanor offline.
          </p>
        </div>

        {/* Dynamic Stylized Dictionary Book SVG */}
        <div className="hidden sm:flex shrink-0 w-20 h-20 items-center justify-center bg-stone-900/5 dark:bg-white/5 rounded-2xl border border-white/20 shadow-inner relative p-4">
          <svg className="w-10 h-10 text-[#0D9488] dark:text-[#14B8A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M8 6h8" strokeWidth="2" opacity="0.6" />
            <path d="M8 10h8" strokeWidth="2" opacity="0.6" />
            <path d="M8 14h8" strokeWidth="2" opacity="0.6" />
          </svg>
          <div className="absolute inset-0 border border-teal-500/20 rounded-2xl pointer-events-none"></div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-4 z-10 relative">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search Box */}
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Shkruaj fjalën shqip ose turqisht këtu..."
              className="w-full rounded-xl border border-[#E9ECEF] bg-white px-4 py-2.5 text-xs text-[#1A1D20] placeholder-neutral-400 focus:outline-none font-technical tracking-wide shadow-xs"
            />
            {isLoading && (
              <div className="absolute right-12 top-3 w-4 h-4 border-2 border-[#0D9488] border-t-transparent rounded-full animate-spin"></div>
            )}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-2.5 text-[10px] uppercase font-bold text-neutral-400 hover:text-[#1A1D20] bg-transparent border-0 cursor-pointer"
              >
                Fshi
              </button>
            )}
          </div>

          {/* Balkan and Options Toggle */}
          <button
            onClick={() => setShowBalkanOnly(!showBalkanOnly)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
              showBalkanOnly
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white text-[#565E64] border-[#E9ECEF] hover:bg-neutral-50'
            }`}
          >
            {showBalkanOnly ? '✓ Vetëm Huazimet' : 'Filtro Huazimet Ballkanike 🤝'}
          </button>
        </div>

        {/* POS tag pill filter list */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-[#E9ECEF] pb-3">
          <span className="text-[10px] font-bold text-[#565E64] uppercase tracking-wider mr-2">Pjesët e Ligjëratës:</span>
          {posTags.map(tag => {
            const isSelected = selectedPOS === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedPOS(tag.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition border cursor-pointer ${
                  isSelected
                    ? 'bg-[#3A5A40]/10 text-[#3A5A40] border-[#3A5A40]/30 font-bold'
                    : 'bg-white text-[#565E64] border-transparent hover:bg-neutral-50 hover:text-[#1A1D20]'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split-Pane Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 z-10 relative items-start">
        
        {/* LEFT COLUMN: Results Scroll Pane */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-3">
          <div className="text-[10px] font-bold text-[#565E64] uppercase tracking-wider flex justify-between">
            <span>Rezultatet</span>
            {searchQuery.trim().length > 0 && <span className="text-[#0D9488] animate-pulse">Lajmërohet kërkimi...</span>}
          </div>
          
          <div className="glass-panel border border-[#E9ECEF] rounded-2xl bg-white max-h-[500px] overflow-y-auto p-2 space-y-1 divide-y divide-neutral-50 shadow-xs no-scrollbar">
            {visibleEntries.length > 0 ? (
              <>
                {visibleEntries.map(entry => {
                  const isSelected = selectedEntry?.id === entry.id;
                  return (
                    <button
                      key={entry.id}
                      onClick={() => handleSelectEntry(entry)}
                      className={`w-full flex items-center justify-between text-left p-3 rounded-xl transition duration-150 border cursor-pointer outline-none ${
                        isSelected
                          ? 'bg-[#3A5A40]/5 border-[#3A5A40]/20'
                          : 'border-transparent hover:bg-neutral-50/50'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span lang="tr" className="text-xs font-bold text-[#1C1917] font-technical flex items-center gap-1.5">
                          {entry.word}
                          {entry.inflection && (
                            <span className="text-[10px] font-light text-neutral-400 normal-case">{entry.inflection}</span>
                          )}
                        </span>
                        <span className="block text-[11px] text-[#565E64] font-medium leading-tight">
                          {entry.translation}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        {entry.is_balkan && (
                          <span className="text-[8px] font-extrabold text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/20 px-1 rounded-md">
                            🤝
                          </span>
                        )}
                        {entry.is_a1_vocab && (
                          <span className="text-[8px] font-extrabold text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/20 px-1 rounded-md" title="Fjalorthi Tematik A1">
                            A1
                          </span>
                        )}
                        {entry.is_a2_vocab && (
                          <span className="text-[8px] font-extrabold text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-1 rounded-md" title="Fjalorthi Tematik A2">
                            A2
                          </span>
                        )}
                        <span className="text-[9px] font-bold text-[#565E64] capitalize bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 rounded-md">
                          {entry.pos}
                        </span>
                      </div>
                    </button>
                  );
                })}
                {filteredEntries.length > visibleEntries.length && (
                  <div className="text-center py-3 text-[10px] text-neutral-400 dark:text-neutral-500 italic font-light">
                    Po shfaqen 40 fjalët e para. Shkruani më shumë shkronja për të ngushtuar kërkimin...
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16 text-[#565E64] space-y-1.5">
                <span className="text-2xl">🔍</span>
                <p className="text-xs font-light italic">Shtypni shkronja për të kërkuar fjalë offline...</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Desktop Detailed View Panel (hidden on mobile) */}
        <div className="hidden md:block md:col-span-7 sticky top-24">
          <div className="text-[10px] font-bold text-[#565E64] uppercase tracking-wider mb-3">Analiza e Fjalës</div>
          
          {selectedEntry ? (
            <div className="glass-panel border border-[#E9ECEF] rounded-2xl bg-white p-6 shadow-sm space-y-5 animate-fade-in min-h-[300px] flex flex-col justify-between max-h-[calc(100vh-160px)] overflow-y-auto">
              
              {/* Header section */}
              <div className="space-y-3">
                <div className="flex justify-between items-start border-b border-[#E9ECEF] pb-3">
                  <div>
                    {/* Headword */}
                    <div className="flex items-baseline gap-2">
                      <h3 lang="tr" className="text-lg font-black text-[#1C1917] font-technical tracking-wide">
                        {selectedEntry.word}
                      </h3>
                      {selectedEntry.inflection && (
                        <span className="text-xs font-bold text-[#D97706]">
                          {selectedEntry.inflection}
                        </span>
                      )}
                    </div>
                    
                    {/* Part of Speech Label */}
                    <div className="flex gap-2 items-center mt-1 flex-wrap">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#565E64] bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 rounded-md leading-none">
                        {selectedEntry.pos}
                      </span>
                      {selectedEntry.is_balkan && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D97706] bg-[#D97706]/10 border border-[#D97706]/35 px-1.5 py-0.5 rounded-md leading-none">
                          Huazim Ballkanik 🤝
                        </span>
                      )}
                      {selectedEntry.is_a1_vocab && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 px-1.5 py-0.5 rounded-md leading-none">
                          Fjalorth A1 📚
                        </span>
                      )}
                      {selectedEntry.is_a2_vocab && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-1.5 py-0.5 rounded-md leading-none">
                          Fjalorth A2 📚
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pronounce Trigger */}
                  <button
                    onClick={() => speakWord(selectedEntry.word, selectedEntry.source)}
                    className="w-8 h-8 rounded-lg border border-[#E9ECEF] hover:border-[#3A5A40] hover:text-[#3A5A40] bg-white flex items-center justify-center cursor-pointer shadow-xs transition"
                    title="Shqipto fjalën zanor"
                  >
                    🔊
                  </button>
                </div>

                {/* Meanings / Senses List */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Përkthimi:</span>
                  <span className="text-base font-bold text-[#0D9488] block leading-snug">
                    {selectedEntry.translation}
                  </span>
                  
                  {selectedEntry.senses && selectedEntry.senses.length > 0 && (
                    <div className="space-y-1.5 mt-2.5">
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Kuptimet e Detajuara:</span>
                      <ol className="list-decimal pl-4 space-y-1">
                        {selectedEntry.senses.map((sense, idx) => (
                          <li key={idx} className="text-xs font-medium text-[#1C1917]">
                            {sense}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                {/* Notes Section */}
                {selectedEntry.notes && (
                  <div className="bg-[#3A5A40]/5 border border-[#3A5A40]/10 rounded-xl p-3.5 mt-3 text-xs text-[#1A1D20] font-normal leading-relaxed italic">
                    <span className="font-bold text-[#3A5A40] normal-case not-italic block text-[9px] uppercase tracking-wider mb-1">Shënim Gramatikor:</span>
                    {selectedEntry.notes}
                  </div>
                )}
              </div>

              {/* Examples Section */}
              <div className="space-y-2.5 pt-4 border-t border-[#E9ECEF]">
                {selectedEntry.examples && selectedEntry.examples.length > 0 ? (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Shembuj përdorimi:</span>
                    <div className="space-y-1.5">
                      {selectedEntry.examples.map((ex, idx) => (
                        <div key={idx} className="text-xs italic font-light text-[#565E64] border-l-2 border-[#E9ECEF] pl-2.5">
                          {ex.source} &rarr; <span className="font-medium text-[#0D9488] not-italic">{ex.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-[10px] text-neutral-300 italic font-light">Nuk ka shembuj shtesë të regjistruar për këtë fjalë.</div>
                )}

                {/* Derivatives Section */}
                {selectedEntry.derivatives && selectedEntry.derivatives.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-[#E9ECEF]/60">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Fjalë të prejardhura (Derivatives):</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedEntry.derivatives.map((deriv, idx) => (
                        <div key={idx} className="bg-neutral-100 dark:bg-neutral-800/40 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg px-2.5 py-1 text-xs">
                          <span lang="tr" className="font-bold text-[#1C1917]">{deriv.word}</span>
                          <span className="text-[10px] text-neutral-400 mx-1.5">|</span>
                          <span className="text-neutral-500 italic">{deriv.translation}</span>
                          <span className="text-[8px] text-[#0D9488] font-bold ml-1 bg-[#0D9488]/10 px-1 rounded-sm uppercase tracking-wide">{deriv.pos}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Source Metadata */}
                {selectedEntry.chapterTitle && (
                  <div className="text-[9px] text-neutral-400 pt-2 flex justify-between items-center border-t border-[#E9ECEF]/40 font-light">
                    <span>Burimi: Kurrikula e Mësimit</span>
                    <span className="font-medium text-[#565E64]">{selectedEntry.chapterTitle}</span>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="glass-panel border border-dashed border-[#E9ECEF] rounded-2xl bg-white py-24 text-center text-[#565E64] shadow-xs">
              <span className="text-3xl block mb-2 opacity-40">📄</span>
              <p className="text-xs font-light italic">Zgjidhni një fjalë nga lista majtas për të parë analizën e detajuar.</p>
            </div>
          )}
        </div>

      </div>

      </div>

      {/* MOBILE DRAWER SHEET (Slide-up modal from bottom) using reusable component */}
      <div className="md:hidden">
        <WordDetailDrawer
          entry={selectedEntry}
          isOpen={isDrawerOpen && !!selectedEntry}
          onClose={() => setIsDrawerOpen(false)}
          onSpeak={speakWord}
        />
      </div>

    </div>
  );
};
