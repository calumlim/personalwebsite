//Get input
var input = document.getElementById("nameBox");

if (localStorage.clickcount>0) {
  document.getElementById("welcomeVideo").style.visibility = "hidden";
  document.getElementById("welcomeText").style.visibility = "hidden";
  document.getElementById("enterName").style.visibility = "hidden";
  document.getElementById("skipButton").style.visibility = "hidden";
}

//execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(e) {
  //cancel the default action, if needed
  e.preventDefault();
  //"enter" key = 13
  if (e.keyCode == 13) {
    hideWelcomePage();
    incrementClickCounter();
  }
});

//function to skip welcome skip the welcome page
function skipWelcomePage(){
  hideWelcomePage();
  incrementClickCounter();
}
//function to reset the welcome homepage
function resetWelcomePage() {
  document.getElementById("welcomeVideo").style.visibility = "visible";
  document.getElementById("welcomeVideo").style.opacity = 100;
  document.getElementById("welcomeText").style.visibility = "visible";
  document.getElementById("welcomeText").style.opacity = 100;
  document.getElementById("enterName").style.visibility = "visible";
  document.getElementById("enterName").style.opacity = 100;
  document.getElementById("skipButton").style.visibility = "visible";
  document.getElementById("skipButton").style.opacity = 100;

  localStorage.clickcount = 0;
}

//function to hide the welcome homepage
function hideWelcomePage() {
  document.getElementById("welcomeVideo").style.visibility = "hidden";
  document.getElementById("welcomeVideo").style.opacity = 0;
  document.getElementById("welcomeVideo").style.transition = "visibility 0s 1s, opacity 1s linear";

  document.getElementById("welcomeText").style.visibility = "hidden";
  document.getElementById("welcomeText").style.opacity = 0;
  document.getElementById("welcomeText").style.transition = "visibility 0s 1s, opacity 1s linear";

  document.getElementById("enterName").style.visibility = "hidden";
  document.getElementById("enterName").style.opacity = 0;
  document.getElementById("enterName").style.transition = "visibility 0s 1s, opacity 1s linear";

  document.getElementById("skipButton").style.visibility = "hidden";
  document.getElementById("skipButton").style.opacity = 0;
  document.getElementById("skipButton").style.transition = "visibility 0s 1s, opacity 1s linear";
}

//function to increment local click counter
function incrementClickCounter() {
  if (typeof(Storage)!== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
  }
}
