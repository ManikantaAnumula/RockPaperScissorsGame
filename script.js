let userScore = 0;
let compScore = 0;
let rockScore = 0;
let paperScore = 0;
let scissorScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const rock = document.querySelector('#Rock-score');
const paper = document.querySelector('#Paper-score');
const scissor = document.querySelector('#Scissors-score');
const draw = document.querySelector('#Draw-score');

const drawGame = () => {
    drawScore++;
    message.innerText = "Game Draw! Hit again";
    message.style.backgroundColor = "#D7C3F1";
    message.style.color = "black";
    draw.innerText = drawScore;
}

const showWinner = (userwinner, userChoice, compChoice) => {
    if (userwinner) {
        userScore++;
        message.innerText = `Congo..You Won!, Your choice '${userChoice}' beats '${compChoice}'`;
        message.style.backgroundColor = "green";
        message.style.color = "white";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        message.innerText = `Computer Won, '${compChoice}' beats your choice '${userChoice}' No Prob hit again`;
        message.style.backgroundColor = "red";
        message.style.color = "white";
        compScorePara.innerText = compScore;
    }
}

const getComputerChoice = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomidx = Math.floor(Math.random() * 3);//Generates random number between 1 - 2
    return options[randomidx];
}

const playGame = (userChoice) => {
    let userWins = false;
    console.log(`User choice is ${userChoice}`);
    const compChoice = getComputerChoice();
    console.log(`Computer choice is ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        if (userChoice === "Rock") {
            //scissors, //paper
            userWins = compChoice === 'Scissors' ? true : false;
            if (userWins) {
                rockScore++
                rock.innerText = rockScore;
            }
        } else if (userChoice === "Scissors") {
            //Rock, Paper
            userWins = compChoice === 'Paper' ? true : false;
            if (userWins) {
                scissorScore++
                scissor.innerText = scissorScore;
            }
        } else if (userChoice === "Paper") {
            //Scissors, Rock
            userWins = compChoice === 'Rock' ? true : false;
            if (userWins) {
                paperScore++
                paper.innerText = paperScore;
            }
        }
        showWinner(userWins, userChoice, compChoice);
    }
}

choices.forEach(function (choice) {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});