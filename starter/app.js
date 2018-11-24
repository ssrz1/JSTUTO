/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//btn is a function and we are using without btn() simply because btn is a callback function and it will not be called by us instead eventListner will call it.
//document.querySelector(".btn-roll").addEventListener("click", btn);

//annonymus fuction is function which donot have a name and simply it can not be used again tou btn ka yahein kaam lay lo function bana k
document.querySelector(".btn-roll").addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6 + 1);

  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";
});

//floor basicaly truncate after decimal part and give us single digit.
//dice = Math.floor(Math.random() * 6 + 1);

//querySelecter are use to select element from web page.
//document.querySelector("#current-" + activePlayer).textContent = dice;
//when we use css class we us . operator
