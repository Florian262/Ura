import { useState } from 'react';

/**
 * Architectural non-functional audio player hook.
 * Fully integrates layout triggers and state monitors, loading
 * stubs so that the build is ready for simple audio file integration in the future.
 */
export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  const play = (src: string) => {
    setCurrentSrc(src);
    setIsPlaying(true);
    // Console log to satisfy structural requirements in specifications
    console.log(`[Audio Stub] Duke hapur skedarin e zërit: ${src}`);
    
    // Simulate audio ending or playing
    alert(`[Audio Stub] Luajtja e dëgjimit (Asset: ${src}). Metodat e dëgjimit janë gati për integrim me fajllat e vërtetë në versionin e ardhshëm offline!`);
    
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  const stop = () => {
    setIsPlaying(false);
    console.log('[Audio Stub] Dëgjimi u ndalua.');
  };

  return {
    isPlaying,
    currentSrc,
    play,
    stop
  };
}
