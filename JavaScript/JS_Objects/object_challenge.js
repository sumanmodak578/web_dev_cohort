// Create an object representing a type of tea with properties for name, type, and caffeine content

const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "low",
};

//  access and print the name and type properties of tea object.
console.log(teas.name);
console.log(teas["type"]);

// add a new property origin to the tea object.
teas.origin = "Assam";

// change hte caffeine level of tea object to "medium"
teas.caffine = "Medium";

// remove the type property from the tea object.
delete teas.type;

// Check if the tea object has a property origin
console.log("origin" in teas);

// use a for.. in loop to print all properties of tea object

for (let key in teas) {
  console.log(key + ": " + teas[key]);
}

//  create a nested object representing different types of teas and their properties
const myTeas = {
  greenTea: {
    name: "Green Tea",
    cups: {
      one: "1",
      two: "2",
    },
  },
  blackTea: {
    name: "Black Tea",
  },
};

// create a copy of tea object

const teaCopy = { ...myTeas }; // shallow copy - copy only first level copy
teaCopy.greenTea.cups.one = 4;
const anotherCopy = myTeas; // reference
console.log(myTeas);
console.log(teaCopy);

// add a custom method describe to the tea object that returns a description string.
