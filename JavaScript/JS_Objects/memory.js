// Primitive data types like stings, intergers, boolean this all values stores in stack memory
let a = 10;
let b = a;

a = 15;
console.log(a, b);

// Non-Primitive data types like Array, objects, tree this all values stores in heap memory
let p1 = {
  fname: "Suman",
  lname: "Modak",
  address: {
    h: 1,
    s: 1,
  },
};

let p2 = p1;

// p2.lname = "Karmakar";
// console.log(p1);
// console.log(p2);

let p3 = {
  ...p1, // Spread operator
};

p3.lname = "karmakar";
p3.address.h = 2;
console.log(p3);
console.log(p1);

const p1kaString = JSON.stringify(p1);
console.log(p1kaString);
let p4 = JSON.parse(p1kaString);
