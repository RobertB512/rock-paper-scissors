// TODO
// - when a button is pressed, then player's image and computer's image are displayed and the game starts
      // - a new round starts each time a button is pressed
// - each round display a message saying who won the round and increases the corresponding score by 1
// - when someone reaches a score of 5, display a message declaring who won and end the game so no further rounds can be played


// select DOM elements
let moveSelection = document.querySelectorAll(".choose-move");
const showPlayerMove = document.querySelector(".show-player-move");
const showComputerMove = document.querySelector(".show-computer-move");
let playerScoreBox = document.querySelector(".player-score-box");
let computerScoreBox = document.querySelector(".computer-score-box");
let gameMessage = document.querySelector(".game-message");
let computerMoveImg = document.createElement("img");
let playerMoveImg = document.createElement("img");
computerMoveImg.classList.add("move-img");
playerMoveImg.classList.add("move-img");

function getPlayerChoice() {
  let player;
  moveSelection.forEach(choice => choice.addEventListener("click", () => {
    if (choice.textContent?.toLowerCase() === "rock") {
      player = "rock";
      playerMoveImg.setAttribute("src", "./images/rocks.jpg");
    } else if (choice.textContent?.toLowerCase() === "paper") {
      player = "paper";
      playerMoveImg.setAttribute("src", "./images/paper.jpg");
    } else {
      player = "scissors";
      playerMoveImg.setAttribute("src", "./images/scissors.jpg");
    }
    showPlayerMove?.append(playerMoveImg);
    return gameRound(player, getComputerChoice());
  }));
  // return player;
}

// computer picks rock, paper, or scissors
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3) + 1
  let computerChoice;
 
  if (ranNum === 1) {
    computerChoice = "rock";
    computerMoveImg.setAttribute("src", "./images/rocks.jpg");
  } else if (ranNum === 2) {
    computerChoice = "paper";
    computerMoveImg.setAttribute("src", "./images/paper.jpg");
  } else if (ranNum === 3) {
    computerChoice = "scissors";
    computerMoveImg.setAttribute("src", "./images/scissors.jpg");
  } else {
    console.log("computer could not pick a choice");
  }
  showComputerMove?.append(computerMoveImg)
  return computerChoice;
}

// function displayPlayerAndComputer() {
//   return [getPlayerChoice(), getComputerChoice()]
// }

// set player and computer choices


// let player;
// moveSelection.forEach(choice => choice.addEventListener("click", () => {
//   if (choice.textContent?.toLowerCase() === "rock") {
//     player = "rock";
//     playerMoveImg.setAttribute("src", "./images/rocks.jpg");
//   } else if (choice.textContent?.toLowerCase() === "paper") {
//     player = "paper";
//     playerMoveImg.setAttribute("src", "./images/paper.jpg");
//   } else {
//     player = "scissors";
//     playerMoveImg.setAttribute("src", "./images/scissors.jpg");
//   }

// }));
// showPlayerMove?.append(playerMoveImg);


// let computerMove = getComputerChoice();



// play a round of the game
function gameRound(playerMove, computerMove) {
  // parameters
  // computerMove = getComputerChoice();
  // playerMove = getPlayerChoice();
  console.log(playerMove);
  console.log(computerMove);

  // compare the player's and computer's choice
  if (playerMove === computerMove) {
    console.log(`TIE`);
    return "tie";
  } else if (playerMove === "rock" && computerMove === "scissors") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    return "player wins";
  } else if (playerMove === "paper" && computerMove === "rock") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    return "player wins";
  } else if (playerMove === "scissors" && computerMove === "paper") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    return "player wins";
  } else {
    console.log(`computer wins ${computerMove} beats ${playerMove}`);
    return "computer wins";
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

getPlayerChoice()

// playGame()






