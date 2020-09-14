




/*

       _  _____ 
      | |/ ____|
      | | (___  
  _   | |\___ \ 
 | |__| |____) |
  \____/|_____/ 

  */








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
        homeBtn.style.backgroundColor = "#353535";
        aboutBtn.style.backgroundColor = "#272727";
        newsBtn.style.backgroundColor = "#272727";
        contactBtn.style.backgroundColor = "#272727";
        // set the selected container to display="block"
        homeContainer.style.display = "block";
        aboutContainer.style.display = "none";
        newsContainer.style.display = "none";
        contactContainer.style.display = "none";

    }
    
    else if(window.location.href == mainUrl + "#About"){
        homeBtn.style.backgroundColor = "#272727";
        aboutBtn.style.backgroundColor = "#353535";
        newsBtn.style.backgroundColor = "#272727";
        contactBtn.style.backgroundColor = "#272727";

        homeContainer.style.display = "none";
        aboutContainer.style.display = "block";
        newsContainer.style.display = "none";
        contactContainer.style.display = "none";
    }
    
    else if(window.location.href == mainUrl + "#News"){
        homeBtn.style.backgroundColor = "#272727";
        aboutBtn.style.backgroundColor = "#272727";
        newsBtn.style.backgroundColor = "#353535";
        contactBtn.style.backgroundColor = "#272727";

        homeContainer.style.display = "none";
        aboutContainer.style.display = "none";
        newsContainer.style.display = "block";
        contactContainer.style.display = "none";
    }
    
    else if(window.location.href == mainUrl + "#Contact"){
        homeBtn.style.backgroundColor = "#272727";
        aboutBtn.style.backgroundColor = "#272727";
        newsBtn.style.backgroundColor = "#272727";
        contactBtn.style.backgroundColor = "#353535";

        homeContainer.style.display = "none";
        aboutContainer.style.display = "none";
        newsContainer.style.display = "none";
        contactContainer.style.display = "block";
    }
    
}


setInterval(Checker,100);


