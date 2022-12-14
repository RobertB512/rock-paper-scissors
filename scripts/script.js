// ----- steps to make the game -----
// declare needed variables and functions
    // make a function that will play multiple rounds
        // might be able to use a loop
        
// computer picks rock, paper, or scissors
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3) + 1
  let computerChoice;
 
  if (ranNum === 1) {
    computerChoice = "rock";
  } else if (ranNum === 2) {
    computerChoice = "paper";
  } else if (ranNum === 3) {
    computerChoice = "scissors";
  } else {
    console.log("computer could not pick a choice");
  }
  return computerChoice;
}

// set player and computer choices
let computerMove = getComputerChoice();
let playerMove = "rock"; // this will eventually come from a choice made through the UI

// play a round Rock Paper Scissors
function gameRound(player, computer) {
  // define parameters
  player = playerMove.toLowerCase();
  computer = computerMove;

  // compare the player's and computer's choice
  if (player === computer) {
    console.log(`TIE: ${player} and ${computer} are even`);
  } else if (player === "rock" && computer === "scissors") {
    console.log(`player wins ${player} beats ${computer}`);
  } else if (player === "paper" && computer === "rock") {
    console.log(`player wins ${player} beats ${computer}`);
  } else if (player === "scissors" && computer === "paper") {
    console.log(`player wins ${player} beats ${computer}`);
  } else {
    console.log(`computer wins ${computer} beats ${player}`);
  }
}
gameRound()


