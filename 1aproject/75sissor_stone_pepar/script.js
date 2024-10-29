let choices = document.querySelectorAll(".choices");
console.log(choices);
let userscore = 0;
let compscore = 0;

let msg = document.querySelector(".msg");
let comp = document.querySelector(".comp_score");
let user = document.querySelector(".user_score");


const gencompchoice = () => {
    const Option = ["Rock", "paper", "scissors"];
    const readin = Math.floor(Math.random()*3);
    return Option[readin];
};
const gameDraw = () => {
    msg.innerText = "Game was Draw. Play again. you Played Very Well ";
    msg.style.backgroundColor = "black";
};
const showWinner = (userwin, compchoice, userchoice) => {
    if (userwin) {
        userscore++;
        user.innerText = userscore;
        console.log(user);
        msg.innerText = `You Win.Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        comp.innerText = compscore;
        msg.innerText = `You lost.comp ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (compchoice === userchoice) {
        gameDraw();
    }
    else {
        let userwin = true;
        if (userchoice === "Rock") {
            userwin = compchoice === "paper" ? false : true;
            console.log(userwin);
        }
        else if (userchoice === "paper") {
            //rock, scissors
            if(compchoice === "scissors" ){
                userwin =false;
            }
            else{
                userwin = true;
            }
           
            console.log(userwin);
        } else {
            //rock, paper
            userwin = compchoice === "rock" ? false : true;
            console.log(userwin);
        }

        showWinner(userwin, compchoice, userchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log(userchoice);

        playgame(userchoice);
    });
});