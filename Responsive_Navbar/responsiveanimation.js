const dispalyLink = document.querySelector("a");

function dispalyLinkChanger(){
    const menuIcon = document.getElementById("target_icon");
    menuIcon.style.color = "gray";
    dispalyLink.classList.add("iconAnimation");
}

function displayHeightAnimation(){
    const listMenu = document.getElementById('menu_container');
    listMenu.classList.toggle("heightAnimation");
}

function menuDisplayer(){
    event.preventDefault();
    dispalyLinkChanger();
    displayHeightAnimation();
}

dispalyLink.addEventListener("click", menuDisplayer);