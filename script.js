//menu buttons
const homeBtn = document.getElementById("Home");
const aboutBtn = document.getElementById("About");
const newsBtn = document.getElementById("News");
const contactBtn = document.getElementById("Contact");

//containers
const homeContainer = document.getElementById("Home-container");
const aboutContainer = document.getElementById("About-container");
const newsContainer = document.getElementById("News-container");
const contactContainer = document.getElementById("Contact-container");

//base url
const mainUrl = "https://index-ish.github.io/main/";


//looping fuction
function Checker(){
    //checks which menu button was pressed
    if(window.location.href == mainUrl + "#Home"){
        //changes the color of the selected button and resets the color of the other btns to the original color
        homeBtn.style.backgroundColor = "#4e58e4";
        aboutBtn.style.backgroundColor = "#3039bb";
        newsBtn.style.backgroundColor = "#3039bb";
        contactBtn.style.backgroundColor = "#3039bb";
        // set the selected container to display="block"
        homeContainer.style.display = "block";
        aboutContainer.style.display = "none";
        newsContainer.style.display = "none";
        contactContainer.style.display = "none";

    }
    
    else if(window.location.href == mainUrl + "#About"){
        homeBtn.style.backgroundColor = "#3039bb";
        aboutBtn.style.backgroundColor = "#4e58e4";
        newsBtn.style.backgroundColor = "#3039bb";
        contactBtn.style.backgroundColor = "#3039bb";

        homeContainer.style.display = "none";
        aboutContainer.style.display = "block";
        newsContainer.style.display = "none";
        contactContainer.style.display = "none";
    }
    
    else if(window.location.href == mainUrl + "#News"){
        homeBtn.style.backgroundColor = "#3039bb";
        aboutBtn.style.backgroundColor = "#3039bb";
        newsBtn.style.backgroundColor = "#4e58e4";
        contactBtn.style.backgroundColor = "#3039bb";

        homeContainer.style.display = "none";
        aboutContainer.style.display = "none";
        newsContainer.style.display = "block";
        contactContainer.style.display = "none";
    }
    
    else if(window.location.href == mainUrl + "#Contact"){
        homeBtn.style.backgroundColor = "#3039bb";
        aboutBtn.style.backgroundColor = "#3039bb";
        newsBtn.style.backgroundColor = "#3039bb";
        contactBtn.style.backgroundColor = "#4e58e4";

        homeContainer.style.display = "none";
        aboutContainer.style.display = "none";
        newsContainer.style.display = "none";
        contactContainer.style.display = "block";
    }
    
}


setInterval(Checker,100);
