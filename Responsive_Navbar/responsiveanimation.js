const dispalyLink = document.querySelector("a");

function displayHeightAnimation(){
    const listMenu = document.getElementById('menu_container');
    listMenu.classList.toggle("heightAnimation");
}

function menuDisplayer(){
    event.preventDefault();
    // dispaly Link Animation
    dispalyLink.classList.toggle("iconAnimation");
    displayHeightAnimation();
}

dispalyLink.addEventListener("click", menuDisplayer);