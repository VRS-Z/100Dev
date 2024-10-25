function play(choosePlayer1) {
  const options = ["rock", "paper", "scissors"];
  const choosePlayer2 = options[Math.floor(Math.random() * 3)];

  let result = "";

  if (
    (choosePlayer1 === "rock" && choosePlayer2 === "scissors") ||
    (choosePlayer1 === "scissors" && choosePlayer2 === "paper") ||
    (choosePlayer1 === "paper" && choosePlayer2 === "rock")
  ) {
    result = "Player 1 wins!";
  } else if (
    (choosePlayer2 === "rock" && choosePlayer1 === "scissors") ||
    (choosePlayer2 === "scissors" && choosePlayer1 === "paper") ||
    (choosePlayer2 === "paper" && choosePlayer1 === "rock")
  ) {
    result = "Player 2 (Computer) wins!";
  } else {
    result = "It's a tie!";
  }

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
