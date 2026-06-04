import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Audio player hook that implements a hybrid text-to-speech engine:
 * 1. Prioritizes premium natural online pronunciation (Google Translate TTS via tw-ob client).
 * 2. Falls back to secondary online pronunciation (Youdao DictVoice API) on failure.
 * 3. Falls back to native offline-first Web Speech Synthesis when offline or if online APIs fail.
 */
export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  
  // Keep reference to speechSynthesis
  const synthRef = useRef<SpeechSynthesis | null>(
    typeof window !== 'undefined' ? window.speechSynthesis : null
  );

  // Reference to track active Audio element if playing online
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  // Dynamically load system voices when they change (asynchronous population)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const getBestSystemVoice = useCallback((lang: 'tr' | 'al' = 'tr'): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;
    
    if (lang === 'tr') {
      const trVoices = voices.filter(v => v.lang.toLowerCase().replace('_', '-').startsWith('tr'));
      if (trVoices.length === 0) return null;
      
      const premium = trVoices.find(v => 
        v.name.toLowerCase().includes('natural') || 
        v.name.toLowerCase().includes('online') ||
        v.name.toLowerCase().includes('google') ||
        v.name.toLowerCase().includes('premium')
      );
      if (premium) return premium;

      const microsoft = trVoices.find(v => v.name.toLowerCase().includes('microsoft'));
      if (microsoft) return microsoft;

      return trVoices[0];
    } else {
      const alVoices = voices.filter(v => 
        v.lang.toLowerCase().replace('_', '-').startsWith('sq') || 
        v.lang.toLowerCase().startsWith('al')
      );
      if (alVoices.length === 0) return null;
      return alVoices[0];
    }
  }, [voices]);

  const stop = useCallback(() => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
    }
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlaying(false);
    setCurrentSrc(null);
  }, []);

  // System Text-to-Speech fallback
  const playSystemSpeech = useCallback((text: string, lang: 'tr' | 'al', onEndCallback?: () => void) => {
    if (!synthRef.current) {
      if (onEndCallback) onEndCallback();
      return;
    }

    synthRef.current.cancel();
    setIsPlaying(true);
    setCurrentSrc(text);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'tr' ? 'tr-TR' : 'sq-AL';

    const voice = getBestSystemVoice(lang);
    if (voice) {
      utterance.voice = voice;
      console.log(`[Audio Play] Duke përdorur zërin e sistemit: ${voice.name}`);
    } else {
      console.log(`[Audio Play] Nuk u gjet asnjë zë specifik, duke përdorur zërin e paracaktuar.`);
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentSrc(null);
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setCurrentSrc(null);
      if (onEndCallback) onEndCallback();
    };

    synthRef.current.speak(utterance);
  }, [getBestSystemVoice]);

  // Hybrid player: Google TTS primary, Youdao TTS secondary, System Speech tertiary
  const playText = useCallback((text: string, lang: 'tr' | 'al' = 'tr', onEndCallback?: () => void) => {
    stop(); // stop any active audio first

    if (typeof navigator !== 'undefined' && navigator.onLine) {
      setIsPlaying(true);
      setCurrentSrc(text);

      const playWithGoogle = () => {
        const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang === 'tr' ? 'tr' : 'sq'}&client=tw-ob&q=${encodeURIComponent(text)}`;
        const audio = new Audio(googleUrl);
        activeAudioRef.current = audio;

        audio.onended = () => {
          setIsPlaying(false);
          setCurrentSrc(null);
          activeAudioRef.current = null;
          if (onEndCallback) onEndCallback();
        };

        audio.onerror = () => {
          console.log("[Audio Hybrid] Dështoi Google TTS online, duke provuar Youdao TTS...");
          playWithYoudao();
        };

        audio.play().catch(() => {
          console.log("[Audio Hybrid] Dështoi luajtja e Google TTS, duke provuar Youdao TTS...");
          playWithYoudao();
        });
      };

      const playWithYoudao = () => {
        const leCode = lang === 'tr' ? 'tr' : 'eng';
        const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=${leCode}`;
        const audio = new Audio(youdaoUrl);
        activeAudioRef.current = audio;

        audio.onended = () => {
          setIsPlaying(false);
          setCurrentSrc(null);
          activeAudioRef.current = null;
          if (onEndCallback) onEndCallback();
        };

        audio.onerror = () => {
          console.log("[Audio Hybrid] Dështoi Youdao TTS online, duke kaluar te zëri i sistemit...");
          playSystemSpeech(text, lang, onEndCallback);
        };

        audio.play().catch(() => {
          console.log("[Audio Hybrid] Dështoi luajtja e Youdao TTS, duke kaluar te zëri i sistemit...");
          playSystemSpeech(text, lang, onEndCallback);
        });
      };

      playWithGoogle();
    } else {
      // Offline fallback
      playSystemSpeech(text, lang, onEndCallback);
    }
  }, [stop, playSystemSpeech]);

  const playDialogue = useCallback((lines: Array<{ speaker: string; text: string }>) => {
    stop();
    setIsPlaying(true);
    setCurrentSrc('dialogue');

    let index = 0;
    let active = true;

    const originalStop = stop;

    const speakNextLine = () => {
      if (!active) return;
      if (index >= lines.length) {
        setIsPlaying(false);
        setCurrentSrc(null);
        return;
      }

      const currentLine = lines[index];
      
      playText(currentLine.text, 'tr', () => {
        index++;
        // Short pause between dialogues for natural flow
        setTimeout(speakNextLine, 800);
      });
    };

    speakNextLine();

    // Return clean stop override
    return () => {
      active = false;
      originalStop();
    };
  }, [stop, playText]);

  // Backwards compatibility/hybrid loader with the play(src) signature
  const play = useCallback((src: string, textFallback?: string) => {
    console.log(`[Audio Play] Trigeruar skedari: ${src}`);
    stop();

    const fallbackWord = textFallback || src.split('/').pop()?.split('.')[0]?.replace(/^(vocab_|chapter\d+_|audio_)/, '').replace(/_/g, ' ') || '';

    setIsPlaying(true);
    setCurrentSrc(fallbackWord);

    const audio = new Audio(src);
    activeAudioRef.current = audio;

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentSrc(null);
      activeAudioRef.current = null;
    };

    audio.onerror = () => {
      console.log(`[Audio Play] Asset not found at ${src}, playing fallback TTS...`);
      activeAudioRef.current = null;
      playText(fallbackWord, 'tr');
    };

    audio.play().catch((err) => {
      if (activeAudioRef.current === audio) {
        console.log(`[Audio Play] play() promise rejected for ${src}, playing fallback TTS...`, err);
        activeAudioRef.current = null;
        playText(fallbackWord, 'tr');
      }
    });
  }, [stop, playText]);

  return {
    isPlaying,
    currentSrc,
    play,
    playText,
    playDialogue,
    stop
  };
}
