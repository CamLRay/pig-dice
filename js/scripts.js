function PigDice() {
  this.players = {};
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
}

let playerOne = new Player("player 1", "Cameron", 0, 15);
let playerTwo = new Player("player 2", "Tony", 15, 45);

playerOne.updateTotal(6);
playerOne.updateTotal(5);
playerOne.updateScore();
console.log(playerOne);


function theDie() {
  return Math.floor(Math.random()*5)+1
}

