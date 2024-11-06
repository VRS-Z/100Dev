const account = {
    name: "Alex",
    balance: 0,
    
    credit(amount) {
      this.balance += amount;
    },
    
    describe() {
      return `Owner: ${this.name}, Balance: ${this.balance}`;
    }
  };
  
  console.log(account.describe());
  
  account.credit(250);
  account.credit(-80);
  
  console.log(account.describe());
  
  function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  };

  function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); 
  alert( arr ); 

  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  };
  
  let values = [5, 3, 8, 1];
  
  filterRangeInPlace(values, 1, 4); 
  
  alert( values ); 

  let newValues = [5, 2, 1, -10, 8];

  newValues((a,b) => b - a);

  alert( newValues);

  function copyTechs(techs) {
   return techs.slice().sort();
  };

  let techs = ["HTML", "JavaScript", "CSS"];

  let sorted = copyTechs(techs);

  alert( sorted );
  alert( techs );

  function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  };

  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );

let otavio = { name: "Otávio", surname: "Mendes", id: 1 };
let domini = { name: "Domini", surname: "Sunset", id: 2 };
let maria = { name: "Maria", surname: "Silva", id: 3 };

let usersAdmin = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); 
alert( usersMapped[0].fullName ); 

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let glauber = { name: "Glauber", age: 25 };
let ricardo = { name: "Ricardo", age: 30 };
let paulo = { name: "Paulo", age: 28 };

let alunos = [ glauber, ricardo, paulo ];

sortByAge(arr);

alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 

function shuffle(myValues) {
  myValues.sort(() => Math.random() - 0.5);
}

let myValues = [1, 2, 3];
shuffle(myValues);
alert(myValues);

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let Otávio = { name: "Otávio", age: 18 };
let Patrick = { name: "Patrick", age: 27 };
let Maria = { name: "Maria", age: 17 };

let players = [ Otávio, Patrick, Maria];

alert( getAverageAge(players) );

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}