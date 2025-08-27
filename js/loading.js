document.addEventListener('DOMContentLoaded', function() {
            // Simulate loading data
            setTimeout(function() {
                var skeletonContainers = document.querySelectorAll('.skeleton-container');

                skeletonContainers.forEach(function(container) {
                    // Replace skeleton with actual content
                    container.innerHTML = `
                        <div class = "shape" id ="shapeG">
                            <div class = "Gras" id ="Bonjour">Bonjour</div>
                            <div id = "intro-text"> Je suis <u>Evan Atherly</u></div>
                        </div>
                        <div class = "shape" id ="shapeDTitre">
                            <div class = "Gras" id = "Presentation"> Présentation</div>
                        </div>    
                        <div class = "shape" id ="shapeDTexte">
                            <div id="Bienvenue">Bienvenue sur mon portfolio,<br>
                            étudiant en Bachelor universitaire de Technologie en informatique
                            et voici les projets que j'ai pu réaliser ainsi que quelques informations sur moi.
                            </div>
                        </div>
                    `;
                });
            }, 2000); // Simulate a 2-second loading delay
        });