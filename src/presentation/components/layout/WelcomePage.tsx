import React, { useState, useRef } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

export const WelcomePage: React.FC = () => {
  const { completeWelcome, theme, toggleTheme } = useLesson();
  const [nameInput, setNameInput] = useState<string>('');
  
  // Wizard steps: 'name' | 'quiz' | 'success'
  const [step, setStep] = useState<'name' | 'quiz' | 'success'>('name');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) {
      alert('Ju lutemi shkruani emrin tuaj për të filluar!');
      return;
    }
    setStep('quiz');
  };

  const handleOptionSelect = (idx: number) => {
    setSelectedOption(idx);
    setStep('success');
    
    // Trigger canvas confetti explosion
    setTimeout(() => triggerConfetti(), 50);
  };

  const handleFinalSubmit = () => {
    completeWelcome(nameInput);
  };

  // High-performance canvas confetti generator
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#3A5A40', '#A3B18A', '#0D9488', '#3B82F6', '#D97706', '#E11D48'];
    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      let remaining = false;
      particles.forEach((p) => {
        if (p.y <= canvas.height) {
          remaining = true;
        }
      });

      if (remaining) {
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    draw();
  };

  React.useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const quizOptions = [
    { text: 'Xham 🖼️', id: 0 },
    { text: 'Dollap 🚪', id: 1 },
    { text: 'Kuti 📦', id: 2 },
    { text: 'Të gjitha këto 🤝', id: 3 }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid-pattern bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] px-6 py-12 relative overflow-hidden select-none">
      
      {/* HTML5 Canvas for Confetti */}
      {step === 'success' && (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 w-full h-full" />
      )}

      {/* Giant Background Typographic Watermark */}
      <div className="curriculum-watermark opacity-25">
        A1 ➔ C2
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center z-10 animate-fade-in">
        
        {/* Onboarding Form Column (Left side) */}
        <div className="md:col-span-6 flex flex-col justify-between min-h-[550px] space-y-8">
          
          {/* A. Top Bar */}
          <div className="flex justify-between items-center w-full border-b border-[var(--color-border-primary)] pb-3">
            <span className="text-xs font-bold tracking-widest text-[var(--color-text-primary)] font-technical">
              [AL-TR]
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-7 h-7 rounded-md border border-[var(--color-border-primary-glass)] bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)]/30 flex items-center justify-center text-xs font-bold transition duration-200 cursor-pointer shadow-xs"
                title="Ndrysho Temën"
              >
                {theme === 'dark' ? (
                  <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93L6.34 6.34" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M6.34 17.66l-1.41 1.41" />
                    <path d="M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[var(--color-text-secondary)] font-technical">
                v1.0 Offline
              </span>
            </div>
          </div>

          {/* B. Wizard Steps rendering dynamically */}
          {step === 'name' && (
            /* STEP 1: Name Onboarding Input */
            <div className="space-y-8 animate-fade-in flex-grow flex flex-col justify-center">
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight font-sans text-[var(--color-text-primary)]">
                    Mëso Turqisht
                    <span className="block text-[var(--color-text-secondary)] opacity-80">Nga Shqipja.</span>
                  </h1>
                  <div className="space-y-1 text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                    <p>Në çdo kohë.</p>
                    <p>Plotësisht offline.</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] text-xs font-medium text-[var(--color-text-primary)] rounded-xl tracking-wide shadow-xs">
                  <span className="text-[var(--color-brand-accent)] font-bold">[I]</span> GJUHË E PASHKËPUTUR
                </div>
              </div>

              <form onSubmit={handleNameSubmit} className="space-y-6 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-primary)] block">
                    Si quheni?
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value.replace(/[^a-zA-ZëËçÇğĞıİöÖşŞüÜ\s]/g, ''))}
                    placeholder="Shkruani emrin tuaj..."
                    maxLength={15}
                    className="w-full rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-neutral-400 focus:border-[var(--color-brand-accent)] focus:outline-none font-technical tracking-wide shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-md"
                >
                  Vazhdo ➔
                </button>
              </form>
            </div>
          )}

          {step === 'quiz' && (
            /* STEP 2: Instant Curiosity Quiz Selection */
            <div className="space-y-8 animate-fade-in flex-grow flex flex-col justify-center">
              <div className="text-left space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-brand-accent)]">
                  Provë e Shpejtë (Trivia Koha)
                </span>
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] font-display uppercase tracking-tight leading-none">
                  Mirë se vjen, {nameInput}!
                </h2>
                <p className="text-xs text-[var(--color-text-secondary)] font-light leading-relaxed max-w-md">
                  Përpara se të hyni në portalin kryesor, keni një pyetje të shpejtë për të provuar njohuritë tuaja:
                </p>
              </div>

              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-primary)] rounded-2xl p-5 text-left space-y-4 shadow-sm">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Cila nga këto fjalë shqipe mendoni se ka origjinë nga gjuha turke?
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {quizOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionSelect(opt.id)}
                      className="p-3.5 border border-[var(--color-border-primary)] bg-[var(--color-bg-surface)] text-xs text-left font-bold text-[var(--color-text-primary)] rounded-xl hover:border-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-light)] transition duration-150 cursor-pointer shadow-xs active:scale-95"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'success' && (
            /* STEP 3: Quiz Victory Success message */
            <div className="space-y-8 animate-fade-in flex-grow flex flex-col justify-center">
              <div className="text-left space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                  Rezultati i Provës
                </span>
                <h2 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 font-display uppercase tracking-tight leading-none font-sans">
                  {selectedOption === 3 ? 'Keni 100% të Drejtë! 🎉' : 'Saktë! Dhe jo vetëm... 🎉'}
                </h2>
              </div>

              <div className="bg-emerald-50/10 dark:bg-emerald-950/10 border-l-4 border-emerald-500 rounded-r-2xl p-5 text-left space-y-3 shadow-xs">
                <p className="text-xs text-[var(--color-text-primary)] leading-relaxed font-light">
                  {selectedOption === 3 ? (
                    <strong>Të gjitha këto fjalë (Xham, Dollap, Kuti) janë huazime të përbashkëta Ballkanike që vijnë nga turqishtja!</strong>
                  ) : (
                    <span>
                      Fjala që zgjodhët është me origjinë turke. Por a e dinit se <strong>të tria fjalët e listuara</strong> janë po ashtu huazime të përbashkëta?
                    </span>
                  )}
                  {" "}Në shqip përdoren qindra fjalë të tilla. Ju tashmë kuptoni një pjesë të madhe të fjalorit turqisht pa e filluar ende kursin!
                </p>
                <div className="bg-white/80 dark:bg-neutral-900/60 p-2.5 rounded-xl border border-emerald-500/10 font-mono text-[10px] text-emerald-850 dark:text-emerald-400 font-semibold text-center select-text">
                  xham ➔ cam &nbsp;|&nbsp; dollap ➔ dolap &nbsp;|&nbsp; kuti ➔ kutu
                </div>
              </div>

              <button
                onClick={handleFinalSubmit}
                className="w-full py-4 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-md"
              >
                Fillo Mësimin ➔
              </button>
            </div>
          )}

          {/* D. Hairline Divider & Semantic Meta-Points */}
          <div className="space-y-4 pt-4 border-t border-[var(--color-border-primary)] text-left">
            <div className="space-y-2.5 text-xs text-[var(--color-text-secondary)] font-light">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-brand-accent)] font-bold">[✓]</span> 
                <span>Kurrikula e plotë A1 - C2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-brand-accent)] font-bold">[✓]</span> 
                <span>Strukturuar për folësit shqiptarë</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-brand-accent)] font-bold">[✓]</span> 
                <span>100% Privatësi e të dhënave vendase</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Visual Hero Column (Right side) - Unmodified / Skipped */}
        <div className="hidden md:flex md:col-span-6 flex-col items-center justify-center relative min-h-[500px]">
          <div className="absolute w-72 h-72 rounded-full bg-teal-500/10 blur-3xl -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-3xl -bottom-10 -right-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="glass-panel p-8 w-full max-w-md flex flex-col items-center relative z-10 shadow-elevated border border-white/20 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-6 bg-stone-900/5 dark:bg-stone-900/25 flex items-center justify-center p-4">
              <img 
                src="/welcome_hero.png" 
                alt="Ura Language Portal Bridge Graphic" 
                className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
              />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-[var(--color-text-primary)] font-display">
                Ura e Gjuhës
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] font-light max-w-xs mx-auto leading-relaxed">
                Një urë lidhëse kulturore dhe gjuhësore ndërmjet shqipes dhe turqishtes. Mëso lehtësisht me motorin gramatikor offline.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
