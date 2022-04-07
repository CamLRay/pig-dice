function PigDice() {
  this.players = {};
  this.lastRoll = "";
  this.gameType = "";
  this.images = ["dOne.png", "dTwo.png", "dThree.png", "dFour.png", "dFive.png", "dSix.png"];
}

let pigDice = new PigDice();
// ^^^^^^^database^^^^^^^^^
// vvvvvvvv Code vvvvvvvvvv

PigDice.prototype.addPlayer = function(player) {
  this.players[player.playerNum] = player;
};

PigDice.prototype.updateGameType = function(selectedGameType) {
  this.gameType = selectedGameType;
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

// Business Logic

function theDie() {
  return Math.floor(Math.random()*5)+1
}

function playerOneRoll() {
  let roll = theDie();
  pigDice.lastRoll = roll;
  if(roll === 1){
    pigDice.players.playerOne.turnTotal = 0;
  } else {
    pigDice.players.playerOne.updateTotal(roll);
  }
  return pigDice.players.playerOne.turnTotal;
}

function playerTwoRoll() {
  let roll = theDie();
  pigDice.lastRoll = roll;
  if(roll === 1){
    pigDice.players.playerTwo.turnTotal = 0;
  } else {
    pigDice.players.playerTwo.updateTotal(roll);
  }
  return pigDice.players.playerTwo.turnTotal;
}

function playerOneHold() {
  pigDice.players.playerOne.updateScore();
  return pigDice.players.playerOne.score;
}

function playerTwoHold() {
  pigDice.players.playerTwo.updateScore();
  return pigDice.players.playerTwo.score;
}

function computerEasy() {
  playerTwoRoll();
  playerTwoHold();
}

//UI Logic 
$(document).ready(function(){ 
  $("#number-of-players").submit(function(event){
    event.preventDefault();
    $("#game").removeClass("hidden");
    $("#player-selection").addClass("hidden");
    pigDice.updateGameType($("#number-of-players").children().val());

    if (pigDice.gameType === "1p"){
      let playerOne = new Player("playerOne", "Player 1", 0, 0);
      pigDice.addPlayer(playerOne);
      let computerPlayer = new Player("playerTwo", "Computer", 0, 0);
      pigDice.addPlayer(computerPlayer);
    } else if(pigDice.gameType === "2p") {
      let playerOne = new Player("playerOne", "Player 1", 0, 0);
      pigDice.addPlayer(playerOne);
      let playerTwo = new Player("playerTwo", "Player 2", 0, 0);
      pigDice.addPlayer(playerTwo);
    } else {
      alert("select a player!");
    }
  });

  $("#number-of-players").submit(function(event){
    event.preventDefault();
    if(pigDice.gameType === "2p") {
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
        pigDice.players.playerOne.playerName = $("#player-one-name-update").val();
        if (pigDice.players.playerOne.playerName.trim() === "") {
          
        } else {
          $("#player-one-name").text(pigDice.players.playerOne.playerName);
          $("#player-one-name").removeClass("hidden");
          $("#player-one-name-update").parent().parent().addClass("hidden")
        }
      });

      $("#player-two-name-update").parent().submit(function(event){
        event.preventDefault();
        pigDice.players.playerTwo.playerName = $("#player-two-name-update").val();
        if (pigDice.players.playerTwo.playerName.trim() === "") {
          
        } else {
          $("#player-two-name").text(pigDice.players.playerTwo.playerName);
          $("#player-two-name").removeClass("hidden");
          $("#player-two-name-update").parent().parent().addClass("hidden")
        }
      });


    // gameplay below this
      $("#player-one-roll").click(function(){
        playerOneRoll();
        $("#player-one-turn-total").text(pigDice.players.playerOne.turnTotal);
        $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
      });

      $("#player-one-hold").click(function(){
        playerOneHold();
        $("#player-one-turn-total").empty();
        $("#player-one-score").text(pigDice.players.playerOne.score);
        $("#player-one-name, #player-two-name").toggleClass("highlight");
        $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").toggleClass("hidden")
      });

      $("#player-two-roll").click(function(){
        playerTwoRoll();
        $("#player-two-turn-total").text(pigDice.players.playerTwo.turnTotal);
        $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
      });

      $("#player-two-hold").click(function(){
        playerTwoHold();
        $("#player-two-turn-total").empty();
        $("#player-two-score").text(pigDice.players.playerTwo.score);
        $("#player-one-name, #player-two-name").toggleClass("highlight");
        $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").toggleClass("hidden")
      });

      $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").click(function() {
        if (pigDice.lastRoll === 1) {
          $("#player-one-name, #player-two-name").toggleClass("highlight");
          $("#player-one-roll, #player-one-hold, #player-two-roll, #player-two-hold").toggleClass("hidden")
        }
        if (pigDice.players.playerOne.score >= 100) {
          $("#game").addClass("hidden")
          $("#winner").removeClass("hidden")
          $("#winner").children("h1").text(pigDice.players.playerOne.playerName+ " is the winner!")
        } else if (pigDice.players.playerTwo.score >= 100) {
          $("#game").addClass("hidden")
          $("#winner").removeClass("hidden")
          $("#winner").children("h1").text(pigDice.players.playerTwo.playerName+ " is the winner!")
        } else {}
      });
    } else {
      //single player logic goes here
      $("#player-one-name").text("Enter a Name");
      $("#player-two-name").text("Computer");
      $("#player-one-name").click(function(){
        $("#player-one-name").addClass("hidden");
        $("#player-one-name-update").parent().parent().removeClass("hidden")
      });
      $("#player-one-name-update").parent().submit(function(event){
        event.preventDefault();
        pigDice.players.playerOne.playerName = $("#player-one-name-update").val();
        if (pigDice.players.playerOne.playerName.trim() === "") {
          
        } else {
          $("#player-one-name").text(pigDice.players.playerOne.playerName);
          $("#player-one-name").removeClass("hidden");
          $("#player-one-name-update").parent().parent().addClass("hidden")
        }
      });
      $("#player-one-roll").click(function(){
        playerOneRoll();
        if (pigDice.lastRoll === 1) {
          computerEasy();
        $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
        $("#player-two-score").text(pigDice.players.playerTwo.score);
        }
        $("#player-one-turn-total").text(pigDice.players.playerOne.turnTotal);
        $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
      });
      $("#player-one-hold").click(function(){
        playerOneHold();
        $("#player-one-turn-total").empty();
        $("#player-one-score").text(pigDice.players.playerOne.score);
        computerEasy();
        $("#die-roll").attr("src", "img/"+pigDice.images[pigDice.lastRoll-1]);
        $("#player-two-score").text(pigDice.players.playerTwo.score);
      });
      $("#player-one-roll, #player-one-hold").click(function(){
      if (pigDice.players.playerOne.score >= 100) {
        $("#game").addClass("hidden")
        $("#winner").removeClass("hidden")
        $("#winner").children("h1").text(pigDice.players.playerOne.playerName+ " is the winner!")
      } else if (pigDice.players.playerTwo.score >= 100) {
        $("#game").addClass("hidden")
        $("#winner").removeClass("hidden")
        $("#winner").children("h1").text(pigDice.players.playerTwo.playerName+ " is the winner!")
      } else {}
    });
    }
  });

  $("#play-again").click(function() {
    pigDice.players.playerOne.turnTotal = 0;
    pigDice.players.playerOne.score = 0;
    pigDice.players.playerTwo.turnTotal = 0;
    pigDice.players.playerTwo.score = 0;
    $("#player-one-turn-total, #player-one-score, #player-two-turn-total, #player-two-score").empty();
    $("#winner, #game").toggleClass("hidden");
  });


});

