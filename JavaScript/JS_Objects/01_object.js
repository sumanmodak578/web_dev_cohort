const myObj = {
  fname: "Suman",
  lname: "Modak",
  age: 24,
  hoobies: [
    "coding",
    "playing cricket",
    "watching movies",
    "listening to songs",
  ],

  fullName: function () {
    console.log(`My fullName is ${this.fname} ${this.lname}`);
  },
};

myObj.fullName();
