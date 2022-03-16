const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const changeNavbar = () => {
  let scrollPos = window.scrollY;
  scrollPos >= 80 ? navbar.classList.add('active') : navbar.classList.remove('active'); 
}

window.addEventListener('scroll', changeNavbar);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const servicesMenu = document.querySelector('#services-page');
  const plansMenu = document.querySelector('#plans-page');
  const modalitysMenu = document.querySelector('#modality-page');

  let scrollPos = window.scrollY;

  console.log(scrollPos);

  if (window.innerWidth > 960 && scrollPos < 720) {
    homeMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1520) {
    servicesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    plansMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2320) {
    plansMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    modalitysMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3020) {
    modalitysMenu.classList.add('highlight');
    plansMenu.classList.remove('highlight');
    return;
  } else  {
    modalitysMenu.classList.remove('highlight');
  }

  if ((elem && window.innerWIdth < 960) || elem) {
    elem.classList.remove('highlight');
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//Animations 
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.1,
});

gsap.from('.animate-services-img', {
  scrollTrigger: '.animate-services',
  duration: 1.2,
  opacity: 0,
  x: -200,
});

gsap.from('.animate-memberships', {
  scrollTrigger: '.animate-memberships',
  duration: 0.5,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
});

gsap.from('.animate-memberships-card', {
  scrollTrigger: '.animate-memberships-card',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2,
});

gsap.from('.animate-modality', {
  scrollTrigger: '.animate-modality',
  scrollTrigger: '.animate-services',
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.1
});

gsap.from('.animate-modality-img', {
  scrollTrigger: '.animate-modality',
  duration: 1.2,
  opacity: 0,
  x: -100,
});

gsap.from('.animate-email', {
  scrollTrigger: '.animate-email',
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.5,
});
