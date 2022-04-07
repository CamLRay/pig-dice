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
};

Player.prototype.updateScore = function() {
  this.score += this.turnTotal;
  this.turnTotal = 0;
};

Player.prototype.updateName = function(newName) {
  this.playerName = newName;
};
// Player Objects
let playerOne = new Player("player 1", "Player 1", 0, 0); 
let playerTwo = new Player("player 2", "Player 2", 0, 0);

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

// $("#game")---game div  $("#player-selection")---player selection div $("#number-of-players")--- player selection form
//UI Logic 
$(document).ready(function(){ 
  $("#number-of-players").submit(function(event){
    event.preventDefault();
    $("#game").removeClass("hidden");
    $("#player-selection").addClass("hidden");
  });

  $("#player-one-name").text("Enter a Name");
  $("#player-two-name").text("Enter a Name");

  $("#player-one-name").click(function(){
    $("#player-one-name").addClass("hidden");
    $("#player-one-name-update").parent().parent().removeClass("hidden")
  });

  $("#player-two-name").click(function(){
    $("#player-two-name").addClass("hidden");
    $("#player-two-name-update").parent().parent().removeClass("hidden")
  });

  $("#player-one-name-update").parent().submit(function(event){
    event.preventDefault();
    playerOne.playerName = $("#player-one-name-update").val();
    if (playerOne.playerName.trim() === "") {
      
    } else {
      $("#player-one-name").text(playerOne.playerName);
      $("#player-one-name").removeClass("hidden");
      $("#player-one-name-update").parent().parent().addClass("hidden")
    }
  });

  $("#player-two-name-update").parent().submit(function(event){
    event.preventDefault();
    playerTwo.playerName = $("#player-two-name-update").val();
    if (playerTwo.playerName.trim() === "") {
      
    } else {
      $("#player-two-name").text(playerTwo.playerName);
      $("#player-two-name").removeClass("hidden");
      $("#player-two-name-update").parent().parent().addClass("hidden")
    }
  });


// gameplay below this
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
      $("#winner").children("h1").text(playerOne.playerName+ " is the winner!")
    } else if (playerTwo.score >= 100) {
      $("#game").addClass("hidden")
      $("#winner").removeClass("hidden")
      $("#winner").children("h1").text(playerTwo.playerName+ " is the winner!")
    } else {}
  });

  $("#play-again").click(function() {
    playerOne.turnTotal = 0;
    playerOne.score = 0;
    playerTwo.turnTotal = 0;
    playerTwo.score = 0;
    $("#player-one-turn-total, #player-one-score, #player-two-turn-total, #player-two-score").empty();
    $("#winner, #game").toggleClass("hidden");
  });


});

