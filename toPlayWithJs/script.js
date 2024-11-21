// Escreva uma função que receba dois números
// e retorne a soma deles.

function somaDoisNumeros(x, y) {
  return x + y;
}
console.log(somaDoisNumeros(10, 5));

// Escreva uma função que receba um número
// e diga se ele é par ou ímpar.
function verificarParidade(x) {
  if (x % 2 === 0) return "Par";
  else {
    return "Ímpar";
  }
}
console.log(verificarParidade(4));
console.log(verificarParidade(7));

// Escreva uma função que receba um número
// e retorne a soma
// de todos os números de 1 até esse número.

function somarAte(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  return sum;
}
console.log(somarAte(5));

// Crie uma função
// que receba uma lista de números
// e retorne o maior número dessa lista.

function encontrarMaior(lista) {
  let maior = lista[0];
  for (let numero of lista) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}
console.log(encontrarMaior([10, 20, 5, 8, 30])); // Deve retornar 30
console.log(encontrarMaior([-1, -5, -3])); // Deve retornar -1
