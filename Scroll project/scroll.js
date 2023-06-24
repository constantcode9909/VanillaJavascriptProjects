"use strict";
const revealLinks = document.querySelectorAll(".reveal_link");
const headerSection = document.querySelector("nav");

revealLinks.forEach((e)=>{
    e.addEventListener("click" , function(event){
        event.preventDefault();
        headerSection.classList.toggle("reveal_menu");
    })
})