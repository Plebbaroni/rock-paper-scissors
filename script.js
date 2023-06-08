console.log("Haha get it? ROCK?");

let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
const result = document.querySelector('.sentence');
const player = document.querySelector(".playerscore");
const cpu = document.querySelector('.cpuscore');
const roboSpeak = document.querySelector('.robotswords');
const buttons = document.querySelectorAll('.btn');

player.textContent = `${playerScore}`;
cpu.textContent = `${computerScore}`;

function getComputerSelection(){
    let choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    roboSpeak.textContent = `I think I'll choose ${random}.`;
    return random;
}

buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerSelection = button.id;
    computerSelection = getComputerSelection();
    result.textContent = gameLogic(playerSelection, computerSelection);
    player.textContent = `${playerScore}`;
    cpu.textContent = `${computerScore}`;
    winCheck(playerScore, computerScore);
    })
})

function gameLogic(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return ("Tie! Nothing done.");
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return("Player win!");
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return ("Computer win!");
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return ("Player win!");
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return ("Computer win!");
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return ("Player win!");
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return ("Computer win!");
    }
}

function winCheck(playerScore, computerScore){
    if(playerScore == 5){
        result.textContent = "Congrats! You won the game."
        roboSpeak.textContent = "I lost...";
        buttons.forEach(elem =>{
            elem.disabled = true;
        })
    }else if(computerScore == 5){
        result.textContent = "Computer won the game. Better luck next time!"
        roboSpeak.textContent = "I won! =)";
        buttons.forEach(elem =>{
            elem.disabled = true;
        })
    }
}
