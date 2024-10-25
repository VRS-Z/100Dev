<<<<<<< HEAD
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
=======
// This no is my First JavaScript Code!

let name = "VRS"; // String Literal
console.log(name);

let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let secondtName = undefined;
let selectedColor = null;

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen(-)
// Are case-sensitive

let firstName = "Otavio",
  lastName = "VRS";

console.log(firstName, lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let person = {
  name: "Otávio",
  age: 18,
};

// Dot notation
person.name = "VRS";

// Bracket Notation
let selection = "name";
person[selection] = "Franco";

console.log(person.name);

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

// Perfoming a Task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Doffy", "DiscordUser");

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));
>>>>>>> 79ecf254a66c107ea7ea4a5f129aa894ee5f6327
