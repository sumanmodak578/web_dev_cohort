let p1 = {
  a: 1,
  b: 2,
  c: [3, 4, 5],
};

let p2 = JSON.parse(JSON.stringify(p1));

p2.b = 34;
p2.c[1] = 54;

console.log(p1);
console.log(p2);
