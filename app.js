let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomputerchoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawgame = () => {
  // console.log("Game Was Draw");
  msg.innerText = "Game Was Draw. Plag Again.";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    // console.log("You win");
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice} `;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("You Lose");
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You Lost! ${compchoice} beats ${userchoice} `;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  //   console.log("User Choice=", userchoice);
  //generate computer choice
  const compchoice = gencomputerchoice();
  //   console.log("Computer Choice=", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissors,paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      //rock,scissors
      userwin = compchoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
//   console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("Choice Was Cliclked",userchoice);
    playgame(userchoice);
  });
});
