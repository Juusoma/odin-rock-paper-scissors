function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3)
    if(randomChoice === 0)
        return "rock";
    else if(randomChoice === 1)
        return "paper";
    else if(randomChoice === 2)
        return "scissors";
    else{
        console.error(`Unexpected computer choice: ${randomChoice}. 
                        Should be in the random 0-2`);
    }
}

function getHumanChoice(){
    let choice = prompt(`Choose: "Rock", "Paper", or "Scissors"`)

    return choice.toLowerCase();
}

function validateChoice(choice)
{
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        return false;
    }

    return true;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let result = 0;
    
        if(humanChoice === computerChoice)
            result = 0;
        else if(humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock"
        )
            result = -1;
        else if(computerChoice === "rock" && humanChoice === "paper" ||
            computerChoice === "paper" && humanChoice === "scissors" ||
            computerChoice === "scissors" && humanChoice === "rock"
        )   
            result = 1;
        else{
            console.error(`Incorrect inputs ${humanChoice} and ${computerChoice}`);
        }

        return result;
    }

    let rounds = 5;
    let currentRound = 0;
    while(currentRound < rounds){

        const humanChoice = getHumanChoice();
        if(!validateChoice(humanChoice)){
            console.log(`Invalid choice: ${humanChoice}`)
            continue;
        }

        const computerChoice = getComputerChoice();
        
        let roundResult = playRound(humanChoice, computerChoice);
        if(roundResult === 0){
            console.log("Draw!");
        }
        else if(roundResult === -1){
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
        else if(roundResult === 1){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        }
        currentRound++;

        console.log(`Game ${currentRound}
Your score: ${humanScore} 
PC score: ${computerScore}`)
    }

    if(humanScore > computerScore){
        console.log(`You won the game!
Your score: ${humanScore}
PC score: ${computerScore}`)
    }
    else if(computerScore > humanScore){
        console.log(`You lost the game!
Your score: ${humanScore}
PC score: ${computerScore}`)
    }
    else{
        console.log(`The game was a draw!
Your score: ${humanScore}
PC score: ${computerScore}`)
    }
}

playGame();