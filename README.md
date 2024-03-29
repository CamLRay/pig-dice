Rules of Pig Dice

A player rolls a single die

if the player rolls a 1, they score nothing and switch turns

if a player rolls any other number, it is added to their turn total and the players turn continues.

if a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

the first player to score 100 or more points wins.

Player objects {Player Name, turn total, score, ?button?, id}
Game Object {player objects, [player1 score, player2 score], dice function, [dice image array]}

Describe theDie();
  Test: "It should return a random number among 1-6"
  Code : theDie();
  Expected Output: 1 || 2 || 3 || 4 || 5 || 6

Describe PigDice();
  Test: "It should construct the game object"
  code: new PigDice();
  Expected Output: players: {}

Describe Player(playerName, turn total, score);
  Test: "It should construct the player object"
  Code: new Player(Name, 15, 15);
  Expected output: Player {playerName: name, turnTotal: 15, score: 15}

Describe PigDice.prototype.addPlayer();
  Test "It should add players to the PigDice Object"
  Code: pigDice.addPlayer(player);
  Expected Output: pigDice {player}

Describe PigDice.prototype.updateTotal();
  Test: "It should add a players roll to the turn total"
  Code: player1.updateTotal(5);
  Expect Output: player1 {turnTotal: 5}

Describe PigDice.prototype.updateScore();
  Test: "It should add a players turnTotal to their score"
  Code: playerOne.updateScore();
  Expect Output: playerOne {turnTotal:15 score:0+15}

  Test: "It should clear the turnTotal"
  Code: playerOne.updateScore();
  Expect Output: playerOne {turnTotal:0 score:15}

Describe playerOneRoll() && PlayerTwoRoll();
  Test: "It should roll the die, and update the turnScore of playerOne"
  Code: playerOneRoll();
  Expected Output: PlayerOne{turnTotal += roll}

  Test:"If the die roll is 1 TurnScore is set to 0"
  Code: playerOneRoll();
  Expected Output: playerOne{turnTotal = 0}

Describe PlayerOneHold() && PlayerTwoHold
  Test: "It should perform the updateScore method on the player object"
  Code: playerOneHold();
  Expected Output: playerOne{score += turnTotal}

  Test: "It should check if the players score is 100 or greater"
  Code: playerOneHold(); playerOne.score ==== 100
  Expected Output: "player one is the winner"

Describe: PigDice.prototype.updateGameType();
  Test:"It should add gameType to pigDice function."
  Code: pigDice.gameType("1p");
  Expected Output: pigDice {gameType: "1p"}

Describe: computerEasy();
  Test: "it should roll player two once and hold.
  Code: computerEasy();
  Expected Output: rolls once, holds


// UI note simple ui player one and two have seperate roll and hold buttons score is displayed above player
```Goals for today```
Ability to play against a computer

second approach, refactor how turns are controlled as a value of the player objects.
use a conditional to have to computer roll function to happen if its turn value is true.
create the player and computer object when game style is chosen.

add pigs