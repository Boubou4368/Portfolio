document.addEventListener('DOMContentLoaded', function() {
            // Simulate loading data
            setTimeout(function() {
                var skeletonContainers = document.querySelectorAll('.skeleton-container');

                skeletonContainers.forEach(function(container) {
                    // Replace skeleton with actual content
                    container.innerHTML = `
                        <img src="../images/silicone.png" alt="Image chargée" >
                        <p>Contenu chargé</p>
                    `;
                });
            }, 2000); // Simulate a 2-second loading delay
        });