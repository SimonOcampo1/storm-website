// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical', 
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// RAF for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Setup GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

document.addEventListener('DOMContentLoaded', () => {
    // Basic GSAP Animations on Load
    gsap.from("nav", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.from("h1", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out"
    });
    
    // Fade in elements marked with .gsap-fade-in
    gsap.utils.toArray('.gsap-fade-in').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Parallax effect for background images
    gsap.utils.toArray('.parallax-bg').forEach(bg => {
        gsap.to(bg, {
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            y: "20%",
            ease: "none"
        });
    });
});
