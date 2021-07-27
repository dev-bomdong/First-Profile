'use strict';

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider:first-child");
const prebtn = document.querySelector(".prebtn");
const nextbtn = document.querySelector(".prebtn");

function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
       
        if(nextSlide) {
        nextSlide.classList.add(SHOWING_CLASS);
    } else { 
        firstSlide.classList.add(SHOWING_CLASS);
     }

    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
};


slide();
setInterval(slide, 3500);



