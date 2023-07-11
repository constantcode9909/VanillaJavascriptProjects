"use strict";

const secondsContainer = document.querySelector(".secondes-container");
const minutesContainer = document.querySelector(".minutes-container");
const hoursContainer = document.querySelector(".hours-container");
const secondsPartContainer = document.querySelector(".seconds-parts");
const targetSpan = document.querySelector(".targetSpan");
let timer = null;

const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const pauseBtn = document.querySelector(".pause-btn");

function incrementTime(timevalue, targetContainer) {
	++timevalue;
	targetContainer.innerText =
	timevalue < 10 ? "0" + timevalue : timevalue.toString();
}

function btnStatus(eventContainer, status) {
	if (status === "disabled") {
		eventContainer.classList.add("disabled");
		eventContainer.classList.remove("button-hover", "button-active");
	} else {
		eventContainer.classList.remove("disabled");
		eventContainer.classList.add("button-hover", "button-active");
	}
}

function timeManger() {
	secondsPartContainer.classList.remove("hidden");
	targetSpan.classList.remove("hidden");

	btnStatus(startBtn, "disabled");
	btnStatus(pauseBtn, "active");
	btnStatus(resetBtn, "active");

	timer = setInterval(() => {
			let currentPartSeconds = Number(secondsPartContainer.innerText);
			let currentSecondsValue = Number(secondsContainer.innerText);
			let currentMinuteValue = Number(minutesContainer.innerText);
			let currentHourValue = Number(hoursContainer.innerText);

			if (currentPartSeconds === 59) {
				currentPartSeconds = -1;
				incrementTime(currentSecondsValue, secondsContainer);
				if (currentSecondsValue > 58) {
					currentSecondsValue = -1;
					incrementTime(currentSecondsValue, secondsContainer);
					incrementTime(currentMinuteValue, minutesContainer);
					if (currentMinuteValue > 58) {
						currentMinuteValue = -1;
						incrementTime(currentMinuteValue, minutesContainer);
						incrementTime(currentHourValue, hoursContainer);
					}
				}
			}
			incrementTime(currentPartSeconds, secondsPartContainer);
	}, 100);
}

startBtn.addEventListener("click", timeManger);

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    btnStatus(pauseBtn, "disabled");
    btnStatus(startBtn, "active");
    if(!resetBtn.classList.contains("disabled")) btnStatus(resetBtn, "active");
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    btnStatus(resetBtn, "disabled");
    btnStatus(startBtn, "active");
    btnStatus(pauseBtn, "disabled");
    secondsPartContainer.classList.add("hidden");
    targetSpan.classList.add("hidden");
    secondsContainer.innerText = "00";
    minutesContainer.innerText = "00";
    hoursContainer.innerText = "00";
    secondsPartContainer.innerText = "00";
});
