import React, { useEffect, useState } from 'react';
import { Logo } from '../common/Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

// 10 fascinating linguistic facts in Albanian
const SPLASH_FACTS = [
  "Shqipja dhe turqishtja ndajnë mbi 2,000 fjalë të përbashkëta si: kuti, dollap, xham.",
  "Cheat Code: Koha e shkuar turke (-miş) është si Mënyra Habitore shqipe (p.sh. gelmiş -> paska ardhur).",
  "Turqishtja është gjuhë fonetike: çdo shkronjë shqiptohet saktësisht me një tingull.",
  "Në turqisht nuk ka gjini gramatikore. Përemri 'O' përdoret për 'ai' dhe 'ajo'.",
  "Turqishtja nuk ka nyje shquese. Fjala 'bir' (një) përdoret për emra të pashquar.",
  "Prapashtesat turke ndjekin Harmoninë Vokalore sipas zanores së fundit të rrënjës.",
  "Renditja standarde e fjalëve në turqisht është SOV (Kryefjalë - Kundrinor - Folje). Folja shkon në fund!",
  "Fjala turke 'tamam' përdoret gjerësisht në Ballkan për të shprehur dakordësi.",
  "Shumësi në turqisht ndërtohet thjesht me prapashtesën '-lar' ose '-ler'.",
  "Zgjedhimi në turqisht funksionon si lojë 'Lego' duke ngjitur prapashtesa të njëpasnjëshme."
];

/**
 * Premium 5-Second Animated Welcoming Splash Screen for Ura e Gjuhës.
 * Bootstraps on page load/reload, presenting the 3D brand logo, typographic subtitle,
 * and a smooth gradient horizontal loading progress line.
 */
export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [activeFact, setActiveFact] = useState<string>('');

  useEffect(() => {
    // Select a random fact on mount
    const randomIdx = Math.floor(Math.random() * SPLASH_FACTS.length);
    setActiveFact(SPLASH_FACTS[randomIdx]);

    // Fill the progress bar over 4.7 seconds (4700ms)
    // 4700ms / 100 ticks = 47ms per tick
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 47);

    // Trigger visual fade-out 300ms before completion
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 4700);

    // End splash lifecycle at 5 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-grid-visible splash-bg-vignette text-[var(--color-text-primary)] transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ zIndex: 99999 }}
    >
      {/* Dynamic volumetric background glow orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/10 dark:bg-teal-500/8 blur-3xl -top-20 -left-20 animate-float-slow"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/8 dark:bg-amber-500/6 blur-3xl -bottom-20 -right-20 animate-float-reverse"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/6 blur-3xl top-1/3 left-1/3 animate-pulse"></div>

      <div className="flex flex-col items-center space-y-8 animate-fade-in select-none text-center max-w-lg px-6">
        {/* Brand Crest 3D Icon - Frameless Free Float with elastic reveal & custom shadows */}
        <Logo size={128} className="animate-logo-elastic splash-logo-float" />

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

        {/* Dynamic Interesting Fact Glass Pedestal Card */}
        <div className="pt-2">
          <div className="splash-fact-card animate-fade-in">
            <svg
              className="w-5 h-5 text-[var(--color-brand-secondary)] shrink-0 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            <p className="text-[11px] font-medium leading-relaxed text-[var(--color-text-primary)]">
              {activeFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
