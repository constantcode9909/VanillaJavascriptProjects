"use strict";
const links = document.querySelectorAll("a");


function signModifier(element){
    let target = element.innerText ;
    target = element.innerText === "+" ?  "-" : "+" ;
    element.innerText = target;
}


function revealClassChanger(value){
    links.forEach((e1)=>{
        if(value != e1){
            const nextElement = e1.nextElementSibling;
            if(nextElement.classList.contains("reveal")){
                nextElement.classList.remove("reveal");
                signModifier(e1);
            }
        }
    })
}


links.forEach((e)=>{
    e.addEventListener("click",()=>{
        const target = e.nextElementSibling;
        target.classList.toggle("reveal");
        signModifier(e);
        revealClassChanger(e);
    })
})