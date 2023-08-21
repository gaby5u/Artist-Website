//------------------------------alex-katz-carousel-img-------------------------------

const image = document.querySelectorAll(".image-container img");
const dotsArtistCarousel = document.querySelectorAll(
  ".dots-artist-carousel span"
);
let isActive = false;

const toggleImage = (imageIndex) => {
  for (i = 0; i < image.length; i++) {
    if (i != imageIndex - 1) {
      image[i].classList.remove("active-image");
      image[i].classList.add("inactive-image");
      dotsArtistCarousel[i].classList.remove("active-dot-artist-carousel");
      isActive = true;
    }
  }
  if (image[imageIndex - 1].classList == "inactive-image") {
    image[imageIndex - 1].classList.remove("inactive-image");
    image[imageIndex - 1].classList.add("active-image");

    dotsArtistCarousel[imageIndex - 1].classList.add(
      "active-dot-artist-carousel"
    );
    isActive = true;
  } else {
    image[imageIndex - 1].classList.remove("active-image");
    image[imageIndex - 1].classList.add("inactive-image");
    isActive = false;
  }

  if (isActive === false) {
    dotsArtistCarousel[imageIndex - 1].classList.remove(
      "active-dot-artist-carousel"
    );
  }
};
