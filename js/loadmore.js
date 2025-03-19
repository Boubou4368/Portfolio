document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById('ppp');
    const voirPlusBtn = document.getElementById('voirPlusBtn');
    const hiddenText = textContainer.querySelector('.hidden-text');

    // Assurez-vous que le texte caché est masqué au chargement
    hiddenText.style.display = 'none';

    voirPlusBtn.addEventListener('click', function() {
        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'block';
            textContainer.style.height = 'auto';
            voirPlusBtn.textContent = 'Voir moins';
        } else {
            hiddenText.style.display = 'none';
            textContainer.style.height = 'auto'; // Ajustez cette valeur selon vos besoins
            voirPlusBtn.textContent = 'Voir plus';
        }
    });
});
