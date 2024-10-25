// While loop
// while (condition) {
//   // Code to run while the condition is true
// }

// For loop
// for (initialization; condition; final expression) {
//   // code to run while the condition is true
// }

// let spin = 1;
// while (spin <= 10) {
//   console.log(spin);
//   spin++;
// }
// let turns = Number(prompt("How many turns?"));

// let start = Number(prompt("Enter the starting number:"));
// for (let i = start; i <= start + 9; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
// console.log(start % 2);

// let number;
// do {
//   number = Number(prompt("Enter a number:"));
// } while (number > 100 || number < 50);

// let number;

// do {
//   number = parseInt(prompt("Enter a number between 2 and 9:"));
// } while (number < 2 || number > 9);

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// function neitherYesNorNo() {
//   console.log(
//     "Let's play 'Neither Yes, Nor No'! Type anything, but not 'yes' or 'no'."
//   );

//   let playing = true;

//   while (playing) {
//     const userInput = prompt("Your response:").trim().toLowerCase();

//     if (userInput === "yes" || userInput === "no") {
//       console.log(`Game over! You typed '${userInput}'.`);
//       playing = false; // Exit the loop
//     } else {
//       console.log("Interesting! Keep going...");
//     }
//   }
// }

// neitherYesNorNo();

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
