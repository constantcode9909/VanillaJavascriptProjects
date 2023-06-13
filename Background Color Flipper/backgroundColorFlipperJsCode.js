// get the original value of the background color property of the main element
const mainElement = document.querySelector("main");
const mainElementComputedStyles = getComputedStyle(mainElement);
const backgroundColorValue = mainElementComputedStyles.backgroundColor;
const targetArticle = document.querySelector("article");
const originalText = targetArticle.innerText;


const targetButton = document.getElementById("target_button");
const randomColorValues = ["Green", "#F15025", "Red", "Rgba(133,122,200)"];
const hexColorValues = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const simpleButton = document.getElementById("Simple_button");
const hexButton = document.getElementById("Hex_button");


// convert the color value from rgba to hex
function rgbaToHex(rgbaColor) {
    var components = rgbaColor.match(/\d+/g);
  
    var hexComponents = components.slice(0, 3).map(function(component) {
      var hex = Number(component).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    });
  
    return "#" + hexComponents.join("");
  }

// reset the background color value to the original value
// set it in the article inner text
function resetBackgroundColor(){
    mainElement.style.backgroundColor = backgroundColorValue;
    targetArticle.innerText = originalText + rgbaToHex(backgroundColorValue);
}

resetBackgroundColor();

// get a random number and use it to get a random value from the array provided
function colorRandomizer(listOfColors){
         var result = Math.floor(Math.random() * listOfColors.length );
         return listOfColors[result];
}

// generate hex colors
function hexColorGenerator(){
    let listOfHexComponents = ["#"];
    let index = 0;
    while(index < 6){
        listOfHexComponents.push(colorRandomizer(hexColorValues));
        index++;
    }
    return listOfHexComponents.join("");
}

// manage the event listener and which functions it uses to generate color values
function eventManager (eventAction , valueForTheSimpleButton){
targetButton.addEventListener("click" , function(){
    let newRandomColor = eventAction(valueForTheSimpleButton);
    mainElement.style.backgroundColor = newRandomColor;
    targetArticle.innerText = originalText + newRandomColor;
})
}


simpleButton.addEventListener("click" , function () {
    resetBackgroundColor();
    eventManager(colorRandomizer , randomColorValues);
})  


hexButton.addEventListener("click", function (){
    resetBackgroundColor();
    eventManager(hexColorGenerator)
})
