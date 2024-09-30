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

// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt(`Choose: "Rock", "Paper", or "Scissors"`)

    return choice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

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

    if(result === 0){
        console.log("Draw!");
    }
    else if(result === -1){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    else if(result === 1){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);