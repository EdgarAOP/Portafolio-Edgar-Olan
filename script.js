document.addEventListener("DOMContentLoaded", function () {
    // Selección de elementos
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel .slide');
    const totalSlides = slides.length;
    const carousel = document.querySelector('.carousel');

    // Función para actualizar el carrusel
    function updateCarousel() {
        const offset = -currentIndex * 110;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Event Listeners para los botones del carrusel
    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });


});

