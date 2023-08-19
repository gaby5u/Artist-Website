//----------------------------header-on-slide--------------------------------------

const header = document.querySelector('.main-nav');

window.onscroll = changeBackgroundOnScroll = () => {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add('active');
  }
  else {
    header.classList.remove('active');
  }
}

//------------------------------------toggle-menu----------------------------------

const toggleMenu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const closeButton = document.querySelector(".close-button-menu-toggle");

const menuToggle = () => {
  while (toggleMenu.classList.toggle("active")) {
    navLinks.classList.toggle("active");
    closeButton.classList.toggle("active");
  }
}