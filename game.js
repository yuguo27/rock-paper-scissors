

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
        console.log(" Egalité " + humanChoice + " égale " + computerChoice);
        return "draw";
    }
    if ((humanChoice == "papier" && computerChoice == "pierre") || (humanChoice == "ciseaux" && computerChoice == "papier") || (humanChoice == "pierre" && computerChoice == "ciseaux")){
        console.log(" Vous avez gagné " + humanChoice + " bat " + computerChoice);
        return true;
    }
    else{
        console.log(" Vous avez perdu " + computerChoice + " bat " + humanChoice);
        return false;
    }
}


let playGame = function(nbRound){
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;
    while (i<nbRound){
        const humanChoice = getHumanChoice("Veuillez saisir votre choix");
        const computerChoice = getComputerChoice(3);
        const convertComputerToString = setComputerToString(computerChoice);
        const round = playRound(humanChoice, convertComputerToString);
        if (round === true){
            humanScore++;
            console.log(" votre score " + humanScore)
        }
        else if (round === false){
            computerScore++;
            console.log(" score ordinateur " + computerScore)
        }
        console.log(" round numero " + i);
        i++;
    }
    console.log(" score finale vous et ordi " + humanScore + " " +  computerScore)
    if(humanScore > computerScore){
        console.log(" Bravo vous avez gagné ");
        return;
    }
    if(computerScore > humanScore){
        console.log(" Dommage vous avez perdu ");
        return;
    }
    else{
        console.log(" Egalité ");
        return; 
    }

}




playGame(5)




//console.log(getComputerChoice(3))

//console.log(getHumanChoice("Veuillez saisir votre choix"))

