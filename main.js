window.onload = init;

function init(){
    displayMenu();
    let buttons = document.getElementsByClassName('nav-item');
    const allButtons = Array.from(buttons);
    allButtons.forEach(value => value.addEventListener('click', loadingAnimation))
 
    console.log(Array.from(buttons));
   
    
     
}
function animate(event){
    const section = event.target;
    section.style.animate = '1s'
}
function buttons(event){
event.preventDefault();

}
function displayMenu(){
    const container = document.querySelector('#display-menu');
    container.style.display = "block";
    console.log(container.style.display)
    //container.( item => {item.addEventListener('click', loadingAnimation)})

    //container.forEach(navItem => navItem.addEventListener('click', loadingAnimation));
     if (container.style.display === "none") {
        container.style.display = "block";
}
}

function displayContent(){
    const container = document.getElementById('display-content');
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }

}




//reusables
function backButton(event){
    event.preventDefault();
    document.getElementById('back-button').addEventListener('click', displayMenu)
}


function loadingAnimation(){
    document.querySelector('img').src = "openingClickNL.gif";

    
}
//img tag will take care of all backgrounds
//"main-container" will be the main canvas;
//set a timeout to allow animation to run to the last frame.
//invoke display-menu to change display value
//for each section, add a eventlistener to change display value & .src value
//set timeout to again for when the loading animation finishes ** maybe i should make all the gifs the same length...**
//invoke display-content to change display value