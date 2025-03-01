// Array creation using array literal notation

const fruits1 = ["apple", "banana", "grapes"];

// array creation using array constructor notation

const fruits2 = new Array("orange", "mango");

// array creation using String.Prototype.split()

const fruits3 = "guava, pomegranate".split(",");
console.log(fruits3);

// create a string from an array
const phones = ["samsung", "apple", "oneplus"];
console.log(phones.join(", "));

// array indexing
console.log(phones[0]);
console.log(phones[phones.length - 1]);

// find the index of an array
console.log(phones.indexOf("apple"));

// check if array contains an element or not
console.log(phones.includes("samsung"));
console.log(phones.includes("redmi"));
console.log(phones.indexOf("oneplus") !== -1);
console.log(phones.indexOf("redmi") !== -1);
