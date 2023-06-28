"use strict";
const navigationBtns = document.querySelectorAll("button");
const contentContainers = document.querySelectorAll("article");

navigationBtns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{

        const btnId = event.target.id;
        if(btnId === "all"){
          contentContainers.forEach((a)=>{
            a.classList.remove("hide");
          })
        }else{
            
            contentContainers.forEach((a)=>{
                a.classList.remove("hide");
                const elementClassValue = a.className;
                if(elementClassValue != btnId){
                    a.classList.add("hide");
                }else{
                    a.classList.remove("hide");
                }
            })
        }
    })
})