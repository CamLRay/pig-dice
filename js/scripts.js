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

function playerOneRoll() {
  let roll = theDie();
  if(roll === 1){
    playerOne.turnTotal = 0;
  } else {
    playerOne.updateTotal(roll);
  }
  return playerOne.turnTotal;
}

function playerTwoRoll() {
  let roll = theDie();
  if(roll === 1){
    playerTwo.turnTotal = 0;
  } else {
    playerTwo.updateTotal(roll);
  }
  return playerTwo.turnTotal;
}

function playerOneHold() {
  
}

console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());
console.log(playerOneRoll());

