function showRightSide() {
  var rightMenuSVG = document.getElementById("rightMenuSVG");
  shrinkLeftMenu();
  rightMenuSVG.style.zIndex = 1;
  rightMenuSVG.style.animation = "";
  rightMenuSVG.style.animation = "slideleft-hover 1s forwards";
  rightMenuSVG.style.animationDelay = "0.15s";
}

function shrinkLeftMenu() {
  var leftMenuSVG = document.getElementById("leftMenuSVG");

  leftMenuSVG.style.left = "0%";
  leftMenuSVG.style.animation = "";
  leftMenuSVG.style.animation = "shrink-leftscreen 1s forwards";
  leftMenuSVG.style.animationDelay = "0.15s";

  var menuTabs = document.getElementById("welcomeTitle");
  var menu = document.getElementById("menuOptions");

  //menuTabs.style.marginLeft = "50px";
  menuTabs.style.left = "0%";
  menuTabs.style.animation = "";
  menuTabs.style.animation = "shrink-leftmenu 1s forwards";
  menuTabs.style.animationDelay = "0.15s";
  changeText("Title", "L I M")
  changeText("menuIntro", "intro");
  changeText("menuExperiences", "experiences");
  changeText("menuPortfolio", "portfolio");
  changeText("menuContact", "contact");
  changeText("menuCredit", "credit");

  //menuTabs.style.minWidth = "10%";
}

function changeText(e,i) {
  element = document.getElementById(e)
  element.innerHTML = i;
  element.style.animation = "fadein 1s";
}

function glowSelectedText(e){
  const listItems = document.querySelectorAll('#menuOptions li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "rgb(31, 31, 31)";
    if (listItems[i]!==e){
      listItems[i].onmouseover = function() {
        listItems[i].style.color = "white";
      }
      listItems[i].onmouseout = function() {
        listItems[i].style.color = "rgb(31, 31, 31)";
      }
    }
  }
  e.style.color = "white";
  e.onmouseover = null;
  e.onmouseout = null;
}
