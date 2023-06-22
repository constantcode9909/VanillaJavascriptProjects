"use strict";
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let date = new Date();

function updateDateBy10Days(){
    let date = new Date(2023 , 6 , 2 , 11 , 30);
    const currentDay = date.getDate();
    console.log(date);
    date.setDate(currentDay);
    return date;
}

function getMonthString(date1){
    const monthIndex = date1.getMonth();
    return month[monthIndex];
}

function updateGiveawayDate(){
    const targetElement = document.getElementById("giveaway_time");
    const giveawyaDate = updateDateBy10Days();
    let targetElementListVersion = targetElement.innerText.split(" ");
    targetElementListVersion[0] = giveawyaDate.getDate();
    targetElementListVersion[1] = getMonthString(giveawyaDate);
    targetElementListVersion[2] = giveawyaDate.getFullYear();
    const newDate = targetElementListVersion.join(' ');
    targetElement.innerText = newDate;
}

updateGiveawayDate();


const deadlineTime = updateDateBy10Days().getTime();
const days = document.querySelector(".Days");
const hours = document.querySelector(".Hours");
const mins = document.querySelector(".Mins");
const secs = document.querySelector(".Secs");


setInterval(()=>{
    const date2 = new Date();
    const currentTime = date2.getTime();
    let distance = deadlineTime - currentTime;
    days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    mins.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secs.innerText = Math.floor((distance % (1000 * 60)) / 1000);
},1000)
