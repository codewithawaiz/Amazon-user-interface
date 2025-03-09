const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }
    
    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

showSlide(currentIndex);

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
