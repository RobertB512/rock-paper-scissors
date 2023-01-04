// TODO
// - click a button and have it's move img appear on in the player's play area
  // - if rock, show a rock img
  // - if paper, sow a paper img
  // - if scissors, show a scissors img
// - based on a random number the computer chooses, have it's move img appear in the computer's play area
  // - if 1, show rock img
  // - if 2 show paper img
  // - if 3 scissors img
// - each round display a message saying who won the round and increases the corresponding score by 1
// - when someone reaches a score of 5, display a message declaring who won and end the game so no further rounds can be played


// select DOM elements
let moveSelection = document.querySelectorAll(".choose-move");
const showPlayerMove = document.querySelector(".show-player-move");
const showComputerMove = document.querySelector(".show-computer-move");
let playerScoreBox = document.querySelector(".player-score-box");
let computerScoreBox = document.querySelector(".computer-score-box");
let gameMessage = document.querySelector(".game-message");
let moveImg = document.createElement("img");
moveImg.classList.add("move-img");


// computer picks rock, paper, or scissors
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3) + 1
  let computerChoice;
 
  if (ranNum === 1) {
    computerChoice = "rock";
    moveImg.setAttribute("src", "./images/rocks.jpg");
  } else if (ranNum === 2) {
    computerChoice = "paper";
    moveImg.setAttribute("src", "./images/paper.jpg");
  } else if (ranNum === 3) {
    computerChoice = "scissors";
    moveImg.setAttribute("src", "./images/scissors.jpg");
  } else {
    console.log("computer could not pick a choice");
  }
  showComputerMove?.append(moveImg)
  return computerChoice;
}

// set player and computer choices
let computerMove = getComputerChoice();
// let player = "rock"; // this will eventually come from a choice made through the UI

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






