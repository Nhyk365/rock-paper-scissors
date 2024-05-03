console.log("Hello World");

//getComputerChoice returns one of: rock, paper, scissors
function getComputerChoice() {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  let randomNumber = Math.floor(getRandomArbitrary(1, 100)); // randomizes a number from 1 to 99 rounded down
  if (randomNumber <= 33) {
    return "rock"; //if random number 1 to 33 then rock
  } else if (randomNumber <= 66) {
    return "paper"; //if random number 34 to 66 then paper
  } else {
    return "scissors"; //else scissors
  }
}

//Let the user input his choice
function getHumanChoice() {
  return prompt("Choose: Rock, Paper or Scissors?", "Rock");
}

//Main function to play the game
function playGame() {
  let humanSelection;
  let computerSelection;
  let humanScore = 0;
  let computerScore = 0;

  //assigns value to variables, used to reset variables each round
  function resetVar() {
    humanSelection = getHumanChoice().toLowerCase(); //toLowerCase to level any type of entry "Rock, ROCK, rOCK, ..."
    computerSelection = getComputerChoice();
  }

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

  //for loop, plays 5 rounds then stops, resets variables before every round
  for (let roundNum = 0; roundNum < 5; roundNum++) {
    resetVar();
    playRound(humanSelection, computerSelection);
  }
  if (computerScore > humanScore) {
    console.log("You lose!");
  } else if (computerScore < humanScore) {
    console.log("You win!");
  } else console.log("It's a tie!");
}
