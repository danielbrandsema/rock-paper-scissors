function playGame() {
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

    function getHumanChoice() {
        let answer = prompt("Enter 'rock', 'paper' or 'scissors'?").toLowerCase();
        if (answer === 'rock'|| answer === 'paper'|| answer === 'scissors') {
            return answer;
        }
    }    
    
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        let result;
        if ((computerChoice === 'rock') && (humanChoice === 'paper')) {
            result = "You win! Paper beats rock.";
            humanScore++;
        } else if ((computerChoice === 'rock') && (humanChoice === 'scissors')) {
            result = "You lose! Rock beats scissors.";
            computerScore++;
        } else if ((computerChoice === 'paper') && (humanChoice === 'rock')) {
            result = "You lose! Paper beats rock.";
            computerScore++;
        } else if ((computerChoice === 'paper') && (humanChoice === 'scissors')) {
            result = "You win! Scissors beats paper.";
            humanScore++;
        } else if ((computerChoice === 'scissors') && (humanChoice === 'rock')) {
            result = "You win! Rock beats scissors.";
            humanScore++;
        } else if ((computerChoice === 'scissors') && (humanChoice === 'paper')) {
            result = "You lose! Scissors beats paper.";
            computerScore++;
        } else result = "Equal score! Try again.";
        return result;
    }

    function playAndLogRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let roundResult = playRound(computerChoice, humanChoice);
        console.log("Computer chose:", computerChoice);
        console.log("You chose:", humanChoice);
        console.log(roundResult);
    }

    playAndLogRound();
    playAndLogRound();
    playAndLogRound();
    playAndLogRound();
    playAndLogRound();
    
    // Scores after 5 rounds
    console.log("Computer score:", computerScore);
    console.log("Your score:", humanScore);

    if (humanScore > computerScore) {
        console.log(`You won: ${humanScore} - ${computerScore}!`)
    } else if (computerScore > humanScore) {
        console.log(`You lost: ${humanScore} - ${computerScore}!`)
    } else console.log(`It's a tie! ${humanScore} - ${computerScore}`)
}

playGame();