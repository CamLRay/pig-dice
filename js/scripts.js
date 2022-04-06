function PigDice() {
  this.players = {};
  this.lastRoll = {};
  this.images = ["dOne.png", "dTwo.png", "dThree.png", "dFour.png", "dFive.png", "dSix.png"];
}

let pigDice = new PigDice();
// ^^^^^^^database^^^^^^^^^
// vvvvvvvv Code vvvvvvvvvv

PigDice.prototype.addPlayer = function(player) {
  this.players[player.playerNum] = player;
};

function Player(playerNum, playerName, turnTotal, score) {
  this.playerNum = playerNum;
  this.playerName = playerName;
  this.turnTotal = turnTotal;
  this.score = score;
}

Player.prototype.updateTotal = function(roll) {
  this.turnTotal += roll;
}

Player.prototype.updateScore = function() {
  this.score += this.turnTotal;
  this.turnTotal = 0;
}

let playerOne = new Player("player 1", "Cameron", 0, 0);
let playerTwo = new Player("player 2", "Tony", 0, 0);

// Business Logic

function theDie() {
  return Math.floor(Math.random()*5)+1
}

function playerOneRoll() {
  let roll = theDie();
  pigDice.lastRoll = roll;
  if(roll === 1){
    playerOne.turnTotal = 0;
  } else {
    playerOne.updateTotal(roll);
  }
  return playerOne.turnTotal;
}

function playerTwoRoll() {
  let roll = theDie();
  pigDice.lastRoll = roll;
  if(roll === 1){
    playerTwo.turnTotal = 0;
  } else {
    playerTwo.updateTotal(roll);
  }
  return playerTwo.turnTotal;
}

function playerOneHold() {
  playerOne.updateScore();
  return playerOne.score;
}

function playerTwoHold() {
  playerTwo.updateScore();
  return playerTwo.score;
}


//UI Logic 
$(document).ready(function(){ 
  $("#player-one-name").text(playerOne.playerName);
  $("#player-two-name").text(playerTwo.playerName);

  $("#player-one-roll").click(function(){
    playerOneRoll();
    $("#player-one-turn-total").text(playerOne.turnTotal);
    $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
  });

  $("#player-one-hold").click(function(){
    playerOneHold();
    $("#player-one-turn-total").empty();
    $("#player-one-score").text(playerOne.score);
    $("#player-one-name, #player-two-name").toggleClass("highlight");
    $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").toggleClass("hidden")
  });

  $("#player-two-roll").click(function(){
    playerTwoRoll();
    $("#player-two-turn-total").text(playerTwo.turnTotal);
    $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
  });

  $("#player-two-hold").click(function(){
    playerTwoHold();
    $("#player-two-turn-total").empty();
    $("#player-two-score").text(playerTwo.score);
    $("#player-one-name, #player-two-name").toggleClass("highlight");
    $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").toggleClass("hidden")
  });
  $("button").click(function() {

    if (pigDice.lastRoll === 1) {
      $("#player-one-name, #player-two-name").toggleClass("highlight");
      $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").toggleClass("hidden")
    }
    if (playerOne.score >= 100) {
      $("#game").addClass("hidden")
      $("#winner").removeClass("hidden")
      $("#winner").html("<h1>"+ playerOne.playerName+ " is the winner!" +"</h1>")
    } else if (playerTwo.score >= 100) {
      $("#game").addClass("hidden")
      $("#winner").removeClass("hidden")
      $("#winner").html("<h1>"+ playerTwo.playerName+ " is the winner!" +"</h1>")
    } else {}
  });

  
});

//$() <---- selector $("itembeingselected") -> #id's .classes htmlTag
// html seperated-by-dash
// function and variables lowerCamelCase
// constructors UpperCamelCase