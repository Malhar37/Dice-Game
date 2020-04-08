var r1 = Math.floor(Math.random()*6)+1;
var randomsource = "images/dice" + r1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomsource);
var r2 = Math.floor(Math.random()*6)+1;
 var randomsource1 = "images/dice" + r2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomsource1);
if(r1>r2)
document.querySelector("h1").innerHTML="Player 1 Wins!";
else if(r1==r2)
document.querySelector("h1").innerHTML="Draw!";
else
document.querySelector("h1").innerHTML="Player 2 Wins!";