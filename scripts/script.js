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

// some variables
let playerScore = 0;
let computerScore = 0;

// initialize scores to 0
playerScoreBox.textContent = playerScore.toString();
computerScoreBox.textContent = computerScore.toString();

// get player's choice and play the game
function getPlayerChoiceAndPlay() {
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
    let result = gameRound(player, getComputerChoice());
    fullGame(result)
  }));
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

// play a round of the game
function gameRound(playerMove, computerMove) {
  console.log(playerMove);
  console.log(computerMove);

  // compare the player's and computer's choice
  if (playerMove === computerMove) {
    console.log(`TIE`);
    gameMessage.textContent = "TIE";
    return "tie";
  } else if (playerMove === "rock" && computerMove === "scissors") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    gameMessage.textContent = `Player wins: ${playerMove} beats ${computerMove}`;
    return "player wins";
  } else if (playerMove === "paper" && computerMove === "rock") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    gameMessage.textContent = `Player wins: ${playerMove} beats ${computerMove}`;
    return "player wins";
  } else if (playerMove === "scissors" && computerMove === "paper") {
    console.log(`player wins ${playerMove} beats ${computerMove}`);
    gameMessage.textContent = `Player wins: ${playerMove} beats ${computerMove}`;
    return "player wins";
  } else {
    console.log(`computer wins ${computerMove} beats ${playerMove}`);
    gameMessage.textContent = `Computer wins: ${computerMove} beats ${playerMove}`;
    return "computer wins";
  }
}

let rounds = 0;
// play several rounds of the game
function fullGame(result) {
    if (result === "player wins") {
      playerScore += 1;
      playerScoreBox.textContent = playerScore.toString();
    } else if (result === "computer wins") {
      computerScore += 1;
      computerScoreBox.textContent = computerScore.toString();
    }

    rounds++;
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);
    console.log(`rounds: ${rounds}`);
    // break
    if (rounds === 5) {
      if (playerScore > computerScore) {
        console.log(`player wins`);
        gameMessage.textContent = "YOU WIN! Refresh the page to play again.";
      } else if (computerScore > playerScore) {
        console.log(`computer wins`);
        gameMessage.textContent = "GAME OVER! Refresh the page to try again.";
      } else if (playerScore === computerScore) {
        console.log("TIE");
        gameMessage.textContent = "TIE! Refresh the page to play again."
      }
      moveSelection.forEach(btn => btn.setAttribute("disabled", "disabled"));
    }    
}

getPlayerChoiceAndPlay()
