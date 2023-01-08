var iso = new Isotope(".portfolio .grid", {
  itemSelector: ".grid-item",
});

document.querySelectorAll(".portfolio .filters span").forEach(item => {
  item.addEventListener("click", () => iso.arrange({ filter: item.getAttribute("data-filter") }))
});