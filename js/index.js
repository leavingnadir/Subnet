let slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(autoSlide, 3000); // change slide every 3 seconds
