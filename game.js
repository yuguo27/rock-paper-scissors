const div = document.createElement("div");
document.body.appendChild(div);
let humanScore = 0;
let computerScore= 0;


let getComputerChoice =  function(number){
    return  Math.floor(Math.random() * number);
}

let getHumanChoice = function(message){
    return prompt(message).toLocaleLowerCase();
}

let setComputerToString = function(message){
    if (message == 0){
        return "papier"
    }
    if (message == 1){
        return "pierre"
    }
    if (message == 2){
        return "ciseaux"
    }
}

let playRound = function(humanChoice, computerChoice){

    if (humanChoice == computerChoice){
        div.textContent = "Egalité " + humanChoice + " égale " + computerChoice;
        //console.log(" Egalité " + humanChoice + " égale " + computerChoice);
        return "draw";
    }
    if ((humanChoice == "papier" && computerChoice == "pierre") || (humanChoice == "ciseaux" && computerChoice == "papier") || (humanChoice == "pierre" && computerChoice == "ciseaux")){
        div.textContent = " Vous avez gagné " + humanChoice + " bat " + computerChoice;
        humanScore++;
        //console.log(" Vous avez gagné " + humanChoice + " bat " + computerChoice);
        return true;
    }
    else{
        div.textContent = " Vous avez perdu " + computerChoice + " bat " + humanChoice
        computerScore++;
        //console.log(" Vous avez perdu " + computerChoice + " bat " + humanChoice);
        return false;
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice(3);
    const convertComputerChoice = setComputerToString(computerChoice);

    playRound(humanChoice, convertComputerChoice);

    score.textContent = "Votre score : " + humanScore +
                        " | Score ordinateur : " + computerScore;

    if (humanScore === 5) {
        alert("Bravo, vous avez gagné !");
        return;
    } else if (computerScore ===5) {
        alert("Dommage, vous avez perdu !");
        return;
    }
    
}

let round  = 0; 
const score = document.createElement("h1");
document.body.appendChild(score);

const rock_btn = document.querySelector("#rock_button");
rock_btn.addEventListener("click", () => {
    playGame("pierre")
});

const paper_btn = document.querySelector("#paper_button");
paper_btn.addEventListener("click", () => {
    playGame("papier")
});

const scissors_btn = document.querySelector("#scissors_button");
scissors_btn.addEventListener("click", () => {
    playGame("ciseaux")

});



//score.textContent = " Votre Score " + humanScore + "\nComputer Score " + computerChoice