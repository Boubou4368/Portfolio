function copierEmail() {
    var email = document.getElementById('email').innerText;

    // Utilisation de l'API Clipboard pour copier le texte
    navigator.clipboard.writeText(email).then(function() {
        alert('copié dans le presse papier: ' + email);
    }).catch(function(err) {
        console.error('Erreur lors de la copie : ', err);
    });
}
