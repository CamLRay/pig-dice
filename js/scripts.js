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

let playerOne = new Player("player 1", "Cameron", 15, 15);
let playerTwo = new Player("player 2", "Tony", 15, 45);

function theDie() {
  return Math.floor(Math.random()*5)+1
}

