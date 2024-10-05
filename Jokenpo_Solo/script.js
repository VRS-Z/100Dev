function jogar(escolhaJogador1) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaJogador2 = opcoes[Math.floor(Math.random() * 3)];

  let resultado = "";

  if (
    (escolhaJogador1 === "pedra" && escolhaJogador2 === "tesoura") ||
    (escolhaJogador1 === "tesoura" && escolhaJogador2 === "papel") ||
    (escolhaJogador1 === "papel" && escolhaJogador2 === "pedra")
  ) {
    resultado = "Player 1 wins!";
  } else if (
    (escolhaJogador2 === "pedra" && escolhaJogador1 === "tesoura") ||
    (escolhaJogador2 === "tesoura" && escolhaJogador1 === "papel") ||
    (escolhaJogador2 === "papel" && escolhaJogador1 === "pedra")
  ) {
    resultado = "Player 2 (Computer) wins!";
  } else {
    resultado = "It's a tie!";
  }

  document.getElementById(
    "resultado"
  ).innerText = `You chose ${escolhaJogador1}, computer chose ${escolhaJogador2}. ${resultado}`;
}
