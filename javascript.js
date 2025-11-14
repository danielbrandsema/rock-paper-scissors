    const btnDiv = document.createElement('div');
    const resDiv = document.createElement('div');

    document.body.appendChild(btnDiv);
    document.body.appendChild(resDiv);

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissors = document.createElement('button');
    
    btnDiv.append(btnRock, btnPaper, btnScissors);

    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';

    let computerScore = 0;
    let humanScore = 0;

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

    /*
    function getComputerChoice() {
        const options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * 3)];
    }
    */

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

    function handleClick(humanChoice) {
        const computerChoice = getComputerChoice();
        const result = playRound(computerChoice, humanChoice);
        resDiv.innerHTML = `
            <p>Computer chose: ${computerChoice}</p>
            <p>You chose: ${humanChoice}</p>
            <p>${result}</p>
            <p>Score — You: ${humanScore} | Computer: ${computerScore}</p>
        `}    

    btnRock.addEventListener('click', () => handleClick('rock'));
    btnPaper.addEventListener('click', () => handleClick('paper'));
    btnScissors.addEventListener('click', () => handleClick('rock'));
    
    /*function playAndLogRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let roundResult = playRound(computerChoice, humanChoice);
    }
    
    playAndLogRound();
    playAndLogRound();
    playAndLogRound();
    playAndLogRound();
    playAndLogRound();*/
       
        
    
    // Scores after 5 rounds
    /*
    if (humanScore > computerScore) {
        console.log(`You won: ${humanScore} - ${computerScore}!`)
    } else if (computerScore > humanScore) {
        console.log(`You lost: ${humanScore} - ${computerScore}!`)
    } else console.log(`It's a tie! ${humanScore} - ${computerScore}`)*/
} 

playGame();