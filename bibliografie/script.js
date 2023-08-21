//------------------------slider-cronology-years---------------------------------

const carousel = document.querySelector(".carousel");

const arrowIcons = document.querySelectorAll(".wrapper i");
firstYear = carousel.querySelectorAll("p")[0];

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstYearWidth = 140;
    carousel.scrollLeft +=
      icon.id == "left-arrow" ? -firstYearWidth : firstYearWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

//---------------------------modal-cronology-----------------------------------------

const infoCronologySlider = {
  An1954: [1954, "Prima expoziție individuală la Roko Gallery, New York."],
  An1968: [1968, "Se mută să prezinte acasă și studio în New York."],
  An1974: [
    1974,
    "Expoziție itinerantă organizată de The Whitney Museum of American Art.",
  ],
  An1986: [1986, "Retrospectivă la Muzeul Whitney de Artă Americană."],
  An1996: [
    1996,
    "Expoziție itinerantă organizată de Institutul Munson-Williams Proctor.",
  ],
  An2000: [2000, "Alex Katz la Carnegie Museum of Art, Pittsburgh."],
  An2003: [
    2003,
    "Alex Katz: Decupaje la Deichtorhallen Hamburg, Hamburg, Germania.",
  ],
  An2006: [
    2006,
    "Alex Katz o pictează pe Ada 1957–2005 la The Jewish Museum, New York.",
  ],
  An2009: [
    2009,
    "Expoziție An American Way Of Seeing organizată de Muzeul de Artă Sara Hildén.",
  ],
  An2012: [2012, "Give Me Tomorrow la Tate St. Ives, Marea Britanie."],
  An2015: [2015, "This is Now, la High Museum of Art, Atlanta"],
  An2018: [2018, "Alex Katz la Tate Liverpool, Liverpool, Anglia."],
  An2021: [2021, "Alex Katz: Picturi noi la Galeria Gladstone, New York."],
  An2022: [2022, "Teatru și dans, Muzeul de Artă Colby, Waterville, Maine"],
  An2023: [2023, "Alex Katz la Thyssen-Bornemisza Museo Nacional, Madrid."],
};
const modal = document.getElementById("modal");
const createModule = (pressedYear) => {
  modal.style.display = "block";
  const titleYearModal = document.querySelector(".modal-content .year");
  const textYearModal = document.querySelector(".modal-content .text");

  for (const property in infoCronologySlider) {
    if (pressedYear === infoCronologySlider[property][0]) {
      titleYearModal.textContent = infoCronologySlider[property][0];
      textYearModal.textContent = infoCronologySlider[property][1];
    }
  }
};

const closeModal = () => {
  modal.style.display = "none";
};

//-----------------------------video-play-button-------------------------------------

const playButton = document.querySelector(".play-button");
const video = document.getElementById("video");
const videoContainer = document.querySelector(".div-play-button");

videoContainer.addEventListener("click", () => {
  if (video.paused == true) {
    video.play();
    playButton.style.display = "none";
  } else if (video.paused == false) {
    video.pause();
    playButton.style.display = "block";
  }
});
