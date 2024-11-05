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

console.log(number1); // Should show 3
console.log(number2); // Should show 5

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
