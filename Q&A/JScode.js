"use strict";
const links = document.querySelectorAll("a");
console.dir(links[0].nextElementSibling);

function signModifier(element){
     if (element.innerText === "+"){
        element.innerText = "-";
     }else{
        element.innerText = "+";
     }
}


links.forEach((e)=>{
    e.addEventListener("click",()=>{
        const target = e.nextElementSibling;
        target.classList.toggle("reveal");
        signModifier(e);
    })
})