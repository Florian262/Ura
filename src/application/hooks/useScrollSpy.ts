import { useEffect, useState, useRef } from 'react';

/**
 * Custom scroll spy hook using IntersectionObserver.
 * Monitors which scrollable section occupies the viewport and triggers tab active state shifts.
 */
export function useScrollSpy(sectionIds: string[], callback: (id: string) => void) {
  const [activeId, setActiveId] = useState<string>('');
  const isManualScrolling = useRef<boolean>(false);
  const manualScrollTimer = useRef<number | null>(null);

  // Allow temporary suspension of observer when user clicks a tab (smooth scrolling is active)
  const setManualScroll = () => {
    isManualScrolling.current = true;
    if (manualScrollTimer.current) window.clearTimeout(manualScrollTimer.current);
    manualScrollTimer.current = window.setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000); // Resume observing after scroll animation completes
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '-20% 0px -60% 0px', // Focus middle-top of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveId(id);
          callback(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (manualScrollTimer.current) window.clearTimeout(manualScrollTimer.current);
    };
  }, [sectionIds, callback]);

  return { activeId, setManualScroll };
}
