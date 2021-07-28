'use strict';

let target = document.querySelectorAll('.love__list-pic');

function zoomIn(x){
    x.target.style.transform = "scale(1.2)";
    x.target.style.zIndex= 1;
    x.target.style.transition = "all 0.5s";
}

function zoomOut(x){
    x.target.style.transform = "scale(1)";
    x.target.style.zIndex= 0;
    x.target.style.transition = "all 0.5s";
}


for(let i=0; i<target.length; i++) {
    target[i].addEventListener('mouseover',zoomIn);
    target[i].addEventListener('mouseout',zoomOut);
};
