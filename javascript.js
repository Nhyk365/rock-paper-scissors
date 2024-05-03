console.log("Hello World");

//Create a function variable for getComputerChoice
//getComputerChoice returns one of: rock, paper, scissors
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) + 1; //getComputerChoice randomizes a number from 1 to 100
  let computerChoice;
  if (randomNumber <= 33) {
    computerChoice = "Rock"; //if random number 1 to 33 then rock
  } else if (randomNumber <= 66) {
    computerChoice = "Paper"; //if random number 34 to 66 then paper
  } else {
    computerChoice = "Scissors"; //else scissors
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose: Rock, Paper or Scissor?", "Rock");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {}
