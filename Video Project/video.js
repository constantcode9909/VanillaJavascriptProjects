"use strict";

const targetVideo = document.querySelector("video");
const controlBtns = document.querySelectorAll("button");

controlBtns.forEach(function(btn){
    btn.addEventListener("click",()=>{
        const targetPlayBtn = btn.classList.contains("play");
        targetPlayBtn ? targetVideo.play(): targetVideo.pause();
    })
})