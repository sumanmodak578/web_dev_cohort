let p1 = {
  a: 1,
  b: 2,
  c: [3, 4, 5],
};

// pass by reference
let p2 = p1;

let p3 = {
  ...p1, // Spread Operator
};

p3.b = 32;
p3.c[1] = 52;
console.log(p1);
console.log(p3);
