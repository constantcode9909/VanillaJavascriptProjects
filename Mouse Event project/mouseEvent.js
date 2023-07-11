"use strict";

const sectionOne = document.querySelector(".Mouse-X-position");
const sectionTwo = document.querySelector(".Mouse-Y-position");
const positionXContainer = sectionOne.querySelector("div");
const positionYContainer = sectionTwo.querySelector("div");

window.addEventListener("mouseover", function(event){
    const positionXVAlue = event.clientX;
    const positionYValue = event.clientY;
    positionXContainer.innerText = positionXVAlue;
    positionYContainer.innerText = positionYValue;
})