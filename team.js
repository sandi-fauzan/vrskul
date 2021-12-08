// GSAP SCRIPT
gsap.registerPlugin(ScrollTrigger);

// Scroll Trigger Plugin
gsap.from('.sandi', {
  scrollTrigger: '.sandi',
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "back"
});

gsap.from('.t-sandi', {
  scrollTrigger: '.t-sandi',
  duration: 1,
  x: -200,
  opacity: 0,
  ease: "bounce"
});

gsap.from('.angga', {
  scrollTrigger: '.angga',
  duration: 1.5,
  y: -100,
  opacity: 0,
  delay: 0.9,
  ease: "back",
});

gsap.from('.t-angga', {
    scrollTrigger: '.t-angga',
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "bounce"
});

gsap.from('.arif', {
  scrollTrigger: '.arif',
  duration: 1,
  y: -100,
  opacity: 0,
  delay: 0.9,
  ease: "back"
});

gsap.from('.t-arif', {
  scrollTrigger: '.t-arif',
  duration: 1.5,
  x: -200,
  opacity: 0,
  ease: "bounce"
});