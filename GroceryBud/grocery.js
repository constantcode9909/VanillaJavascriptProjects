"use strict";

const submitBtn = document.getElementById("submit");
const warning = document.querySelector(".warning_text");
const inputData = document.getElementById("info_text");
const form = document.querySelector(".input_field");
const inputField = document.querySelector(".input_container");
const clearBtn = document.querySelector(".clear_btn");



function defaultBehavior(){
    form.addEventListener("submit" , (e)=>{
        e.preventDefault()
    })
}


function setUpElement(type, classValue){
    const newElement = document.createElement(type);
    newElement.classList.add(classValue);
    return newElement;
}


function linkElements(parent, child){
    parent.appendChild(child);
}


function toggleRevealClass(element, value){
    value === 1 ? element.classList.add("reveal") : element.classList.remove("reveal");
}


function createContent(){
    const item = setUpElement("div", "item");
    const userContent = setUpElement("p", "user_content");
    const linkContainer = setUpElement("div", "link_container");
    const editLink = setUpElement("a", "edit_link");
    const deleteLink = setUpElement("a", "delete_link");

    linkElements(inputField, item);
    linkElements(item, userContent);
    linkElements(item, linkContainer);
    linkElements(linkContainer, editLink);
    linkElements(linkContainer, deleteLink);

}


function deleteList(){
    const items = document.querySelectorAll(".item");
    items.forEach((e)=>{
        e.remove();
    })
}


function adjustLinks(){
    const listOfContainers = document.querySelectorAll(".link_container");
    const parentElement = listOfContainers[listOfContainers.length - 1];
    const editLink = setUpElement("a", "edit_link");
    editLink.setAttribute("href", "");
    const deleteLink = setUpElement("a", "delete_link");
    deleteLink.setAttribute("href", "");
    editLink.innerText = "edit";
    deleteLink.innerText = "delete";
    parentElement.appendChild(editLink);
    parentElement.appendChild(deleteLink);
    toggleRevealClass(editLink, 1);
    toggleRevealClass(deleteLink, 1);
}

function banner(message, colorValue){
    warning.innerText = message;
    warning.style.color = colorValue;
    toggleRevealClass(warning, 1);
    setTimeout(()=>{
     warning.classList.toggle("reveal");
    },2000)   
}



submitBtn.addEventListener("click" , ()=>{
    defaultBehavior();
    const data = inputData.value;
    if(data.length === 0) {
    banner("please add an item", "rgb(223, 176, 176)");
    }else {
    banner("item added successfully", "rgb(99, 223, 126)");
    createContent();
    let  listOfData = document.querySelectorAll(".user_content");
    listOfData[listOfData.length - 1].innerText = data;
    adjustLinks();
    inputData.value = "";
    toggleRevealClass(clearBtn, 1);

    const deleteLink = document.querySelectorAll(".delete_link");
    deleteLink.forEach((e)=>{
        e.addEventListener("click", function(event){
            event.preventDefault();
            e.parentElement.previousElementSibling.parentElement.remove();
        })
    })
    }
})



clearBtn.addEventListener("click", ()=>{
    deleteList();
    toggleRevealClass(clearBtn, 2);
})


