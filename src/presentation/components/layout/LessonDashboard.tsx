import React, { useState, useEffect, useRef, useMemo } from 'react';
import anime from 'animejs';
import { useLesson } from '../../../application/state/LessonContext';
import type { Chapter } from '../../../infrastructure/db/seedData';
import { ProgressRepository } from '../../../infrastructure/repository/ProgressRepository';
import { ChapterRepository } from '../../../infrastructure/repository/ChapterRepository';

const UraIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    className={`${className} shrink-0`}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 18c4-5 8-5 12 0" />
    <path d="M9 18c3-3 6-3 9 0" opacity="0.5" />
  </svg>
);

export const LessonDashboard: React.FC = () => {
  const { chapters, loadChapter, userName, setActivePage } = useLesson();
  
  // Group chapters by level
  const levels: Record<string, Chapter[]> = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
  };

  chapters.forEach(ch => {
    if (levels[ch.level]) {
      levels[ch.level].push(ch);
    }
  });

  // Pedagogical Preview Syllabus & Curiosity Gaps focus configurations
  const levelSyllabus: Record<string, { desc: string; preview: string; focus: string; index: string; tags: string[] }> = {
    A1: { 
      desc: 'FILLESTAR', 
      index: '01',
      preview: 'Kurrikula: Prezantimi, Harmonia Vokalike, dhe 250 fjalë të përbashkëta (Dollap, Xham, Çorape).', 
      focus: 'Fokusimi: Prezantimi dhe Harmonia Vokalike (Çoğul Eki).',
      tags: ['Harmoni Vokalike', 'Çoğul Eki', '250 Cognates']
    },
    A2: { 
      desc: 'ELEMENTAR', 
      index: '02',
      preview: 'Kurrikula: Koha e shkuar e drejtpërdrejtë dhe strukturat e lakimit vendor për biseda elementare.', 
      focus: 'Fokusimi: Koha e shkuar e drejtpërdrejtë (-dı) dhe përshkrimet elementare.',
      tags: ['Koha e Shkuar (-dı)', 'Lokativi', 'Përshkrime']
    },
    B1: { 
      desc: 'NDËRMJETËM', 
      index: '03',
      preview: 'Kurrikula: Zotërimi i Mënyrës Habitore të shkuar të pacaktuar për të shprehur habi dhe thashetheme.', 
      focus: 'Fokusimi: Lidhja e fjalive me Mënyrën Habitore (Mënyra e habitshme -miş).',
      tags: ['Habitore (-miş)', 'Lidhëzat', 'Tregime']
    },
    B2: { 
      desc: 'NDËRMJETËM I LARTË', 
      index: '04',
      preview: 'Kurrikula: Strukturat hipotetike kushtore dhe shprehja e dëshirave komplekse në turqisht.', 
      focus: 'Fokusimi: Fjalia kushtore (-se), hipotezat dhe shprehja e dëshirave.',
      tags: ['Kushtorja (-se)', 'Dëshirat', 'Hipotezat']
    },
    C1: { 
      desc: 'AVANCUAR', 
      index: '05',
      preview: 'Kurrikula: Strukturat letrare akademike, gazetareske dhe pjesoret e ndërlikuara turke.', 
      focus: 'Fokusimi: Pjesoret & strukturat e ndërlikuara letrare turke (Sıfat-Fiiller).',
      tags: ['Sıfat-Fiiller', 'Letrare', 'Akademike']
    },
    C2: { 
      desc: 'PRANË GJUHËS AMTARE', 
      index: '06',
      preview: 'Kurrikula: Idiomat kulturore, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.', 
      focus: 'Fokusimi: Idiomat, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.',
      tags: ['Balkanizmat', 'Idiomat', 'Proverbat']
    }
  };

  const getLevelProgress = (level: string) => {
    const chapterList = levels[level] || [];
    if (chapterList.length === 0) return { completed: 0, total: 0, percentage: 0 };
    const completedCount = chapterList.filter(ch => {
      const progress = ProgressRepository.getChapterProgress(ch.id);
      return progress?.is_completed === true;
    }).length;
    const percentage = Math.round((completedCount / chapterList.length) * 100);
    return { completed: completedCount, total: chapterList.length, percentage };
  };

  // Determine active incomplete level
  const getActiveLevelKey = () => {
    const keys = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    for (const key of keys) {
      const { percentage, total } = getLevelProgress(key);
      if (percentage < 100 && total > 0) {
        return key;
      }
    }
    return 'A1'; // Default fallback
  };

  const activeLevelKey = getActiveLevelKey();
  
  // State for active expanded accordion card
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Initialize selectedLevel to activeLevelKey on mount when chapters are ready
  const initialMountRef = useRef<boolean>(false);
  useEffect(() => {
    if (!initialMountRef.current && chapters.length > 0) {
      setSelectedLevel(getActiveLevelKey());
      initialMountRef.current = true;
    }
  }, [chapters]);

  // Refs to accordion containers and cards
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  // 1. Staggered load entrance timeline animation
  useEffect(() => {
    anime.set('.hero-banner-anim', { opacity: 0 });
    anime.set('.stat-card-anim', { opacity: 0 });
    anime.set('.level-card-anim', { opacity: 0 });

    const tl = anime.timeline({ easing: 'easeOutCubic' });
    tl.add({
      targets: '.hero-banner-anim',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 500
    })
    .add({
      targets: '.stat-card-anim',
      translateY: [20, 0],
      opacity: [0, 1],
      scale: [0.97, 1],
      delay: anime.stagger(60),
      duration: 600,
      easing: 'easeOutElastic(1.1, 0.76)'
    }, '-=300')
    .add({
      targets: '.level-card-anim',
      translateX: [-25, 0],
      opacity: [0, 1],
      scale: [0.98, 1],
      delay: anime.stagger(60),
      duration: 600,
      easing: 'easeOutElastic(1.0, 0.8)',
      complete: () => {
        // Strip inline transforms from cards to ensure 3D tilt hover works
        const cards = document.querySelectorAll('.level-card-anim');
        cards.forEach((card) => {
          (card as HTMLElement).style.transform = '';
        });
      }
    }, '-=400');
  }, []);

  // 2. Active neon border rotation animation loop
  useEffect(() => {
    let angle = 0;
    let rId: number;
    const animateActiveBorders = () => {
      angle = (angle + 1.2) % 360;
      const activeCards = document.querySelectorAll('.level-card.active-glow');
      activeCards.forEach(card => {
        (card as HTMLElement).style.setProperty('--angle', `${angle}deg`);
      });
      rId = requestAnimationFrame(animateActiveBorders);
    };
    rId = requestAnimationFrame(animateActiveBorders);
    return () => cancelAnimationFrame(rId);
  }, []);

  // 3. 3D Tilt & Glare mouse listener effect
  useEffect(() => {
    const cards = document.querySelectorAll('.level-card:not(.locked)');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = x - xc;
      const dy = y - yc;
      
      // Milder 3D tilt angle (max 0.5 degrees) for premium touch
      const rotateX = -(dy / yc) * 0.5;
      const rotateY = (dx / xc) * 0.5;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove as EventListener);
      card.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, [chapters, selectedLevel]);

  // 4. Accordion heights transition listener
  const prevSelectedLevel = useRef<string | null>(selectedLevel);
  useEffect(() => {
    const prev = prevSelectedLevel.current;
    const curr = selectedLevel;
    
    if (prev && prev !== curr) {
      const container = containerRefs.current[prev];
      if (container) {
        const currentHeight = container.scrollHeight;
        container.style.maxHeight = currentHeight + 'px';
        anime.remove(container);
        anime({
          targets: container,
          maxHeight: [currentHeight, 0],
          opacity: [1, 0],
          duration: 250,
          easing: 'easeInOutCubic',
          complete: () => {
            container.style.maxHeight = '0px';
          }
        });
      }
    }
    
    if (curr && curr !== prev) {
      const container = containerRefs.current[curr];
      if (container) {
        container.style.maxHeight = 'none';
        const targetHeight = container.scrollHeight;
        container.style.maxHeight = '0px';
        container.style.opacity = '0';
        anime.remove(container);
        anime({
          targets: container,
          maxHeight: [0, targetHeight],
          opacity: [0, 1],
          duration: 350,
          easing: 'easeOutCubic',
          complete: () => {
            container.style.maxHeight = 'none';
          }
        });
        
        // Stagger chapter buttons with bounce
        const items = container.querySelectorAll('.ch-item');
        if (items.length > 0) {
          anime.remove(items);
          anime({
            targets: items,
            translateX: [-15, 0],
            opacity: [0, 1],
            scale: [0.96, 1],
            delay: anime.stagger(25),
            duration: 550,
            easing: 'easeOutElastic(1.1, 0.72)'
          });
        }
      }
    }
    
    prevSelectedLevel.current = selectedLevel;
  }, [selectedLevel]);

  const stats = useMemo(() => {
    const progressMap = ProgressRepository.getProgressMap();
    const progressItems = Object.values(progressMap);
    const completedChapters = progressItems.filter(p => p.is_completed).length;
    const completionPercentage = chapters.length > 0 
      ? Math.round((completedChapters / chapters.length) * 100) 
      : 0;

    let balkanWordsMastered = 0;
    progressItems.forEach(p => {
      if (p.is_completed) {
        const vocab = ChapterRepository.getVocabularyForChapter(p.chapter_id);
        balkanWordsMastered += vocab.filter(v => v.is_shared_balkan_word === 1).length;
      }
    });

    return {
      completionPercentage,
      balkanWordsMastered,
      completedChapters
    };
  }, [chapters]);

  const getChapterStatus = (chapterId: number) => {
    const progress = ProgressRepository.getChapterProgress(chapterId);
    if (!progress) {
      return { 
        label: 'E paprekur', 
        style: 'text-[#636B74] bg-white dark:bg-transparent border-[#DDE1E5] dark:border-neutral-800' 
      };
    }
    if (progress.is_completed) {
      return { 
        label: 'E Përfunduar', 
        style: 'text-[#2D4A36] bg-[#2D4A36]/10 border-[#2D4A36]/30' 
      };
    }
    return { 
      label: 'Në Zhvillim', 
      style: 'text-[#636B74] bg-neutral-100 dark:bg-neutral-800/50 border-[#DDE1E5] dark:border-neutral-800' 
    };
  };

  const isA2Completed = () => {
    const a2Chapters = levels['A2'] || [];
    if (a2Chapters.length === 0) return false;
    return a2Chapters.every(ch => {
      const progress = ProgressRepository.getChapterProgress(ch.id);
      return progress?.is_completed === true;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 relative min-h-[70vh]">
      
      {/* Giant Background Typography Watermark */}
      <div className="curriculum-watermark opacity-15 select-none">
        STUDIO
      </div>

      <div className="z-10 relative space-y-12">
        {/* Typographic Welcome Header */}
        <div className="text-left border-b border-[#DDE1E5] dark:border-neutral-800 pb-8 hero-banner-anim">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 border border-[#111315] dark:border-neutral-800 bg-[#111315] dark:bg-neutral-900 text-[#FBFBF9] select-none">
                Ura e Gjuhës v1.0 Offline
              </span>
              <div className="flex items-center gap-1 border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 rounded-lg select-none">
                <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
                <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400 font-mono">1 ditë</span>
              </div>
            </div>
            {userName && (
              <div className="flex items-center gap-2 select-none border border-[var(--color-border-primary-glass)] bg-[var(--color-bg-surface-glass)] px-2.5 py-1 rounded-full shadow-xs">
                <div className="w-4.5 h-4.5 rounded-full bg-[var(--color-brand-accent)] text-white text-[9px] font-black flex items-center justify-center">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-[10px] font-bold text-[var(--color-text-secondary)]">
                  {userName}
                </span>
              </div>
            )}
          </div>

          {/* Visual Hero Banner */}
          <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative border border-[#DDE1E5] dark:border-neutral-800 shadow-sm bg-stone-950">
            <img 
              src="/ura_dashboard_hero.png" 
              alt="Ura e Gjuhës Hero" 
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase font-sans leading-none">
                  UDHËTIMI I DIJES SATE
                </h1>
                <p className="text-xs text-neutral-300 mt-1.5 max-w-lg font-normal">
                  Lidhja kulturore dhe gjuhësore mes Shqipërisë dhe Turqisë. Zgjidh kapitullin ku dëshiron të përqendrohesh sot.
                </p>
              </div>
            </div>
          </div>

          {/* Frosted Stats Pedestal Row */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass-panel p-4 flex flex-col justify-between select-none relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 stat-card-anim">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Mësimi</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-[var(--color-text-primary)]">{stats.completionPercentage}%</span>
              </div>
              <p className="text-[9px] text-[var(--color-text-secondary)] font-light mt-1">
                {stats.completedChapters}/{chapters.length} kapituj kryer
              </p>
            </div>

            <div className="glass-panel p-4 flex flex-col justify-between select-none relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 stat-card-anim">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Cognates</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-[var(--color-text-primary)]">{stats.balkanWordsMastered}</span>
                <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase">Fjalë</span>
              </div>
              <p className="text-[9px] text-[var(--color-text-secondary)] font-light mt-1">
                Huazime të përbashkëta
              </p>
            </div>

            <div className="glass-panel p-4 flex flex-col justify-between select-none relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 stat-card-anim">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M12 2a6 6 0 0 1 6 6v5H6V8a6 6 0 0 1 6-6z" />
                </svg>
                <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Synimi</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-[var(--color-text-primary)]">{activeLevelKey}</span>
              </div>
              <p className="text-[9px] text-[var(--color-text-secondary)] font-light mt-1">
                Niveli aktual aktiv
              </p>
            </div>
          </div>
        </div>

        {/* Curved learning path roadmap container */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#636B74] uppercase select-none mb-6">
            Rruga e Ndërtimit të Urave (Learning Path)
          </h2>
          
          <div className="relative border-l-2 border-dashed border-[#DDE1E5] dark:border-neutral-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-8 py-2 levels-perspective">
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => {
              const syllabus = levelSyllabus[level];
              const { completed, total, percentage } = getLevelProgress(level);
              
              const isActive = level === activeLevelKey;
              const isCompleted = percentage === 100;
              const isCurrentExpanded = selectedLevel === level;
              const locked = (levels[level] || []).length === 0;
              
              const offsets = [
                'stagger-step-0',
                'stagger-step-1',
                'stagger-step-2',
                'stagger-step-3',
                'stagger-step-4',
                'stagger-step-5'
              ];
              const offsetClass = offsets[index];

              const nodeColor = isCompleted 
                ? 'bg-[var(--color-brand-success)] border-[var(--color-brand-success)]' 
                : isActive 
                  ? 'bg-[var(--color-brand-accent)] border-[var(--color-brand-accent)] animate-pulse' 
                  : 'bg-[var(--color-bg-surface)] border-[var(--color-border-primary)]';

              return (
                <div key={level} className="relative">
                  
                  {/* The timeline node dot */}
                  <div className={`absolute w-3.5 h-3.5 rounded-full border-2 -left-[31px] md:-left-[49px] top-6 z-20 ${nodeColor}`} />

                  {/* Staggered container wrapper */}
                  <div className={`transition-all duration-500 transform ${offsetClass}`}>
                    <div className="stagger-connector" />

                    <article
                      id={`card-${level}`}
                      ref={(el) => { cardRefs.current[level] = el; }}
                      className={`level-card level-card-anim dashboard-card-transition w-full text-left relative overflow-hidden ${
                        locked ? 'locked' : ''
                      } ${
                        isCurrentExpanded 
                          ? 'active-glow border-2 border-[var(--color-brand-accent)] shadow-elevated' 
                          : isCompleted 
                            ? 'border border-[var(--color-brand-success)]/30 shadow-xs hover:shadow-md' 
                            : 'border border-[var(--color-border-primary-glass)] bg-[var(--color-bg-surface-glass)]/35 shadow-xs hover:shadow-md'
                      }`}
                      style={{ '--glow-color': `var(--lv-${level.toLowerCase()})` } as React.CSSProperties}
                    >
                      <div className="border-glow"></div>
                      <div className="lv-stripe" style={{ background: `var(--lv-${level.toLowerCase()})` }} aria-hidden="true"></div>
                      <div className="lv-watermark" aria-hidden="true">{level}</div>

                      {/* Clickable Header Info block */}
                      <div
                        role="button"
                        tabIndex={locked ? -1 : 0}
                        onClick={() => {
                          if (!locked) {
                            setSelectedLevel(isCurrentExpanded ? null : level);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (!locked && (e.key === 'Enter' || e.key === ' ')) {
                            e.preventDefault();
                            setSelectedLevel(isCurrentExpanded ? null : level);
                          }
                        }}
                        className="level-inner p-5 cursor-pointer select-none"
                      >
                        <div className="flex justify-between items-center flex-wrap gap-2 w-full">
                          <span className={`font-mono font-bold tracking-wider text-[var(--color-text-primary)] uppercase flex items-center gap-2 transition-all duration-300 ${
                            isCurrentExpanded ? 'text-sm' : 'text-xs'
                          }`}>
                            <UraIcon className={`transition-all duration-300 ${
                              isCurrentExpanded 
                                ? 'w-4 h-4 text-[var(--color-brand-accent)]' 
                                : isCompleted 
                                  ? 'w-3.5 h-3.5 text-[var(--color-brand-success)]' 
                                  : 'w-3.5 h-3.5 text-[var(--color-text-secondary)] opacity-50'
                            }`} />
                            {syllabus.index}. NIVELI {level} — {syllabus.desc}
                          </span>
                          {isCurrentExpanded ? (
                            <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-bold bg-[var(--color-brand-accent)] text-white select-none rounded-lg">
                              [ MBYLL ]
                            </span>
                          ) : isCompleted ? (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-[var(--color-brand-success)]/40 text-[var(--color-brand-success)] bg-[var(--color-brand-success-light)] select-none rounded-lg">
                              [ PËRFUNDUAR ]
                            </span>
                          ) : locked ? (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-[var(--color-border-primary-glass)] text-[var(--color-text-secondary)] bg-neutral-100/50 dark:bg-stone-900/40 select-none rounded-lg">
                              [ I mbyllur ]
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-[var(--color-brand-accent)]/40 text-[var(--color-brand-accent)] bg-[var(--color-brand-accent-light)] select-none rounded-lg">
                              [ SHFAQ ]
                            </span>
                          )}
                        </div>

                        <div className="mt-4">
                          <p className="text-xs md:text-sm text-[var(--color-text-primary)] opacity-90 leading-relaxed mb-4">
                            {syllabus.preview}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {syllabus.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border text-[var(--color-brand-accent)] border-[var(--color-brand-accent)]/20 bg-[var(--color-brand-accent-light)] select-none"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {!locked && (
                            <div className="space-y-2 mt-auto w-full pt-2">
                              <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-text-secondary)] font-semibold select-none">
                                <span>Përparimi: {completed} nga {total} mësime të përfunduara</span>
                                <span className="font-bold text-[var(--color-text-primary)]">{percentage}%</span>
                              </div>
                              <div className="w-full bg-neutral-200/50 dark:bg-stone-900/60 h-1.5 rounded-full overflow-hidden relative border border-neutral-200/20 dark:border-neutral-800/30 mt-1">
                                <div 
                                  className="bg-gradient-to-r from-teal-500 to-[var(--color-brand-accent)] h-full rounded-full transition-all duration-500"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Collapsible Accordion Chapters Grid */}
                      {!locked && (
                        <div
                          id={`chapters-${level}`}
                          ref={(el) => { containerRefs.current[level] = el; }}
                          className={`chapters-wrap px-6 pb-6 ${isCurrentExpanded ? 'open' : ''}`}
                        >
                          <hr className="border-[var(--color-border-primary-glass)] mb-4 w-full" />
                          <div className="chapters-grid">
                            {(levels[level] || []).map((ch) => {
                              const status = getChapterStatus(ch.id);
                              return (
                                <button
                                  key={ch.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    loadChapter(ch.id);
                                  }}
                                  className="ch-item"
                                  aria-label={`Mësimi ${ch.order_index}: ${ch.title_turkish} — ${status.label}`}
                                >
                                  <div className="ch-body">
                                    <div className="ch-num">Mësimi {ch.order_index}</div>
                                    <div className="ch-title">{ch.title_turkish}</div>
                                    <div className="ch-sub">{ch.title_albanian}</div>
                                  </div>
                                  <div className={`ch-badge ${status.label === 'E Përfunduar' ? 'ch-done' : 'ch-pending'}`}>
                                    {status.label === 'E Përfunduar' ? '✓' : `K${ch.order_index}`}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* A2 Finishing Test rendering */}
                          {level === 'A2' && (
                            <div className="mt-8 border-t border-[var(--color-border-primary-glass)] pt-6">
                              {(() => {
                                const completedAll = isA2Completed();
                                const hasPassed = localStorage.getItem('ura_a2_test_passed') === 'true';
                                const testScore = localStorage.getItem('ura_a2_test_score');

                                return (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActivePage('a2_test');
                                    }}
                                    className="w-full text-left p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 relative outline-hidden border bg-gradient-to-r from-amber-500/10 to-[#3A5A40]/10 border-[#3A5A40]/30 hover:border-[#3A5A40] cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5"
                                  >
                                    <div className="flex-1 space-y-2">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 bg-amber-500 text-white rounded-lg select-none">
                                          PROVIMI PËRFUNDIMTAR A2
                                        </span>
                                        {!completedAll && (
                                          <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-amber-500/30 text-amber-700 bg-amber-50 select-none rounded-lg">
                                            [ HAPUR PËR TESTIM ]
                                          </span>
                                        )}
                                        {completedAll && !hasPassed && (
                                          <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-[#3A5A40]/40 text-[#3A5A40] bg-white select-none rounded-lg">
                                            [ E Zhbllokuar ]
                                          </span>
                                        )}
                                        {hasPassed && (
                                          <span className="text-[9px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border border-emerald-500/40 text-emerald-700 bg-emerald-50 select-none rounded-lg">
                                            [ PËRFUNDUAR — {testScore}% ]
                                          </span>
                                        )}
                                      </div>

                                      <h3 className="text-base font-black text-[#111315] dark:text-white uppercase tracking-tight">
                                        Provimi Gjithëpërfshirës i Nivelit A2
                                      </h3>
                                      <p className="text-xs text-[#636B74] dark:text-neutral-400 font-light leading-relaxed max-w-xl">
                                        {completedAll
                                          ? 'Ju keni përfunduar të gjithë kapitujt e nivelit A2! Testoni njohuritë tuaja leximore, gramatikore, sintaksore dhe të përkthimit në këtë provim përfundimtar me 25 pyetje.'
                                          : 'Kapitujt e nivelit A2 nuk janë përfunduar plotësisht, por ju mund të hyni në provim për të testuar njohuritë tuaja në çdo kohë.'}
                                      </p>
                                    </div>

                                    <div className="flex items-center gap-3 shrink-0">
                                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-[#3A5A40] text-white flex items-center justify-center rounded-2xl shadow-md animate-pulse">
                                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                          <path d="M4 22h16" />
                                          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                                          <path d="M12 2a6 6 0 0 1 6 6v5H6V8a6 6 0 0 1 6-6z" />
                                        </svg>
                                      </div>
                                    </div>
                                  </button>
                                );
                              })()}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Footer Info */}
        <div className="border-t border-[#DDE1E5] dark:border-neutral-800 pt-8 text-center select-none text-[10px] text-[#636B74] font-light leading-relaxed">
          <p>Programi është optimizuar plotësisht për përpunim lokal, pa server.</p>
        </div>
      </div>
    </div>
  );
};
