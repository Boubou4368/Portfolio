function readMore(nr) {
  let p = document.querySelector(`.card[data-nr="${nr}"] p`);
  let btnText = document.querySelector(`.card[data-nr="${nr}"] .myBtn`);
  let t = document.querySelector(`.card[data-nr="${nr}"] .viewmore`)


  if (!p.classList.contains('collapse')) {
    p.classList.add('collapse');
    btnText.innerHTML = "Voir plus";
    t.innerHTML = "programmation - c++,java,python, javascript balisage - html,css, markdown declaratif -SQL	 systeme d'exploitation -Linux,bash";
  } else {
    p.classList.remove('collapse');
    btnText.innerHTML = "Voir moins";
    t.innerHTML = "Evan Atherly, je suis un étudiant en BUT informatique et intéressé par ce domaine. j'ai fais le choix de cette formation assez vite, non pas parce que j'étais sur de moi mais plutôt parce que je considère qu'il faut savoir prendre des décisions. j'ai donc choisis un domaine qui m’intéresse sans pour autant en être passionné, à l'heure ou j'écris cela je vois de plus en plus une passion se développer.Ainsi je dirais que je suis quelqu'un de décisionnaire. Pour ma deuxième qualité,je dirais que je suis assez tenace. Etant donnée que l'informatique ne me passionnais pas a premiere abord j'avais du retard sur certaines personnes de ma promotion. J'ai donc travaillé de plus en plus afin de m'améliorer. Enfin ma troisième qualité serai ma sociabilité. J'ai toujours eu une facilité à aller vers les gens. Cela m'a été utile lors de travaux de groupe notamment";
  }
}