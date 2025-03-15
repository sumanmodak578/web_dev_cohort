// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

teas = {
  name: "Lemon tea",
  type: "Green",
  caffeine: "low",
};

// Problem: Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);

// Problem: Add a new property origin to the tea object.
teas.origin = "China";

// Problem: Change a caffeine level of the tea object to "medium".
teas.caffeine = "medium";

// Problem: Remove the type property from the tea object.
delete teas.type;

// Problem: Check if the tea object has a property origin.
console.log(Object.hasOwn(teas, "type"));

// Problem: Use a for..in loop to print all properties of the tea object.
for (const key in teas) {
  console.log(key + ": " + teas[key]);
}

// Problem: Create a nested object representing different types of teas and their properties.
const myTeas = {
  greenTea: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black Tea",
  },
};

// Problem: Create a copy of the tea object.
const refTea = teas; // reference
const teaCopy = { ...teas }; // shallow copy
const teaDeepCopy = JSON.parse(JSON.stringify(teas)); // deep copy

// Problem: Add a custom method describe to the tea object that returns a description string.

// Merge two objects representing different teas into one.
