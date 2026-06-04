import React, { useEffect, useState } from 'react';
import { Logo } from '../common/Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

/**
 * Premium 3-Second Animated Welcoming Splash Screen for Ura e Gjuhës.
 * Bootstraps on page load/reload, presenting the 3D brand logo, typographic subtitle,
 * and a smooth gradient horizontal loading progress line.
 */
export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    // Fill the progress bar over 2.7 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Trigger visual fade-out 300ms before completion
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2700);

    // End splash lifecycle at 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-grid-pattern bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ zIndex: 99999 }}
    >
      {/* Dynamic volumetric background glow orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-teal-500/5 blur-3xl -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 rounded-full bg-amber-500/5 blur-3xl -bottom-10 -right-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="flex flex-col items-center space-y-6 animate-fade-in select-none text-center">
        {/* Brand Crest 3D Icon container */}
        <div className="relative p-4 rounded-3xl bg-[var(--color-bg-surface-glass)] border border-white/10 dark:border-stone-800/30 shadow-elevated transform scale-95 animate-[pulse_3s_infinite] flex items-center justify-center w-24 h-24">
          <Logo size={68} />
        </div>

        {/* Branding Typography */}
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold uppercase tracking-widest text-[var(--color-text-primary)] font-display">
            Ura e Gjuhës
          </h1>
          <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.2em] block">
            Offline Language Portal
          </span>
        </div>

        {/* Premium horizontal progress track loader */}
        <div className="w-48 bg-neutral-200 dark:bg-stone-800/50 h-1 rounded-full overflow-hidden relative border border-neutral-200/10 dark:border-neutral-700/20">
          <div
            className="bg-gradient-to-r from-teal-500 to-[var(--color-brand-accent)] h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
