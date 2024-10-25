function determineWinner(choosePlayer1, choosePlayer2) {
  if (
    (choosePlayer1 === "rock" && choosePlayer2 === "scissors") ||
    (choosePlayer1 === "scissors" && choosePlayer2 === "paper") ||
    (choosePlayer1 === "paper" && choosePlayer2 === "rock")
  ) {
    return "Player 1 wins!";
  } else if (
    (choosePlayer2 === "rock" && choosePlayer1 === "scissors") ||
    (choosePlayer2 === "scissors" && choosePlayer1 === "paper") ||
    (choosePlayer2 === "paper" && choosePlayer1 === "rock")
  ) {
    return "Player 2 (Computer) wins!";
  } else {
    return "It's a tie!";
  }
}

module.exports = { determineWinner };
