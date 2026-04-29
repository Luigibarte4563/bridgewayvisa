// Our Office
let currentIndex = 0;
const slides = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('bg-red-700', 'w-6');
            dot.classList.remove('bg-gray-600');
        } else {
            dot.classList.remove('bg-red-700', 'w-6');
            dot.classList.add('bg-gray-600');
        }
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateSlider();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlider();
}

setInterval(() => moveSlide(1), 5000);