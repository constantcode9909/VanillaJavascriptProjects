"use strict";

const generatorBtn = document.querySelector(".btn_generator");
const pargraphElements = document.querySelectorAll(".paragraph_item");
const inputElement = document.getElementById("para");
const paragraphMap = new Map();
createMapElements();

function createMapElements(){
    pargraphElements.forEach((e, index)=>{
        paragraphMap.set(index + 1 , e);
    })
}

function randomizer(){
    return Math.floor(Math.random() * 9) +1;
}

function  hideAll(){
    pargraphElements.forEach((e)=>{
        e.classList.add("hide");
    })
}

function randomContent(){
        const randomOutputIndex = randomizer();
        const targetElement = paragraphMap.get(randomOutputIndex);
        hideAll();
        targetElement.classList.remove("hide");
}

function showContent(userInput){
        for(let index = 1; index <= 9; ++index){
            const targetElement = paragraphMap.get(index);
            if(index <= userInput){
            targetElement.classList.remove("hide");
            }else {
               targetElement.classList.add("hide");
            }
        }     
}


generatorBtn.addEventListener("click", ()=>{
    const inputData = inputElement.value;
    if((inputData < 0)||(inputData >= 10)){
    randomContent();
    }else if (inputData != 0){
      showContent(inputData);
    }else{
        hideAll();
    }
})
