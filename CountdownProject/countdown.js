"use strict";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const deadlineTime = setGiveawayDate().getTime();
const days = document.querySelector(".Days");
const hours = document.querySelector(".Hours");
const mins = document.querySelector(".Mins");
const secs = document.querySelector(".Secs");
const currentDate = new Date().getTime();


// set the giveawy date
function setGiveawayDate(){
    // using the spread operator
    const args = [2023, 6, 2, 11, 30];
    const date = new Date(...args);
    const currentDay = date.getDate();
    date.setDate(currentDay);
    return date;
}


function getMonthString(date1){
    const monthIndex = date1.getMonth();
    return month[monthIndex];
}


// use the defined giveaway date and change the content of the page
function updateGiveawayDate(){
    const targetElement = document.getElementById("giveaway_time");
    const giveawyaDate = setGiveawayDate();
    let dateList = targetElement.innerText.split(" ");
    dateList[0] = giveawyaDate.getDate();
    dateList[1] = getMonthString(giveawyaDate);
    dateList[2] = giveawyaDate.getFullYear();
    const newDate = dateList.join(' ');
    targetElement.innerText = newDate;
}

updateGiveawayDate();


// an implementation of a countdown timer using the a function that will be passed to setInterval
// the date must be redefined every second to ensure the updated values are calculated properly
function updateCountDownTimer(){
    const now = new Date();
    const currentTime = now.getTime();
    let timeDifference = deadlineTime - currentTime;
    days.innerText = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    hours.innerText = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    mins.innerText = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    secs.innerText = Math.floor((timeDifference % (1000 * 60)) / 1000);
}



updateCountDownTimer();

setInterval(updateCountDownTimer , 1000);
