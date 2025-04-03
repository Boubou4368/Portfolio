function readMore(nr) {
    let p = document.querySelector(`.card[data-nr="${nr}"] p`);
    let btnText = document.querySelector(`.card[data-nr="${nr}"] .myBtn`);
  
  
    if (!p.classList.contains('collapse')) {
      p.classList.add('collapse');
      btnText.innerHTML = "Voir plus";
    } else {
      p.classList.remove('collapse');
      btnText.innerHTML = "Voir moins";
    }
  }
