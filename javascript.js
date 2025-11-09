function getRandomInt() {
  return Math.floor(Math.random() * 3) + 1; // cleaner: always 1, 2, or 3
}

function getComputerChoice() {
    let randomNumber = getRandomInt();
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else return 'scissors';
 }

 console.log(getComputerChoice());
 
 let answer = prompt("Enter 'rock', 'paper' or 'scissors'?")
// answer = answer.toLowerCase();

 function getHumanChoice() {
    if (answer == 'rock') {
        return 'rock';
    } else if (answer == 'paper') {
        return 'paper';
    } else if (answer == 'scissors') {
        return 'scissors';
    }
 }

 console.log(getHumanChoice());

 let computerScore = 0;
 let humanScore = 0;


 let humanChoice = getHumanChoice();
 let computerChoice = getComputerChoice();

 console.log("Computer chose:", computerChoice);
 console.log("You chose:", humanChoice);

 function playRound(humanChoice, computerChoice) {
    let result;
    if ((computerChoice === 'rock') && (humanChoice === 'paper')) {
        result = "You win! Paper beats rock.";
        humanScore = ++humanScore;
    } else if ((computerChoice === 'rock') && (humanChoice === 'scissors')) {
        result = "You lose! Rock beats scissors.";
        computerScore = ++computerScore;
    } else if ((computerChoice === 'paper') && (humanChoice === 'rock')) {
        result = "You lose! Paper beats rock.";
        computerScore = ++computerScore;
    } else if ((computerChoice === 'paper') && (humanChoice === 'scissors')) {
        result = "You win! Scissors beats paper.";
        humanScore = ++humanScore;
    } else if ((computerChoice === 'scissors') && (humanChoice === 'rock')) {
        result = "You win! Rock beats scissors.";
        humanScore = ++humanScore;
    } else if ((computerChoice === 'scissors') && (humanChoice === 'paper')) {
        result = "You lose! Scissors beats paper.";
        computerScore = ++computerScore;
    } else result = "Equal score! Try again.";
 return result;
 }


 let roundResult = playRound(humanChoice, computerChoice);
 console.log(roundResult);
 console.log("Computer score:", computerScore);
 console.log("Your score:", humanScore);
 

 

