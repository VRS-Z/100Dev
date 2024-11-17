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

// My example of simple object :)

let soulsLike = {
  init: "demonSouls",
  mid: "darksouls 3",
  peak: "elden Ring",
};

soulsLike.motivation = function () {
  alert("Go to farm xp!");
};

soulsLike.mvp = "sekiro";
soulsLike.badGame = "amored Core";
delete soulsLike.badGame;

console.log(soulsLike);

// End my fun

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?
// The result is: "John", alert tell the prop this.name in the function makeUser.
// Bad, i miss. This element is one error! (In the situation bellow).

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
// I think that no.
// Miss again!

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);