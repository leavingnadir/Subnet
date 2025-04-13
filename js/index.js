let slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(autoSlide, 3000); // change slide every 3 seconds

function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab) => tab.classList.add("hidden"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabId).classList.remove("hidden");
  event.target.classList.add("active");
}
