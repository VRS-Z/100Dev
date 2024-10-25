const { determineWinner } = require("./jogo.js");

function play(choosePlayer1) {
  const options = ["rock", "paper", "scissors"];
  const choosePlayer2 = options[Math.floor(Math.random() * 3)];

  const result = determineWinner(choosePlayer1, choosePlayer2);

  document.getElementById(
    "result"
  ).innerText = `You chose ${choosePlayer1}, computer chose ${choosePlayer2}. ${result}`;
}

document.getElementById("rock").addEventListener("click", function () {
  play("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  play("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  play("scissors");
});
