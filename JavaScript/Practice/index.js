Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `Hello ${name}`;
}

// greet.describe();

function add(a, b) {
  // function declaration
  return a + b;
}

const substract = function (a, b) {
  // function expression
  return a - b;
};

const multiply = (a, b) => a + b; // arrow function

// first class function
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);
// console.log(result);

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());

function onef() {
  let myName = "suman";
}

// console.log(myName);

(function () {
  // iife - immediately invoked function expression
  console.log("suman");
})()()();
