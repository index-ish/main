




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

//other buttons
const Easteregg = document.querySelector("a.double-click-here");

//text(a,p,h1,h2...)
const homeMainText = document.querySelector("p.Home-main-paragraph");

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


//checks for double click
Easteregg.addEventListener("dblclick", ()=>{
    var row1 = [" "," "," "," "," "," "," "," "," "," "];
    var row2 = [" "," "," "," "," "," "," "," "," "," "];
    var row3 = [" "," "," "," "," "," "," "," "," "," "];
    var row4 = [" "," "," "," "," "," "," "," "," "," "];
    var row5 = [" "," "," "," "," "," "," "," "," "," "];
    var row6 = [" "," "," "," "," "," "," "," "," "," "];
    var row7 = [" "," "," "," "," "," "," "," "," "," "];
    var row8 = [" "," "," "," "," "," "," "," "," "," "];
    var row9 = [" "," "," "," "," "," "," "," "," "," "];
    var row10 = [" "," "," "," "," "," "," "," "," "," "];
    
    homeMainText = row1[0] + row1[1] + row1[2] + row1[3] + row1[4] + row1[5] + row1[6] + row1[7] + row1[8] + row1[9] + "<br>" + row2[0] + row2[1] + row2[2] + row2[3] + row2[4] + row2[5] + row2[6] + row2[7] + row2[8] + row2[9] + "<br>" + row3[0] + row3[1] + row3[2] + row3[3] + row3[4] + row3[5] + row3[6] + row3[7] + row3[8] + row3[9] + "<br>" + row1[0] + row1[1] + row1[2] + row1[3] + row1[4] + row1[5] + row1[6] + row1[7] + row1[8] + row1[9] + "<br>" + row1[0] + row1[1] + row1[2] + row1[3] + row1[4] + row1[5] + row1[6] + row1[7] + row1[8] + row1[9] + "<br>" + row4[0] + row4[1] + row4[2] + row4[3] + row4[4] + row4[5] + row4[6] + row4[7] + row4[8] + row4[9] + "<br>" +


})


