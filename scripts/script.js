// ----- steps to make the game -----
// declare needed variables and functions
    // make a function for the computer's choice
    // make a variable for the player's choice
    // make a round function to play a single round comparing the computer's and player's choices
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
    computerChoice = "scissors"
  } else {
    console.log("computer could not pick a choice")
  }
  return computerChoice
}


