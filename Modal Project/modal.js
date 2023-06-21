"use strict";
const btnList =document.querySelectorAll("button");
const firstElements = document.querySelectorAll(".target");
const secondElements = document.querySelectorAll(".target2");

function changeDisplayProperty(a , b){
      a.forEach((element)=>{
        element.style.display = "none";
      })

      b.forEach((element)=>{
        element.style.display = "inline-block";
      })
}

btnList.forEach((e)=>{
    e.addEventListener("click" , function (){
        if(this.classList.contains("open")){
          changeDisplayProperty(firstElements , secondElements);
        }else{
            changeDisplayProperty(secondElements , firstElements);
        }   
    })
})