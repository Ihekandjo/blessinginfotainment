import { useCallback } from 'react';

export function useScrollTo(offset = 80) {
  return useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const bodyTop = document.body.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;
      const target = elementTop - bodyTop - offset;
      window.scrollTo({ top: target, behavior: 'smooth' });
    },
    [offset],
  );
}
