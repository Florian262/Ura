import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

export const WelcomePage: React.FC = () => {
  const { completeWelcome } = useLesson();
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
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] text-[#1A1D20] px-4 py-8 relative overflow-hidden select-none">
      
      {/* Giant Background Typographic Watermark (Running vertically behind content) */}
      <div className="curriculum-watermark">
        A1 ➔ C2
      </div>

      <div className="max-w-md w-full flex flex-col justify-between min-h-[580px] z-10 space-y-12 animate-fade-in">
        
        {/* A. Top Bar */}
        <div className="flex justify-between items-center w-full border-b border-[#E9ECEF] pb-3">
          <span className="text-xs font-bold tracking-widest text-[#1A1D20] font-technical">
            [AL-TR]
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#565E64] font-technical">
            v1.0 Offline
          </span>
        </div>

        {/* B. Main Hero & Subtitles */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight font-sans text-[#1A1D20]">
              Mëso Turqisht
              <span className="block text-[#565E64]">Nga Shqipja.</span>
            </h1>
            <div className="space-y-1 text-sm text-[#565E64] font-light leading-relaxed">
              <p>Në çdo kohë.</p>
              <p>Plotësisht offline.</p>
            </div>
          </div>

          {/* Mini Feature Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#E9ECEF] bg-white text-xs font-medium text-[#1A1D20] rounded-none tracking-wide">
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
              onChange={(e) => setNameInput(e.target.value.replace(/[^a-zA-Z]/g, ''))}
              placeholder="Shkruani emrin tuaj këtu..."
              maxLength={15}
              className="w-full rounded-none border border-[#E9ECEF] bg-white px-4 py-3 text-sm text-[#1A1D20] placeholder-neutral-400 focus:border-[#565E64] focus:outline-none font-technical tracking-wide"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-center text-xs font-bold uppercase tracking-widest rounded-none cursor-pointer select-none active-cta"
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
    </div>
  );
};
