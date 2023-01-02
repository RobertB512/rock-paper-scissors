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
let player = "rock"; // this will eventually come from a choice made through the UI


// play a round of the game
function gameRound(playerMove, computerMove) {
  // parameters
  playerMove = player
  computerMove = getComputerChoice();

  // compare the player's and computer's choice
  if (playerMove === computerMove) {
    console.log(`TIE`);
    return "tie"
  } else if (playerMove === "rock" && computerMove === "scissors") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    return "player wins"
  } else if (playerMove === "paper" && computerMove === "rock") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    return "player wins"
  } else if (playerMove === "scissors" && computerMove === "paper") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    return "player wins"
  } else {
    console.log(`computer wins ${computerMove} beats ${playerMove}`);
    return "computer wins"
  }
}


// play several rounds of the game
// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;
  
//   for (let i = 0; i < 5; i++) {
//     let round = gameRound()
//     if (round === "player wins") {
//       playerScore++
//     } else if (round === "computer wins") {
//       computerScore++
//     }
    
//   }
//   console.log(`player: ${playerScore}`)
//   console.log(`computer: ${computerScore}`)

//   if (playerScore > computerScore) {
//     console.log(`player wins`)
//   } else if (computerScore > playerScore) {
//     console.log(`computer wins`)
//   } else if (playerScore === computerScore) {
//     console.log("TIE")
//   }
// }

gameRound()

// playGame()






