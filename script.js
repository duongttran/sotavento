let slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0;
const totalSlides = slides.length

let nextButton = document.getElementById("carousel-button-next")
let prevButton = document.getElementById("carousel-button-prev")

console.log("slides", slides)
console.log("totalSlides", totalSlides)

nextButton.addEventListener("click", moveToNextSlide)
prevButton.addEventListener("click", moveToPrevSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === slides.length - 1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")

    console.log(slidePosition)
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    console.log(slidePosition, "slidePosition")
}














