let slides=document.querySelectorAll('.slides img');
let slideIndex=0;
let slideInterval=null;
document.addEventListener("DOMContentLoaded",slideInitializer);
function slideInitializer(){
    if( slides.length > 0 ){
        slides[0].classList.add("displaySlide");
        slideInterval=setInterval(nextSlide,5000);
    }
}
function showSlide(index){
    if(index>=slides.length ){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1;
    }
       slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
       })
       slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(slideInterval);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    clearInterval(slideInterval);
    slideIndex++;
    showSlide(slideIndex);
}