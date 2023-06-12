const mainElement = document.querySelector("main");
const mainElementComputedStyles = getComputedStyle(mainElement);
const backgroundColorValue = mainElementComputedStyles.backgroundColor;
const targetArticle = document.querySelector("article");
const originalText = targetArticle.innerText;

const targetButton = document.getElementById("target_button");
const randomColorValues = ["Green", "#F15025", "Red", "Rgba(133,122,200)"];
const hexColorValues = ["#b0bdb336", "#BF1421", "#B6BCB2", "#E3F851", "#BA1F83", "#83C864", "#56FDC0", "#8C05BC", "#0E3121", "#6F82C3", "#F5ACC4"];


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
targetArticle.innerText = originalText + rgbaToHex(backgroundColorValue);



function colorRandomizer(listOfColors){
         var result = Math.floor(Math.random() * listOfColors.length );
         return listOfColors[result];
}

targetButton.addEventListener("click" , function(){
    let newRandomColor = colorRandomizer(randomColorValues);
    mainElement.style.backgroundColor = newRandomColor;
    targetArticle.innerText = originalText + newRandomColor;
})


simpleButton.addEventListener("click" , function () {
    mainElement.style.backgroundColor = backgroundColorValue;
    targetArticle.innerText = originalText + rgbaToHex(backgroundColorValue);
})  


hexButton.addEventListener("click", function (){
    mainElement.style.backgroundColor = backgroundColorValue;
    targetButton.addEventListener("click" , function(){
        let newRandomColor = colorRandomizer(hexColorValues);
        mainElement.style.backgroundColor = newRandomColor;
        targetArticle.innerText = originalText + newRandomColor;
    })
})