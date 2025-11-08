function getRandomInt() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  return (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)); // The maximum is exclusive and the minimum is inclusive
}

let randomNumber = getRandomInt();

console.log(randomNumber);

const a = "rock";
const b = "paper";
const c = "scissors";

function getComputerChoice(a,b,c) {
    if (randomNumber === 1) {
        return a;
    } else if (randomNumber === 2) {
        return b;
    } else return c;
 }

 console.log(getComputerChoice(a,b,c));

 let answer = prompt("Enter 'rock', 'paper' or 'scissors'?")
 answer = answer.toLowerCase();

 function getHumanChoice(a,b,c) {
    if (answer == 'rock') {
        return a;
    } else if (answer == 'paper') {
        return b;
    } else return c;
 }

 console.log(getHumanChoice(a,b,c));

 let computerScore = 0;
 let humanScore = 0;

 console.log(computerScore);
 console.log(humanScore);

 let humanChoice = getHumanChoice(a,b,c);
 let computerChoice = getComputerChoice(a,b,c);

 console.log(computerChoice);
 console.log(humanChoice);

    let result;
    if ((computerChoice == a) && (humanChoice == b)) {
        result = "You win! Paper beats rock.";
    } else if ((computerChoice == a) && (humanChoice == c)) {
        result = "You lose! Rock beats scissors.";
    } else if ((computerChoice == b) && (humanChoice == a)) {
        result = "You lose! Paper beats rock.";
    } else if ((computerChoice == b) && (humanChoice == c)) {
        result = "You win! Scissors beats paper.";
    } else if ((computerChoice == c) && (humanChoice == a)) {
        result = "You win! Rock beats scissors.";
    } else if ((computerChoice == c) && (humanChoice == b)) {
        result = "You lose! Scissors beats paper.";
    } else result = "Equal score! Try again.";
 
    console.log(result);

