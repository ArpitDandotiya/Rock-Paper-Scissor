let userScore = 0, compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return options[num];        
}

const draw = () => 
{
    console.log('Game is Draw');
    msg.innerText = "Game is Draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => 
{
    if(userWin)
    {
        msg.innerText = "You Win!";
        userScore++;
        user.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else
    {
        msg.innerText = "You Lose";
        compScore++;
        comp.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("UserChoice: ", userChoice);
    const compChoice = genCompChoice();
    console.log("CompChoice: ",compChoice);

    if (compChoice === userChoice)
    {
        draw();
    }
    else 
    {
        userWin = (userChoice === "rock") ? (compChoice !== "paper") :
                  (userChoice === "paper") ? (compChoice !== "scissors") :
                  (userChoice === "scissors") ? (compChoice !== "rock") :
                  null;
    showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);
    })
})