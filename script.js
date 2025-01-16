     // Funzione per gestire lo scroll di un container
     function setupScroll(containerId, imageId, imagePath, totalImages) {
        const container = document.querySelector(`#${containerId}`);
        const stickyImage = document.getElementById(imageId);

        const scrollArea = 805; // Altezza totale dell'area di scorrimento per le immagini

        window.addEventListener('scroll', () => {
            const containerTop = container.offsetTop;
            const scrollY = window.scrollY;

            // Calcola se lo scroll è all'interno dell'area immagine
            if (scrollY >= containerTop && scrollY <= containerTop + scrollArea) {
                // Calcola la progressione dello scroll all'interno del container
                const progress = (scrollY - containerTop) / scrollArea;

                // Determina l'indice dell'immagine basato sulla progressione
                const imageIndex = Math.min(
                    totalImages - 1,
                    Math.floor(progress * totalImages)
                );

                // Aggiorna il source dell'immagine
                stickyImage.src = `${imagePath}/${imageIndex + 1}.png`;
            }
        });
    }

    // Configura lo scroll per il primo container (img_2)
    setupScroll('container-2', 'sticky-image-2', 'img_2', 32);

    // Configura lo scroll per il secondo container (img_1)
    setupScroll('container-1', 'sticky-image-1', 'img_1', 27);

    // Configura lo scroll per il terzo container (img_3)
    setupScroll('container-3', 'sticky-image-3', 'img_3', 43);

    document.addEventListener('DOMContentLoaded', () => {
        const aboutButton = document.querySelector('.titolo');

        // Quando si clicca sul pulsante "About"
        aboutButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Scorrimento fluido
            });
        });

        // Quando il mouse è sopra il pulsante "About"
        aboutButton.addEventListener('mouseover', () => {
            aboutButton.style.textDecoration = 'underline'; // Aggiunge la sottolineatura
        });

        // Quando il mouse lascia il pulsante "About"
        aboutButton.addEventListener('mouseout', () => {
            aboutButton.style.textDecoration = 'none'; // Rimuove la sottolineatura
        });

        const loadingPage = document.getElementById("loading-page");
        const mainContent = document.getElementById("main-content");

        // Estende il caricamento a 8 secondi con dissolvenza
        setTimeout(() => {
            loadingPage.classList.add('hidden'); // Aggiunge la classe per la dissolvenza
            setTimeout(() => {
                loadingPage.style.display = "none"; // Nasconde la pagina di caricamento
                mainContent.style.display = "block"; // Mostra il contenuto principale
            }, 1000); // Tempo per completare la transizione
        }, 10000);
    });