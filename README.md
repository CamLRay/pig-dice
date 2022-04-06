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
Test: "it should construct the player object"
Code: new Player(Name, 15, 15);
expected output: 
Player {playerName: name, turnTotal: 15, score: 15}