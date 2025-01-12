// Funzione per gestire lo scroll di un container
function setupScroll(containerId, imageId, imagePath, totalImages) {
    const container = document.querySelector(`#${containerId}`);
    const stickyImage = document.getElementById(imageId);

    const scrollArea = 2000; // Altezza totale dell'area di scorrimento per le immagini

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
setupScroll('container-2', 'sticky-image-2', 'img_2', 33);

// Configura lo scroll per il secondo container (img_1)
setupScroll('container-1', 'sticky-image-1', 'img_1', 28);

// Configura lo scroll per il terzo container (img_3)
setupScroll('container-3', 'sticky-image-3', 'img_3', 44);

