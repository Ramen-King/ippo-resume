window.onload = init;
//try 
function init(){
    hideContainer();
    setTimeout(activateOverlay, 2500);
    
    
}
function animate(event){
    const section = event.target;
    section.style.animate = '1s'
}

function activateOverlay(){
    const container = document.getElementById('display-menu');
    if (container.style.display === "none") {
        console.log('hi')
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
function hideContainer(){
    const container = document.getElementById('display-menu');
    container.style.display = "none";
}
function handleMenu(event){
    event.preventDefault();
    setTimeout(hideContainer, 100)
    console.log('pewpew')
    document.querySelector('img').src = "openingClickNL.gif";
    displayContent();
}
function displayContent(){
    const container = document.getElementById('display-content');
    const createLi = document.createElement('p');
        createLi.innerText = aboutMe.bio;
        container.appendChild(createLi);
    if (container.style.display === "none") {
        console.log('hi')
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
