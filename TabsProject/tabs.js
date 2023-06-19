const contentObject ={
    History:{
        name : "History",
        content: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    } , 

    Vision:{
        name : "Vision" ,
        content : "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
    } ,

    Goals:{
        name: "Goals" ,
        content : "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."
    }
}

const contentObjectList = Object.entries(contentObject);
const listItems = document.querySelectorAll("li");
const listOfIDs = ["History" , "Vision" , "Goals"];

function changeDisplay(){
    const article_header = document.getElementById("header");
    const textArea = document.querySelector(".article_body");
    article_header.innerText = this.name;
    textArea.innerText = this.content;
}


function hoverEffectModifier(element){
    listOfIDs.forEach((e)=>{
        const target = document.getElementById(e);
        if(e === element){
            target.classList.remove("hover_effect");
            target.classList.add("active")
            target.classList.remove("inactive");
        }
        else 
           {
            target.classList.add("hover_effect");
            target.classList.add("inactive");
           }
    })    
}


listItems.forEach((element => {
    element.addEventListener("click" , function(e){
        const idValue = e.target.id;
        const elementIndex = listOfIDs.indexOf(idValue);
        hoverEffectModifier(idValue);
        changeDisplay.call(contentObjectList[elementIndex][1]);
    })
}))