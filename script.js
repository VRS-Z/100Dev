console.log("Otávio");
console.log(18);
console.log(10-8);
console.log(2+6);
console.log(1*4);
console.log(6/3);
console.log(4 + 5); // Display like this "4 + 5"
console.log("4 + 5"); // Sum the two values
console.log("4" + "5"); // Not run

// const firstName = prompt("Give me you firstName");

// const lastName = prompt("Give me you lastName");                          

// alert(`Hello, ${firstName} ${lastName}`);

let a = 2;
a -= 1;
a++;
// a = 2
let b = 8;
b += 2;
// b = 10
const c = a + b * b;
// c = 102
const d = a * b + b;
// d = 30
const e = a * (b + b);
// e = 40
const f = a * b / a;
// f = 10
const g = b / a * a;
// g = 10
console.log(a, b, c, d, e, f, g);

const precoBruto = Number(prompt("Me fale um preço bruto"));
let precoTotal = precoBruto * 1.206;
alert(`Pós imposto você teria ${precoTotal}`);

const Celsius = Number(prompt("Me fale sua temperatura em Celsius para eu converter em Fahrenheit: "));
let Fahrenheit = Celsius * 9 / 5 + 32;
alert("Convertido em Fahrenheit isto seria igual a: " + Fahrenheit);

let number1 = 5;
let number2 = 3;

number1 -= 2;

number2 += 2;

console.log(number1); 
console.log(number2); 

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
}

const Meses = prompt("Me fale um número de mês");
switch (Meses) {
    case "1":
        alert("Temos 31 dias neste mês");
        break;
    case "2":
        alert("Temos apenas 28 dias neste mês");
        break;
    case "3":
        alert("Temos 30 dias neste mês");
        break;
    case "4":
        alert("Temos 31 dias neste mês");
        break;
    default:
        alert("Este não é um número de mês válido!");
        break;
}

function getTimeOneSecondLater(hours, minutes, seconds) {
    if (
        hours < 0 || hours > 23 ||
        minutes < 0 || minutes > 59 ||
        seconds < 0 || seconds > 59
    ) {
        return "Invalid time input!";
    }

    seconds += 1;

    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    if (hours === 24) {
        hours = 0;
    }

    return `${hours}h${minutes}m${seconds}s`;
}

console.log(getTimeOneSecondLater(14, 17, 59)); 
console.log(getTimeOneSecondLater(6, 59, 59));  
console.log(getTimeOneSecondLater(23, 59, 59)); 


for (let i = 1; 1 <= 10; i++) {
    console.log(i);
}

let startNumber = parseInt(prompt("Enter the starting number:"));

for (let i = startNumber, count = 0; count < 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
  count++;
}

let number;

do {
  number = parseInt(prompt("Enter a number:"));
} while (number < 50 || number > 100);

console.log("You entered a number between 50 and 100:", number);

let number;

do {
  number = parseInt(prompt("Enter a number between 2 and 9:"));
} while (number < 2 || number > 9);

console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

let input;

do {
  input = prompt("Type something (but don't say 'yes' or 'no'):");
} while (input.toLowerCase() !== "yes" && input.toLowerCase() !== "no");

console.log("Game over! You typed either 'yes' or 'no'.");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  
  console.log(sayHello(firstName, lastName));
  
  function square1(x) {
    return x * x;
  }
  
  const square2 = x => x * x;
  
  console.log(square1(0));
  console.log(square1(2));
  console.log(square1(5));
  
  console.log(square2(0));
  console.log(square2(2));
  console.log(square2(5));
  
  for (let i = 0; i <= 10; i++) {
    console.log(square1(i));
  }

  function min(a, b) {
    return a < b ? a : b;
  }
  
  console.log(min(4.5, 5)); 
  console.log(min(19, 9));  
  console.log(min(1, 1));   

  function calculate(a, operator, b) {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      return a / b;
    } else {
      return "Unknown operator";
    }
  }
  
  console.log(calculate(4, "+", 6));  
  console.log(calculate(4, "-", 6));  
  console.log(calculate(2, "*", 0));  
  console.log(calculate(12, "/", 0)); 

  function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  function calculateArea(radius) {
    return Math.PI * (radius ** 2);
  }
  
  const radius = parseFloat(prompt("Enter the radius of the circle:"));
  
  if (!isNaN(radius) && radius > 0) {
    const circumference = calculateCircumference(radius);
    const area = calculateArea(radius);
    
    console.log(`Circumference: ${circumference}`);
    console.log(`Area: ${area}`);
  } else {
    console.log("Please enter a valid positive number for the radius.");
  }
  
  for (let i = 1; i <= 7; i++) {
    let triangleLine = '#'.repeat(i);
    console.log(triangleLine);
}

let size = 8;
let chessboard = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            chessboard += ' ';
        } else {
            chessboard += '#';
        }
    }
    chessboard += '\n';
}

console.log(chessboard);

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(0, 10));  // → 0
console.log(min(0, -10)); // → -10

function isEven(n) {
  if (n < 0) return isEven(-n);
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}

console.log(isEven(50));  // → true
console.log(isEven(75));  // → false
console.log(isEven(-1));  // → false

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
          count++;
      }
  }
  return count;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs("BBC"));          // → 2
console.log(countChar("kakkerlak", "k")); // → 4
