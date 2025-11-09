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

/* let computerScore = 0;
 let humanScore = 0;


 let humanChoice = getHumanChoice(a,b,c);
 let computerChoice = getComputerChoice(a,b,c);

 console.log(computerChoice);
 console.log(humanChoice);

 //function playRound(humanChoice, computerChoice) {
    let result;
    if ((computerChoice == a) && (humanChoice == b)) {
        result = "You win! Paper beats rock.";
        humanScore = (humanScore + 1);
    } else if ((computerChoice == a) && (humanChoice == c)) {
        result = "You lose! Rock beats scissors.";
        computerScore = (computerScore + 1);
    } else if ((computerChoice == b) && (humanChoice == a)) {
        result = "You lose! Paper beats rock.";
        computerScore = (computerScore + 1);
    } else if ((computerChoice == b) && (humanChoice == c)) {
        result = "You win! Scissors beats paper.";
        humanScore = (humanScore + 1);
    } else if ((computerChoice == c) && (humanChoice == a)) {
        result = "You win! Rock beats scissors.";
        humanScore = (humanScore + 1);
    } else if ((computerChoice == c) && (humanChoice == b)) {
        result = "You lose! Scissors beats paper.";
        computerScore = (computerScore + 1);
    } else result = "Equal score! Try again.";
 //}

 console.log(result);
 console.log(computerScore);
 console.log(humanScore);
 */

 

