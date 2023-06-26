"use strict";

const submitBtn = document.getElementById("submit");
const warning = document.querySelector(".warning_text");
const inputData = document.getElementById("info_text");
const form = document.querySelector(".input_field");
const inputField = document.querySelector(".input_container");
const clearBtn = document.querySelector(".clear_btn");

// prevent the submit behavior of the form element
function defaultBehavior() {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});
}

// create a new element besed on the type and add a class value to it
function setUpElement(type, classValue) {
	const newElement = document.createElement(type);
	newElement.classList.add(classValue);
	return newElement;
}

function linkElements(parent, child) {
	parent.appendChild(child);
}

function toggleRevealClass(element, value) {
	value === 1
		? element.classList.add("reveal")
		: element.classList.remove("reveal");
}

// create the content that div element and its children that will hold the user input
function createContent() {
	const item = setUpElement("div", "item");
	const userContent = setUpElement("p", "user_content");
	const linkContainer = setUpElement("div", "link_container");
	const editLink = setUpElement("a", "edit_link");
	const deleteLinks = setUpElement("a", "delete_link");

	linkElements(inputField, item);
	linkElements(item, userContent);
	linkElements(item, linkContainer);
	linkElements(linkContainer, editLink);
	linkElements(linkContainer, deleteLinks);
}

// delete all created items that were storing user input
function deleteList() {
	const items = document.querySelectorAll(".item");
	items.forEach((e) => {
		e.remove();
	});
}

// create the edit and delete links and keep them hidden
function adjustLinks() {
	const listOfContainers = document.querySelectorAll(".link_container");
	const parentElement = listOfContainers[listOfContainers.length - 1];
	const editLink = setUpElement("a", "edit_link");
	editLink.setAttribute("href", "");
	const deleteLinks = setUpElement("a", "delete_link");
	deleteLinks.setAttribute("href", "");
	editLink.innerText = "edit";
	deleteLinks.innerText = "delete";
	linkElements(parentElement, editLink);
	linkElements(parentElement, deleteLinks);
	toggleRevealClass(editLink, 1);
	toggleRevealClass(deleteLinks, 1);
}

// a function to display a message to the user on top og the list based on an actio he performed
function banner(message, colorValue) {
	warning.innerText = message;
	warning.style.color = colorValue;
	toggleRevealClass(warning, 1);
	setTimeout(() => {
		warning.classList.toggle("reveal");
	}, 2000);
}

// delete all the items in the list and hide the clear items button
function checkListContent() {
	const listComponents = document.querySelectorAll(".item");
	if (listComponents.length === 0) {
		toggleRevealClass(clearBtn, 2);
	}
}

// set the delete option on the delete link
function deleteOption() {
	const deleteLinks = document.querySelectorAll(".delete_link");
	deleteLinks.forEach((e) => {
		e.addEventListener("click", function (event) {
			event.preventDefault();
			e.parentElement.previousElementSibling.parentElement.remove();
			banner("Item Removed", "rgb(223, 176, 176)");
			inputData.value = "";
			submitBtn.innerText = "Submit";
		});
	});
}

// set the edit option on the edit link and add an event listener to the submit button to make change the selected user input
function editOption() {
	const editLinks = document.querySelectorAll(".edit_link");
	editLinks.forEach((e) => {
		e.addEventListener("click", (event) => {
			toggleRevealClass(e, 2);
			event.preventDefault();
			const contentHolder = e.parentElement.previousElementSibling;
			submitBtn.innerText = "EDIT";
			inputData.value = contentHolder.innerText;
			function test() {
				contentHolder.innerText = inputData.value;
				submitBtn.innerText = "Submit";
				inputData.value = "";
				garbageCollector();
				banner("Value Changed", "rgb(99, 223, 126)");
				submitBtn.removeEventListener("click", test);
				toggleRevealClass(e, 1);
			}
			submitBtn.addEventListener("click", test);
		});
	});
}

// makes the user input data starts with capital
function captalise(name) {
	let dataList = name.split("");
	dataList[0] = dataList[0].toUpperCase();
	return dataList.join("");
}

// display the user input inside the list
function displayItem(value) {
	createContent();
	let listOfData = document.querySelectorAll(".user_content");
	listOfData[listOfData.length - 1].innerText = value;
	adjustLinks();
	inputData.value = "";
	toggleRevealClass(clearBtn, 1);
	setInterval(checkListContent, 1000);
	deleteOption();
	editOption();
}

function eventManager() {
	defaultBehavior();
	const data = inputData.value;

	if (data.length === 0) {
		banner("please add an item", "rgb(223, 176, 176)");
	} else {
		const modifiedData = captalise(data);
		banner("item added successfully", "rgb(99, 223, 126)");
		displayItem(modifiedData);
	}
}

//  a function to delete the empty elements that may be creted when triggering the edit click event on the submit button
function garbageCollector() {
	const itemList = document.querySelectorAll(".item");
	for (let index = 0; index < itemList.length; index++) {
		if (itemList[index].firstElementChild.innerText === "") {
			itemList[index].remove();
		}
	}
}

submitBtn.addEventListener("click", eventManager);

clearBtn.addEventListener("click", () => {
	deleteList();
	toggleRevealClass(clearBtn, 2);
});
