function readMore(nr) {
  let p = document.querySelector(`.card[data-nr="${nr}"] .viewmore`);
  let btnText = document.querySelector(`.card[data-nr="${nr}"] .myBtn`);

  if (!p.classList.contains('collapse')) {
    p.classList.add('collapse');
    p.style.maxHeight = null; // Réinitialiser la hauteur maximale
    btnText.innerHTML = "Voir plus";
  } else {
    p.classList.remove('collapse');
    p.style.maxHeight = p.scrollHeight + "px"; // Définir la hauteur maximale en fonction du contenu
    btnText.innerHTML = "Voir moins";
  }
}
