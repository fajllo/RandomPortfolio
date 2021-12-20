function updateList() {
  const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  document
    .querySelectorAll(".selected-circle")
    .forEach(c => c.classList.remove("selected-circle"));

  document
    .querySelectorAll(".nav-dot")
    [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
      "selected-circle"
    );

  document
    .querySelectorAll(".text-selected-text")
    .forEach(l => l.classList.remove("text-selected-text"));

  document
    .querySelectorAll(".link")
    [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
      "text-selected-text"
    );
}

updateList();
window.addEventListener("scroll", () => {
  updateList();
});
