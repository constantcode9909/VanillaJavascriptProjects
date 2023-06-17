// get the button elements on which the events will be applied in a NodeList
const listOfButtons = document.querySelectorAll("button");

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


// a function to update the color value of the counter element according to the new value it holds as innertext
function valueColorChanger(targetValue){
    if(targetValue === 0){
        changeColorValue("rgb(70, 70, 231)");
    }
    else  if(targetValue < 0){
        changeColorValue("red");
    }
    else{
        changeColorValue("green");
    }
}

// run the click event on each button and change the value and color according to the class value on buttons
listOfButtons.forEach(function(btn){
    btn.addEventListener("click" , (e)=>{
       const btnClassValue = e.target.className;
       let elementCounterTextValue = getTextValue();
       if(btnClassValue === "btn_increase")
         ++elementCounterTextValue;
       else if(btnClassValue === "btn_decrease")
         --elementCounterTextValue;
       else{
        elementCounterTextValue = 0;
       }
       valueColorChanger(elementCounterTextValue);
       updateTextValue(elementCounterTextValue);
    })
})
