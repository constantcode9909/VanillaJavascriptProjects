const listOfUsers = {
    susan:{
        imageSourceURL:"C:\\Users\\moham\\OneDrive\\Documents\\JsProjects\\VanillaJavascriptProjects\\QuotesProject\\susan smith.jpg" ,
        nameOfUser:"Susan Smith" ,
        job:"WEB DEVELOPER" ,
        description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    } ,

    anna:{
        imageSourceURL:"C:\\Users\\moham\\OneDrive\\Documents\\JsProjects\\VanillaJavascriptProjects\\QuotesProject\\anna.jpg" , 
        nameOfUser:"Anna Johnson" ,
        job:"WEB DESIGNER" ,
        description:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    } ,

    peter:{
        imageSourceURL:"C:\\Users\\moham\\OneDrive\\Documents\\JsProjects\\VanillaJavascriptProjects\\QuotesProject\\peter.jpg" ,
        nameOfUser:"Peter Jones" ,
        job:"INTERN" ,
        description:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    } ,

    bill:{
        imageSourceURL:"C:\\Users\\moham\\OneDrive\\Documents\\JsProjects\\VanillaJavascriptProjects\\QuotesProject\\bill anderson.jpg" ,
        nameOfUser:"Bill Anderson" ,
        job:"THE BOSS" ,
        description:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
};


const listOfUsersArrayVersion = Object.entries(listOfUsers);
const buttonsList = document.querySelectorAll("button");


// change the src attribute in the image element
function imageSourceModifier(){
    const userImage = document.querySelector("img");
    userImage.src = this.imageSourceURL;
}


// change user info by selecting their respective elements and changing their inner text according to their class values
function changeUserInfo(){
    const userInfoAreas = document.getElementsByTagName("p");
    const listOfUserInfoAreas = Object.values(userInfoAreas);
    for(let index = 0; index < listOfUserInfoAreas.length ; index++){
          const classValue = listOfUserInfoAreas[index].className;
          listOfUserInfoAreas[index].innerText = this[classValue];
    }
}


function specificName(data){
    const modifiedData = data.split(" ");
    return modifiedData[0].toLowerCase();
  }


// determine which one of the users is currently displayed
function userIndexFinder(){
    const targetTextValue = document.getElementById("nameOfUser").innerText;
    const targetName= specificName(targetTextValue);
    return listOfUsersArrayVersion.findIndex(function(element){
           return element[0] ===  targetName;
  })
}


function eventManager(event){
    const targetId = event.target.id;

    let currentUserIndex = userIndexFinder();
    if(targetId === "btn_previous")
    currentUserIndex = ((currentUserIndex - 1) + 4) % 4;
    else if(targetId === "btn_next")
    currentUserIndex = (currentUserIndex + 1) % 4;
    else {
        const currentResult = currentUserIndex;
        currentUserIndex = Math.floor(Math.random() * 4);
        while(currentResult === currentUserIndex){
            currentUserIndex = Math.floor(Math.random() * 4);
        }
    }

    const newUserIndex = listOfUsersArrayVersion[currentUserIndex][0];
    imageSourceModifier.call(listOfUsers[newUserIndex]);
    changeUserInfo.call(listOfUsers[newUserIndex]);
}


buttonsList.forEach((btn)=>{
    btn.addEventListener('click' , eventManager);
})


