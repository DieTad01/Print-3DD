document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const totalSlides = 3; // Cantidad de slides
    const slideInterval = 4000; // 4 segundos entre cambios

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        document.getElementById(`slide${currentSlide + 1}`).checked = true;
    }

    // Iniciar el carrusel automático
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Pausar cuando el usuario interactúa
    document.querySelectorAll('input[name="slide"]').forEach(radio => {
        radio.addEventListener('change', function() {
            currentSlide = parseInt(this.id.replace('slide', '')) - 1;
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });
});
