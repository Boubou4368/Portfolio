const section2 = document.getElementById("section2");

window.addEventListener("scroll", () => {
  const rect = section2.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    section2.classList.add("active");
  } else {
    section2.classList.remove("active");
  }
});
