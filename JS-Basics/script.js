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
