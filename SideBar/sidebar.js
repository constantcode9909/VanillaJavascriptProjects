"use strict";

const closeBtn = document.querySelector(".close-sidebar");
const openBtn = document.querySelector(".open-sidebar");
const sideBarElement = document.querySelector(".sidebar-container");

function performAction(){
    sideBarElement.classList.toggle("hide");
}

openBtn.addEventListener("click",()=>{
    performAction();
})

closeBtn.addEventListener("click",()=>{
    performAction();
})