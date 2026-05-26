import Lenis from 'lenis';
import { gsap } from 'gsap';

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time: number) {
    lenis.raf(time * 1000);
  }

  gsap.ticker.add(raf);

  return lenis;
};
