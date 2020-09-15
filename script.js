




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
const mainUrl = "https://index-ish.github.io/main/index.html";


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

var xpos = 0;
var ypos = 0;

//checks for double click
Easteregg.addEventListener("dblclick", ()=>{

    var row1 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];
    var row2 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];
    var row3 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",];
    var row4 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;", "&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];
    var row5 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",];
    var row6 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",];
    var row7 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];
    var row8 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];
    var row9 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];

    var row10 = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;"];

    const row = [row1, row2, row3, row4, row5, row6, row7, row8,row9, row10]

    window.addEventListener("keydown", (e)=>{

        



        if(e.keyCode == 87 || e.keyCode == 38){
            ypos -= 1;
            
            
        }

        else if(e.keyCode == 83 || e.keyCode == 40){
            ypos += 1;
        }
        
        else if(e.keyCode == 68 || e.keyCode == 39){
            xpos += 1;
        }

        else if(e.keyCode == 65 || e.keyCode == 37){
            xpos -= 1;
        }
    })
    
    function UpdateFunDisplay(){
        homeMainText.innerHTML = row1.join("") + "<br>" + row2.join("") + "<br>" + row3.join("") + "<br>" + row4.join("") + "<br>" + row5.join("") + "<br>" + row6.join("") + "<br>" + row7.join("") + "<br>" + row8.join("") + "<br>" + row9.join("") + "<br>" + row10.join("") + "<br>";
        
        row[ypos][xpos] = "X";
        
    }

    setInterval(UpdateFunDisplay,100);

})


