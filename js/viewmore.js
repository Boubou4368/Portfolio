function readMore(nr) {
    let p = document.querySelector(`.card[data-nr="${nr}"] p`);
    let btnText = document.querySelector(`.card[data-nr="${nr}"] .myBtn`);
  
  
    if (!p.classList.contains('collapse')) {
      p.classList.add('collapse');
      btnText.innerHTML = "Read more";
    } else {
      p.classList.remove('collapse');
      btnText.innerHTML = "Read more";
    }
  }
