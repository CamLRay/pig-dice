function PigDice() {
  this.players = {};
}

let pigDice = new PigDice();
// ^^^^^^^database^^^^^^^^^
// vvvvvvvv Code vvvvvvvvvv

function Player(playerName, turnTotal, score) {
  this.playerName = playerName;
  this.turnTotal = turnTotal;
  this.score = score;
}

let playerOne = new Player("Cameron", 15, 15);

console.log(playerOne);

function theDie() {
  return Math.floor(Math.random()*5)+1
}

