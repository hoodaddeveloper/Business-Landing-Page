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


