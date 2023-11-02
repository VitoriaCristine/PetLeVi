const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const sectionToHide = document.querySelector('.section');

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

hamburger.addEventListener('click', function () {
	if(sectionToHide.classList.contains("hidden"))
		setTimeout(coisar, 700);
	else
		coisar();
});

function coisar() {
	sectionToHide.classList.toggle('hidden');
}