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
  this.turnTotal = 0;
}

let playerOne = new Player("player 1", "Cameron", 0, 0);
let playerTwo = new Player("player 2", "Tony", 0, 0);

// // hard coded gameplay
// playerOne.updateTotal(6);
// playerOne.updateTotal(5);
// playerOne.updateScore();
// playerTwo.updateTotal(3);
// playerTwo.updateTotal(2);
// playerTwo.updateTotal(6);
// playerTwo.updateScore();
// console.log(playerOne);
// console.log(playerTwo);
// // hard coded gameplay

// Business Logic

function theDie() {
  return Math.floor(Math.random()*5)+1
}

// Describe playerOneRoll();
// Test: "It should roll the die, and update the turnScore of playerOne"
// Code: playerOneRoll();
// Expected Output: PlayerOne{turnTotal += roll}

// roll the Die take that number add it to the playerOne turnTotal If the roll is 1 playerOne turn total goes to 0 and the turn ends
//let playerOne = new Player("player 1", "Cameron", 0, 0);
function playerOneRoll() {
  let roll = theDie();
  playerOne.updateTotal(roll);
  return playerOne.turnTotal;
}

console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());

