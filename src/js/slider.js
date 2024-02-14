import Swiper from "swiper";
import { Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // slider();
});

const slider = () => {
  const slider = document.querySelector(".slider-carousel");

  if (slider) {
    const swiper = new Swiper(slider, {
      modules: [Pagination],
      pagination: {
        el: slider.querySelector(".slider-carousel-pagination"),
        clickable: true,
      },
      spaceBetween: 35,
    });
  }
};
