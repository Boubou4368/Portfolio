function copier(br) {
    var contenue = document.querySelector(`.case[data-br="${br}"] p`);

    if (contenue) {
        var texteACopier = contenue.textContent;

        // Utilisation de l'API Clipboard pour copier le texte
        navigator.clipboard.writeText(texteACopier).then(function() {
            alert('Copié dans le presse-papier: ' + texteACopier);
        }).catch(function(err) {
            console.error('Erreur lors de la copie : ', err);
        });
    } else {
        console.error('Élément non trouvé pour data-br="' + br + '"');
    }
}