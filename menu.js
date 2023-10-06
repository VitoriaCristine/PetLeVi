const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const sectionToHide = document.querySelector('.section-golden');

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

hamburger.addEventListener('click', function () {
    sectionToHide.classList.toggle('hidden');
});
