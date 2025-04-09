function readMore(nr) {
  let p = document.querySelector(`.card[data-nr="${nr}"] p`);
  let btnText = document.querySelector(`.card[data-nr="${nr}"] .myBtn`);
  let t = document.querySelector(`.card[data-nr="${nr}"] .viewmore`)


  if (!p.classList.contains('collapse')) {
    p.classList.add('collapse');
    btnText.innerHTML = "Voir plus";
    //t.innerHTML = "programmation - c++,java,python, javascript balisage - html,css, markdown declaratif -SQL	 systeme d'exploitation -Linux,bash";
  } else {
    p.classList.remove('collapse');
    btnText.innerHTML = "Voir moins";
  }
}