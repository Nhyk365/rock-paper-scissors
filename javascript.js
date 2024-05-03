console.log("Hello World");

//Create a function variable for getComputerChoice
//getComputerChoice returns one of: rock, paper, scissors
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) + 1; //getComputerChoice randomizes a number from 1 to 100
  if (randomNumber <= 33) {
    return "rock"; //if random number 1 to 33 then rock
  } else if (randomNumber <= 66) {
    return "paper"; //if random number 34 to 66 then paper
  } else {
    return "scissors"; //else scissors
  }
}

function getHumanChoice() {
  return prompt("Choose: Rock, Paper or Scissor?", "Rock");
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice().toLowerCase(); //toLowerCase to level any type of entry "Rock, ROCK, rOCK, ..."
const computerSelection = getComputerChoice();

//Compare human and computer choices and declares the winner
function playRound(humanChoice, computerChoice) {
  if ((humanChoice == "rock") & (computerChoice == "paper")) {
    console.log("You Lose, paper beats rock!");
    computerScore += 1;
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "rock") & (computerChoice == "scissors")) {
    console.log("You Win, Rock beats scissors!");
    humanScore += 1;
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "rock") & (computerChoice == "rock")) {
    console.log("Tie, Rock against rock!");
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "paper") & (computerChoice == "scissors")) {
    console.log("You Lose, scissors beats paper!");
    computerScore += 1;
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "paper") & (computerChoice == "rock")) {
    console.log("You Win, paper beats rock!");
    humanScore += 1;
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "paper") & (computerChoice == "paper")) {
    console.log("Tie, paper against paper!");
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "scissors") & (computerChoice == "rock")) {
    console.log("You Lose, rock beats scissors!");
    computerScore += 1;
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "scissors") & (computerChoice == "paper")) {
    console.log("You Win, scissors beats paper!");
    humanScore += 1;
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
  if ((humanChoice == "scissors") & (computerChoice == "scissors")) {
    console.log("Tie, scissors against scissors!");
    console.log("Computer: " + computerScore + " Human: " + humanScore);
  }
}

//invoke playRound and uses getHumanChoice and getComputerChoice outputs
playRound(humanSelection, computerSelection);
