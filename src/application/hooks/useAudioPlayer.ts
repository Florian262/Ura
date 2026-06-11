import { useState, useCallback, useRef, useEffect } from 'react';

const splitIntoSentences = (text: string): string[] => {
  return text
    .split(/([.!?])/)
    .reduce((acc: string[], val: string, idx: number) => {
      if (idx % 2 === 0) {
        if (val.trim()) {
          acc.push(val.trim());
        }
      } else {
        if (acc.length > 0) {
          acc[acc.length - 1] += val;
        }
      }
      return acc;
    }, []);
};

/**
 * Audio player hook that implements a hybrid text-to-speech engine:
 * 1. Prioritizes premium natural online pronunciation (Google Translate TTS via tw-ob client).
 * 2. Falls back to secondary online pronunciation (Youdao DictVoice API) on failure.
 * 3. Falls back to native offline-first Web Speech Synthesis when offline or if online APIs fail.
 */
export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  
  // Keep reference to speechSynthesis
  const synthRef = useRef<SpeechSynthesis | null>(
    typeof window !== 'undefined' ? window.speechSynthesis : null
  );

  // Reference to track active Audio element if playing online
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  // Reference to abort dialogue loop safely
  const isDialoguePlayingRef = useRef<boolean>(false);

  // Reference to abort text loop safely
  const isTextPlayingRef = useRef<boolean>(false);

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
    isDialoguePlayingRef.current = false;
    isTextPlayingRef.current = false;
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
    }
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlaying(false);
    setCurrentSrc(null);
    setActiveDialogueIndex(null);
  }, []);

  // System speech internal helper that does not reset state hooks
  const playSystemSpeechInternal = useCallback((text: string, lang: 'tr' | 'al', onEndCallback?: () => void, rate: number = 1.0) => {
    if (!synthRef.current) {
      if (onEndCallback) onEndCallback();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'tr' ? 'tr-TR' : 'sq-AL';
    utterance.rate = rate;
    const voice = getBestSystemVoice(lang);
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      if (onEndCallback) onEndCallback();
    };
    utterance.onerror = () => {
      if (onEndCallback) onEndCallback();
    };
    synthRef.current.speak(utterance);
  }, [getBestSystemVoice]);

  // Play single sentence audio (guaranteed to be short enough for online engines)
  const playSingleSentenceAudio = useCallback((text: string, lang: 'tr' | 'al' = 'tr', onEndCallback?: () => void, rate: number = 1.0) => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
    }
    if (synthRef.current) {
      synthRef.current.cancel();
    }

    if (typeof navigator !== 'undefined' && navigator.onLine) {
      const playWithGoogle = () => {
        const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang === 'tr' ? 'tr' : 'sq'}&client=tw-ob&q=${encodeURIComponent(text)}`;
        const audio = new Audio(googleUrl);
        audio.defaultPlaybackRate = rate;
        audio.playbackRate = rate;
        activeAudioRef.current = audio;

        audio.onended = () => {
          activeAudioRef.current = null;
          if (onEndCallback) onEndCallback();
        };

        audio.onerror = () => {
          playWithYoudao();
        };

        audio.play().catch(() => {
          playWithYoudao();
        });
      };

      const playWithYoudao = () => {
        const leCode = lang === 'tr' ? 'tr' : 'eng';
        const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=${leCode}`;
        const audio = new Audio(youdaoUrl);
        audio.defaultPlaybackRate = rate;
        audio.playbackRate = rate;
        activeAudioRef.current = audio;

        audio.onended = () => {
          activeAudioRef.current = null;
          if (onEndCallback) onEndCallback();
        };

        audio.onerror = () => {
          playSystemSpeechInternal(text, lang, onEndCallback, rate);
        };

        audio.play().catch(() => {
          playSystemSpeechInternal(text, lang, onEndCallback, rate);
        });
      };

      playWithGoogle();
    } else {
      playSystemSpeechInternal(text, lang, onEndCallback, rate);
    }
  }, [playSystemSpeechInternal]);

  // Internal play text helper that does not clear parent loop states
  const playTextInternal = useCallback((text: string, lang: 'tr' | 'al' = 'tr', onEndCallback?: () => void, rate: number = 1.0) => {
    const sentences = splitIntoSentences(text);
    if (sentences.length === 0) {
      if (onEndCallback) onEndCallback();
      return;
    }

    let sentenceIndex = 0;

    const speakNextSentence = () => {
      // Abort if stopped
      if (!isDialoguePlayingRef.current && !isTextPlayingRef.current) return;
      if (sentenceIndex >= sentences.length) {
        if (onEndCallback) onEndCallback();
        return;
      }

      playSingleSentenceAudio(sentences[sentenceIndex], lang, () => {
        sentenceIndex++;
        // Short pause between sentences scaled by speed
        const delay = Math.max(150, 400 / rate);
        setTimeout(speakNextSentence, delay);
      }, rate);
    };

    speakNextSentence();
  }, [playSingleSentenceAudio]);

  // Hybrid player: Google TTS primary, Youdao TTS secondary, System Speech tertiary
  const playText = useCallback((text: string, lang: 'tr' | 'al' = 'tr', onEndCallback?: () => void, rate: number = 1.0) => {
    stop(); // stop any active audio first

    const sentences = splitIntoSentences(text);
    if (sentences.length === 0) {
      if (onEndCallback) onEndCallback();
      return;
    }

    setIsPlaying(true);
    setCurrentSrc(text);
    isTextPlayingRef.current = true;

    playTextInternal(text, lang, () => {
      setIsPlaying(false);
      setCurrentSrc(null);
      isTextPlayingRef.current = false;
      if (onEndCallback) onEndCallback();
    }, rate);
  }, [stop, playTextInternal]);

  const playDialogue = useCallback((lines: Array<{ speaker?: string; text: string }>, rate: number = 1.0) => {
    stop();
    setIsPlaying(true);
    setCurrentSrc('dialogue');
    setActiveDialogueIndex(0);
    isDialoguePlayingRef.current = true;

    let index = 0;

    const speakNextLine = () => {
      if (!isDialoguePlayingRef.current) return;
      if (index >= lines.length) {
        setIsPlaying(false);
        setCurrentSrc(null);
        setActiveDialogueIndex(null);
        isDialoguePlayingRef.current = false;
        return;
      }

      setActiveDialogueIndex(index);
      
      playTextInternal(lines[index].text, 'tr', () => {
        index++;
        // Short pause between dialogues for natural flow scaled by speed
        const delay = Math.max(250, 800 / rate);
        setTimeout(speakNextLine, delay);
      }, rate);
    };

    speakNextLine();

    // Return clean stop override
    return () => {
      isDialoguePlayingRef.current = false;
      stop();
    };
  }, [stop, playTextInternal]);

  // Backwards compatibility/hybrid loader with the play(src) signature
  const play = useCallback((src: string, textFallback?: string, rate: number = 1.0) => {
    console.log(`[Audio Play] Trigeruar skedari: ${src}`);
    stop();

    const fallbackWord = textFallback || src.split('/').pop()?.split('.')[0]?.replace(/^(vocab_|chapter\d+_|audio_)/, '').replace(/_/g, ' ') || '';

    setIsPlaying(true);
    setCurrentSrc(fallbackWord);

    const audio = new Audio(src);
    audio.defaultPlaybackRate = rate;
    audio.playbackRate = rate;
    activeAudioRef.current = audio;

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentSrc(null);
      activeAudioRef.current = null;
    };

    audio.onerror = () => {
      console.log(`[Audio Play] Asset not found at ${src}, playing fallback TTS...`);
      activeAudioRef.current = null;
      playText(fallbackWord, 'tr', undefined, rate);
    };

    audio.play().catch((err) => {
      if (activeAudioRef.current === audio) {
        console.log(`[Audio Play] play() promise rejected for ${src}, playing fallback TTS...`, err);
        activeAudioRef.current = null;
        playText(fallbackWord, 'tr', undefined, rate);
      }
    });
  }, [stop, playText]);

  return {
    isPlaying,
    currentSrc,
    activeDialogueIndex,
    play,
    playText,
    playDialogue,
    stop
  };
}
