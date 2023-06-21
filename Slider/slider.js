const sectionElement = document.querySelector(".container");
const btnList = document.querySelectorAll("button");
const imgURL = "url(sea.jpeg)"
const imgURL2 = "url(\"ananas on a beach.jpg\")";
const img = document.querySelector("img");
let sliderIndex = 1;

function modifier(index){
        if(index % 2 != 0){
            if(index === 3)
            sectionElement.style.backgroundImage = imgURL;
            else
            sectionElement.style.backgroundImage = imgURL2;
        }else{
            sectionElement.style.backgroundImage = "none";
            sectionElement.style.backgroundColor = "blue";
        }
}

function textUpdate(value){
    const paragraph = document.querySelector("p");
    const content = value.toString();
    paragraph.innerText = content;
}

function revealButton(value , e){
    if(value === 4){
        e.style.display = "none";
        // img.style.display = "inline-block";
        img.classList.toggle("img_reveal");
    }else if(value === 1){
        e.style.display = "none";
    }
}


btnList.forEach((e)=>{
     e.addEventListener("click",(event)=>{
        if(event.target.classList.contains("btn_next")){
            ++sliderIndex;
            e.previousElementSibling.style.display = "inline-block";
            revealButton(sliderIndex , e);
        }else{
            --sliderIndex;
            if(sliderIndex === 3){
                img.classList.toggle("img_reveal");
            }
            e.nextElementSibling.style.display = "inline-block";
            revealButton(sliderIndex , e);
        }
        modifier(sliderIndex);
        textUpdate(sliderIndex);
     })
})