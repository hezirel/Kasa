const dropdownContents = document.querySelectorAll('.dropdown-content');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const carouselImgs = document.querySelectorAll('.carousel-img');
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');


dropdownToggles.forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', (e) => {
        let target = e.target.dataset.for;
        let content = document.getElementById(target);
        content.classList.toggle('show');
        dropdownToggle.setAttribute('aria-expanded', content.classList.contains('show'));
    })
})
let counter = 0;
rightArrow.addEventListener('click', () => {
    counter++;
    if (counter === carouselImgs.length) {
        counter = 0;
    }
    carousel.style.transform = `translateX(-${counter * 100}%)`;
})

leftArrow.addEventListener('click', () => {
    counter--;
    carousel.style.transform = `translateX(${counter * 100}%)`;
    if (counter < 0) {
        counter = carouselImgs.length - 1 ;
    }
})
