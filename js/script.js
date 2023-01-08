/* Swiper codes */
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

/* Isotope codes */
var iso = new Isotope(".portfolio .grid", {
  itemSelector: ".grid-item",
});

document.querySelectorAll(".portfolio .filters span").forEach(item => {
  item.addEventListener("click", () => {
    /* Change font weight when I click on filters */
    document.querySelectorAll(".portfolio .filters span").forEach(i => i.classList.remove("fw-bold"));
    item.classList.add("fw-bold");
    /* Images animation */
    iso.arrange({ filter: item.getAttribute("data-filter") });
  });
});