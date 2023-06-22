"use strict";
const section = document.querySelector("section");
const btnList =document.querySelectorAll("button");
const presentElements = document.querySelectorAll(".target");
const hiddenElements = document.querySelectorAll(".target2");
const backgroundColorValue = "linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5)),url(\"mailchimp-Hv9CS6KZayQ-unsplash.jpg\")";
const imgURL = "(\"mailchimp-Hv9CS6KZayQ-unsplash.jpg\")";
const bodyElement = document.querySelector("body");


// Keep the default values of the background size and cover property which change when the background main property change
function keepDefault(){
        bodyElement.style.backgroundSize = "cover";
        bodyElement.style.backgroundPosition = "center";
}

function changeDisplayProperty(a , b){
      a.forEach((element)=>{
        element.style.display = "none";
      })

      b.forEach((element)=>{
        element.style.display = "block";
      })
}


// change section padding , add/remove borders and manipulate background value according to the display state of the the first
function layoutChanges(a){
    if(a[0].style.display === "none"){
      section.style.paddingBlockEnd = "0";
      section.style.borderBlock = "solid 20px rgb(50, 150, 207)";
      bodyElement.style.background = backgroundColorValue;
      keepDefault();
    }else{
      section.style.paddingBlockEnd = "40px";
      section.style.borderBlock = "none";
      bodyElement.style.background = imgURL;
      keepDefault();
    }
}

btnList.forEach((e)=>{
    e.addEventListener("click" , function (){
        if(this.classList.contains("open")){
          changeDisplayProperty(presentElements , hiddenElements);
        }else{
            changeDisplayProperty(hiddenElements , presentElements);
        }
        layoutChanges(presentElements);   
    })
})