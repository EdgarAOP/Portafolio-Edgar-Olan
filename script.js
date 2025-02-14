    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel .slide');
    const totalSlides = slides.length;

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 110;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }
