let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const resultCompSmall = convertToWord(computerChoice).fontsize(3).sub();
  const resultUserSmall = convertToWord(userChoice).fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `🎊USER ${resultUserSmall} beats COMP${resultCompSmall}  YOU WIN!🎊`; //ES6
  const winGlow_div = document.getElementById(userChoice);
  winGlow_div.classList.add("green-glow");
  setTimeout(() => winGlow_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
  const resultCompSmall = convertToWord(computerChoice).fontsize(3).sub();
  const resultUserSmall = convertToWord(userChoice).fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `💩USER ${resultUserSmall} loses to COMP${resultCompSmall}  YOU LOST!💩`; //ES6
  const loseGlow_div = document.getElementById(userChoice);
  loseGlow_div.classList.add("red-glow");
  setTimeout(() => loseGlow_div.classList.remove("red-glow"), 500);
}
function draw(userChoice, computerChoice) {
  const resultCompSmall = convertToWord(computerChoice).fontsize(3).sub();
  const resultUserSmall = convertToWord(userChoice).fontsize(3).sub();
  result_p.innerHTML = `❗️USER ${resultUserSmall} ⇌ COMP${resultCompSmall}❗️`; //ES6
  const drawGlow_div = document.getElementById(userChoice);
  drawGlow_div.classList.add("gray-glow");
  setTimeout(() => drawGlow_div.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
