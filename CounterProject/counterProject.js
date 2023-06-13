// get the button elements on which the events will be applied
const btnDecrease = document.getElementById("btn_decrease");
const btnReset = document.getElementById("btn_reset");
const btnIncrease = document.getElementById("btn_increase");

// get the counter element with the changed value 
const counterElement = document.getElementById("counter_value");


// a function to get the current text value of the counter element
function getTextValue(){
    return counterElement.innerText;
}


// a function to get the color value of the counter element
function changeColorValue(value){
    counterElement.style.color = value;
}


// a function to update the text value of the counter element with a given value
function updateTextValue(updatedValue){
    counterElement.innerText = updatedValue;
}


btnDecrease.addEventListener("click" , function () {
    changeColorValue("red");
    let elementCounterTextValue = getTextValue();
    let currentValue = --elementCounterTextValue;
    updateTextValue(currentValue);
})


btnReset.addEventListener("click" , function (){
    updateTextValue("0");
    changeColorValue("rgb(70, 70, 231)");
})


btnIncrease.addEventListener("click" , function () {
    changeColorValue("green");
    let elementCounterTextValue = getTextValue();
    let currentValue = ++elementCounterTextValue;
    updateTextValue(currentValue);
})
