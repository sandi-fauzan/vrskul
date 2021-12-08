const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// GSAP index.html
// GSAP SCRIPT
gsap.registerPlugin(ScrollTrigger);

// Scroll Trigger Plugin

// Container
gsap.from('.container .text-box h1', {
  scrollTrigger: '.container .text-box h1',
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "back"
});

gsap.from('.container .text-box p', {
  scrollTrigger: '.container .text-box p',
  duration: 1,
  delay: 1,
  y: -200,
  opacity: 0,
  ease: "bounce"
});

gsap.from('.container .text-box button', {
  scrollTrigger: '.container .text-box button',
  duration: 1,
  delay: 1.4,
  y: -100,
  opacity: 0,
  ease: "bounce"
});

gsap.from('.container .text-box a', {
  scrollTrigger: '.container .text-box a',
  duration: 1,
  delay: 1.4,
  x: -200,
  opacity: 0,
  ease: "bounce"
});

gsap.from('.container .img-box img', {
  scrollTrigger: '.container .img-box img',
  duration: 1,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "back"
});

// About
gsap.from('.about img', {
  scrollTrigger: '.about img',
  duration: 1,
  delay: 1,
  x: -200,
  opacity: 0,
  ease: "back"
});

gsap.from('.about h1', {
  scrollTrigger: '.about h1',
  duration: 1,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "back"
});

gsap.from('.about p', {
  scrollTrigger: '.about p',
  duration: 1,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "back"
});

gsap.from('.about a', {
  scrollTrigger: '.about a',
  duration: 1,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "back"
});

// Manfaat
gsap.from('.manfaat h1', {
  scrollTrigger: '.manfaat h1',
  duration: 1,
  delay: 1,
  x: -200,
  opacity: 0,
  ease: "back"
});

gsap.from('.manfaat p', {
  scrollTrigger: '.manfaat p',
  duration: 1,
  delay: 1,
  x: -200,
  opacity: 0,
  ease: "back"
});

// edu
gsap.from('.education img', {
  scrollTrigger: '.education img',
  duration: 1,
  delay: 1,
  x: -200,
  opacity: 0,
  ease: "back"
});

gsap.from('.education h1', {
  scrollTrigger: '.education h1',
  duration: 1,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "back"
});

gsap.from('.education p', {
  scrollTrigger: '.education p',
  duration: 1,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "back"
});

gsap.from('.feature .grid-3 .1r', {
  scrollTrigger: '.feature .grid-3 .1r',
  duration: 1,
  delay: 1,
  x: -100,
  opacity: 0,
  ease: "back"
});

gsap.from('.feature .grid-3 .1l', {
  scrollTrigger: '.feature .grid-3 .1l',
  duration: 1,
  delay: 1,
  x: 100,
  opacity: 0,
  ease: "back"
});

gsap.from('.feature .grid-3 .2r', {
  scrollTrigger: '.feature .grid-3 .2r',
  duration: 1,
  delay: 1,
  x: -100,
  opacity: 0,
  ease: "back"
});

gsap.from('.feature .grid-3 .2l', {
  scrollTrigger: '.feature .grid-3 .2l',
  duration: 1,
  delay: 1,
  x: 100,
  opacity: 0,
  ease: "back"
});

gsap.from('.feature .grid-3 .3r', {
  scrollTrigger: '.feature .grid-3 .3r',
  duration: 1,
  delay: 1,
  x: -100,
  opacity: 0,
  ease: "back"
});

gsap.from('.feature .grid-3 .3l', {
  scrollTrigger: '.feature .grid-3 .3l',
  duration: 1,
  delay: 1,
  x: 100,
  opacity: 0,
  ease: "back"
});