// Problem: Create am array containing different type of teas.
const teas = [
  "Green tea",
  "black tea",
  "oolong tea",
  "white tea",
  "herbal tea",
];
// console.log(teas);

// add "chamomile tea"
teas.push("chamomile tea");

// remove "oolong tea" from the list of teas
const index = teas.indexOf("oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}

// console.log(teas);

// filter the list to only include teas that are caffeinated.

const caffinatedTeas = teas.filter((tea) => tea !== "Herbal tea");
// console.log(caffinatedTeas);

// sort the list of teas in alphabetical order.
console.log(teas.sort());

// use a for loop to print each type of tea
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// use a for loop to count how many teas are caffeinated(excluding = "herbal tea")
let caffinatedMyTeas = 0;

for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal tea") {
    caffinatedMyTeas++;
  }
}
console.log(caffinatedMyTeas);

//  use a for loop to create a new array with all tea names in uppercase
const uppcaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppcaseTeas.push(teas[i].toUpperCase());
}
console.log(uppcaseTeas);

// use a for loop to find a tea name with most characters.

let longTeaName = "";

for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longTeaName) {
    longTeaName = teas[i];
  }
}
console.log(longTeaName);
// use a for loop to reverse the order of teas in the array

const reversedArray = [];

for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
console.log(reversedArray);
