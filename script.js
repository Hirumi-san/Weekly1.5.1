const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "prev");
        if (index === currentIndex) {
            slide.classList.add("active");
        } else if (index < currentIndex) {
            slide.classList.add("prev");
        }
    });
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlides();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlides();
    }
});

// Set slide pertama sebagai aktif
updateSlides();
