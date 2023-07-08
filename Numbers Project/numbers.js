"use strict";

const counterContainers = document.querySelectorAll(".counter");
const numbersMap = new Map();
numbersMap.set(500, counterContainers[0]);
numbersMap.set(4000, counterContainers[1]);
numbersMap.set(1500, counterContainers[2]);


function counterManager(finalNumber, limitText, timeStep){
    setInterval(()=>{ 
        const targetCounter = numbersMap.get(finalNumber).innerText;
        if(targetCounter !== limitText){
        const list = targetCounter.split("");
        list.pop();
        let numberText = Number(list.join(''));
        numberText += 1;
        const finalResult = numberText + "+";
        numbersMap.get(finalNumber).innerText = finalResult.toString();
    }
    }, timeStep)
}


window.addEventListener("load", function(){
    counterManager(500, "500+", 5);
    counterManager(4000, "4000+", 0);
    counterManager(1500, "1500+", 3);
})