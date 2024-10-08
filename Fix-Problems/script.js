/* Challenge 1 */
// Fix the function
function addNumbers(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

const result = addNumbers("10", "5");
console.log(result);
// Expected output: 15, but it logs 105

function somarNumeros(n1, n2) {
  return Number(n1) + Number(n2);
}

const somaFinal = somarNumeros("10", "5");
console.log(somaFinal);

//Done!

/* Challenge 2 */
// Fix the function
function removeFirstItem(arr) {
  arr.splice(0, 1);
  return arr;
}

const items = [1, 2, 3, 4];
const updatedItems = removeFirstItem(items);
console.log(items);
// console.log(updatedItems);
// Expected output: [2, 3, 4], but it logs [1, 2, 3, 4]

//Done too!

/* Challenge 3 */
// Fix this function so it produces the expected outcome.
// Rename x and r to meaningful names, to better represent their functionality/value
function sumPrices(items) {
  let total = 0;

  for (const product of Object.values(items)) {
    total += product.price;
  }

  return total;
}

const shoppingCart = {
  apple: { price: 1.2 },
  banana: { price: 0.8 },
  orange: { price: 1.5 },
};

const totalPrice = sumPrices(shoppingCart);
console.log(totalPrice); // Expected output: 3.5

//I fix all!
