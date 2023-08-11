
//----------------------------background-slider------------------------------------

const homePage = document.querySelector(".home-page");
const dot = document.getElementsByClassName('dot');
let indexImage = 0, indexDot = 0;
dot[0].classList.add('active-dot');

const changeSlidesAutomatic = () => {
  const bgImages = ["url('img/background-img-carousel/background-img-carousel-1.png')", "url('img/background-img-carousel/background-img-carousel-2.png')", "url('img/background-img-carousel/background-img-carousel-3.png')", "url('img/background-img-carousel/background-img-carousel-4.png')", "url('img/background-img-carousel/background-img-carousel-5.png')"];
  if (indexImage && indexDot > dot.length - 1) {
    indexImage = 0;
    indexDot = 0;
  }
  
  if (indexImage === indexDot) {
      homePage.style.backgroundImage = bgImages[indexImage];
      activeDot = dot[indexDot].classList.add('active-dot');
    }
    for (i = 0; i < dot.length; i++) {
      if(i !== indexImage) {
        dot[i].classList.remove('active-dot');
      }
    }
    indexImage++;
    indexDot++;
}


const changeSlideUsingDots = (pressedDot) => {
  
  switch (pressedDot)
  {
    case 1: homePage.style.backgroundImage = "url('img/background-img-carousel/background-img-carousel-1.png')";
    indexDot = 1; indexImage = 1;
    break;
    case 2: homePage.style.backgroundImage = "url('img/background-img-carousel/background-img-carousel-2.png')";
    indexDot = 2; indexImage = 2;
    break;
    case 3: homePage.style.backgroundImage = "url('img/background-img-carousel/background-img-carousel-3.png')";
    indexDot = 3; indexImage = 3;
    break;
    case 4: homePage.style.backgroundImage = "url('img/background-img-carousel/background-img-carousel-4.png')";
    indexDot = 4; indexImage = 4;
    break;
    case 5: homePage.style.backgroundImage = "url('img/background-img-carousel/background-img-carousel-5.png')";
    indexDot = 5; indexImage = 5;
    break;
  }
  
  for (i = 0; i < dot.length; i++) {
    if (pressedDot-1 === i) {activeDot = dot[i].classList.add('active-dot');}
    else {dot[i].classList.remove('active-dot');}
  }
}
setInterval(changeSlidesAutomatic, 5000);

//----------------------------------popular-pictures-slider------------------------
const carousel = document.querySelector(".carousel");

let isDragStart = false;
let prevPageX, prevScrollLeft;

const dragStart = (e) => {
   isDragStart = true;
   prevPageX = e.pageX;
   prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {

  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIncons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);



const arrowIcons = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img")[0];


const showHideIncons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; 
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"; 
  
}

arrowIcons.forEach (icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIncons(), 60);
  });
})

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