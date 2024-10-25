const { determineWinner } = require("./jogo.js");

describe("determineWinner", () => {
  test("Player 1 wins when choosing rock against scissors", () => {
    expect(determineWinner("rock", "scissors")).toBe("Player 1 wins!");
  });

  test("Player 2 wins when choosing rock against paper", () => {
    expect(determineWinner("rock", "paper")).toBe("Player 2 (Computer) wins!");
  });

  test("It's a tie when both players choose rock", () => {
    expect(determineWinner("rock", "rock")).toBe("It's a tie!");
  });
});
