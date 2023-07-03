"use strict";

const targetVideo = document.querySelector("video");
const controlBtns = document.querySelectorAll("button");
const coverItem = document.querySelector(".cover-box");
const preloaderContainer = document.querySelector('header');


window.addEventListener("load", ()=>{
    preloaderContainer.style.display = "none";
})


controlBtns.forEach(function(btn){
    btn.addEventListener("click",()=>{
        const targetPlayBtn = btn.classList.contains("play");
        targetPlayBtn ? targetVideo.play():targetVideo.pause();
        coverItem.classList.toggle("move-box");
    })
})