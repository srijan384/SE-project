let img = document.getElementById('lightbox-img'); 
let overlay = document.querySelector('.overlay');  
let lightbox = document.getElementById('lightbox'); 
let prev = document.querySelector('.prev');         
let next = document.querySelector('.next');  
let closeBtn = document.querySelector('.close');        

let slideIndex = 0;
let slides = []; // will hold only the selected outlet’s slides

function openMenu(outletClass) {
  slides = document.querySelectorAll(`.${outletClass} .slides img`);
  slideIndex = 0;

  if (slides.length === 0) return;

  overlay.style.display = "block";
  lightbox.style.display = "block";
  prev.style.display = "block";
  next.style.display = "block";
  closeBtn.style.display = "block";

  showSlide(slideIndex);
}

function closeMenu() {
  overlay.style.display = "none";
  lightbox.style.display = "none";
  slides = [];
}

function showSlide(index) {
  if (slides.length === 0) return;

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  img.src = slides[slideIndex].src;
}

function nextMenu() {
    if (slides.length === 0) return;
  
    slideIndex++;
  
    if (slideIndex >= slides.length) {
      slideIndex = 0;  // reset to first image
    }
  
    showSlide(slideIndex);
  }
function prevMenu() {
  if (slides.length === 0) return;
  slideIndex--;
  showSlide(slideIndex);
}

overlay.addEventListener("click", closeMenu);