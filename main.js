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


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const textHumanScore = document.querySelector(".text-human-score");
    const textComputerScore = document.querySelector(".text-computer-score");
    textHumanScore.textContent = 0;
    textComputerScore.textContent = 0;

    function displayResult(humanChoice, computerChoice, roundResult){
        let resultString = "";
        if(roundResult === 0){
            resultString = "Draw!";
        }
        else if(roundResult === -1){
            resultString = `You Lose! ${computerChoice} beats ${humanChoice}!`;
            computerScore++;
        }
        else if(roundResult === 1){
            resultString = `You Win! ${humanChoice} beats ${computerChoice}!`;
            humanScore++;
        }
        textHumanScore.textContent = humanScore;
        textComputerScore.textContent = computerScore;
        textRound.textContent = resultString;
    }

    function onToolSelect(e){
        let humanChoice;
        switch(e.target.id){
            case "button-rock":
                humanChoice = "rock";
                break;
            case "button-paper":
                humanChoice = "paper";
                break;
            case "button-scissors":
                humanChoice = "scissors";
                break;
        }
    
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        displayResult(humanChoice, computerChoice, roundResult);

        if(humanScore === 5){
            endGame(true);
        }
        else if(computerScore === 5){
            endGame(false);
        }
    }
    
    const textRound = document.querySelector("#text-round");
    const humanButtons = document.querySelectorAll("#human-buttons > button");
    humanButtons.forEach((button) => {
        button.addEventListener("click", onToolSelect);
    });
}

function endGame(playerWon){
    const gameScreen = document.querySelector(".game-container");
    const endScreen = document.querySelector(".game-end-screen");
    gameScreen.style.display = "none";
    endScreen.style.display = "flex";

    const endScreenInfo = document.querySelector(".game-end-screen-info");
    endScreenInfo.textContent = playerWon ? "You won!" : "You lost!";
}

playGame();