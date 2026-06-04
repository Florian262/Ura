import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

export const WelcomePage: React.FC = () => {
  const { completeWelcome, theme, toggleTheme } = useLesson();
  const [nameInput, setNameInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) {
      alert('Ju lutemi shkruani emrin tuaj për të filluar!');
      return;
    }
    completeWelcome(nameInput);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid-pattern bg-[#FAFAFA] text-[#1A1D20] px-6 py-12 relative overflow-hidden select-none">
      
      {/* Giant Background Typographic Watermark (Running vertically behind content) */}
      <div className="curriculum-watermark opacity-25">
        A1 ➔ C2
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center z-10 animate-fade-in">
        
        {/* Onboarding Form Column (Left side on desktop, full width on mobile) */}
        <div className="md:col-span-6 flex flex-col justify-between min-h-[550px] space-y-10">
          {/* A. Top Bar */}
          <div className="flex justify-between items-center w-full border-b border-[#E9ECEF] pb-3">
            <span className="text-xs font-bold tracking-widest text-[#1A1D20] font-technical">
              [AL-TR]
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-7 h-7 rounded-md border border-[var(--color-border-primary-glass)] bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)]/30 flex items-center justify-center text-xs font-bold transition duration-200 cursor-pointer shadow-xs"
                title="Ndrysho Temën"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#565E64] font-technical">
                v1.0 Offline
              </span>
            </div>
          </div>

          {/* B. Main Hero & Subtitles */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight font-sans text-[#1A1D20]">
                Mëso Turqisht
                <span className="block text-[#565E64] opacity-80">Nga Shqipja.</span>
              </h1>
              <div className="space-y-1 text-sm text-[#565E64] font-light leading-relaxed">
                <p>Në çdo kohë.</p>
                <p>Plotësisht offline.</p>
              </div>
            </div>

            {/* Mini Feature Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#E9ECEF] bg-white text-xs font-medium text-[#1A1D20] rounded-xl tracking-wide shadow-xs">
              <span className="text-[#3A5A40] font-bold">[I]</span> GJUHË E PASHKËPUTUR
            </div>
          </div>

          {/* C. Onboarding Form & Sharp CTA Button */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1D20] block">
                Si quheni?
              </label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value.replace(/[^a-zA-ZëËçÇğĞıİöÖşŞüÜ\s]/g, ''))}
                placeholder="Shkruani emrin tuaj..."
                maxLength={15}
                className="w-full rounded-xl border border-[#E9ECEF] bg-white px-4 py-3 text-sm text-[#1A1D20] placeholder-neutral-400 focus:border-[#565E64] focus:outline-none font-technical tracking-wide shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-md"
            >
              Fillo Mësimin
            </button>
          </form>

          {/* D. Hairline Divider & Semantic Meta-Points */}
          <div className="space-y-4 pt-4 border-t border-[#E9ECEF] text-left">
            <div className="space-y-2.5 text-xs text-[#565E64] font-light">
              <div className="flex items-center gap-2">
                <span className="text-[#3A5A40] font-bold">[✓]</span> 
                <span>Kurrikula e plotë A1 - C2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3A5A40] font-bold">[✓]</span> 
                <span>Strukturuar për folësit shqiptarë</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3A5A40] font-bold">[✓]</span> 
                <span>100% Privatësi e të dhënave vendase</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Visual Hero Column (Right side on desktop, hidden or secondary on mobile) */}
        <div className="hidden md:flex md:col-span-6 flex-col items-center justify-center relative min-h-[500px]">
          {/* Volumetric ambient background glow orbs */}
          <div className="absolute w-72 h-72 rounded-full bg-teal-500/10 blur-3xl -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-3xl -bottom-10 -right-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Glassmorphism float pedestal container */}
          <div className="glass-panel p-8 w-full max-w-md flex flex-col items-center relative z-10 shadow-elevated border border-white/20 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-6 bg-stone-900/5 dark:bg-stone-900/25 flex items-center justify-center p-4">
              <img 
                src="/welcome_hero.png" 
                alt="Ura Language Portal Bridge Graphic" 
                className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
              />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-[#1A1D20] font-display">
                Ura e Gjuhës
              </h2>
              <p className="text-xs text-[#565E64] font-light max-w-xs mx-auto leading-relaxed">
                Një urë lidhëse kulturore dhe gjuhësore ndërmjet shqipes dhe turqishtes. Mëso lehtësisht me motorin gramatikor offline.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
