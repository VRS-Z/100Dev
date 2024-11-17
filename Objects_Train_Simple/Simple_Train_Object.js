let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Sum all values and storage the result in the var call "sum".
// Expected output: 390
// If salaries = undefined/void = 0

let salaries = {
  Jonh: 100,
  Ann: 160,
  Pete: 130,
};

let sum = salaries.Ann + salaries.Jonh + salaries.Pete;
if (salaries <= undefined) {
  return 0;
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
