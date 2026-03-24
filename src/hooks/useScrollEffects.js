import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function initScrollAndAnimations() {
  // Destroy old instance
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  ScrollTrigger.getAll().forEach(t => t.kill());

  // New Lenis instance
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  lenisInstance = lenis;

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Fade-in animations
  gsap.utils.toArray('.gsap-fade-in').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 1,
      visibility: 'visible',
      duration: 1.4,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray('.gsap-slide-up').forEach(el => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0, visibility: 'hidden' },
      {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        y: 0,
        opacity: 1,
        visibility: 'visible',
        duration: 1.2,
        ease: 'power2.out',
      }
    );
  });
}

export function useScrollEffects() {
  const location = useLocation();

  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Stop and scroll to top immediately (before any timeout)
    if (lenisInstance) {
      lenisInstance.stop();
      lenisInstance.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    
    // Small delay so DOM is painted before initialising Lenis
    const id = setTimeout(() => {
      initScrollAndAnimations();
      
      // Ensure new instance also starts at 0
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    }, 50); // Reduced delay for faster reset

    return () => {
      clearTimeout(id);
      if (lenisInstance) {
        lenisInstance.stop(); // Stop before destroying
        lenisInstance.destroy();
        lenisInstance = null;
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location.pathname]);
}
