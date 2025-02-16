const obj1 = {
  fname: "Suman",
  lname: "Modak",
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Asish",
  lname: "Karmakar",
  //   getFullName: function () {
  //     return `${this.fname} ${this.lname}`;
  //   },
};

// DRY - Do not Repeat yourself
obj2.__proto__ = obj1;
// obj1.__proto__ = null; // isko cherna nahi hain, its an intenal property of JS

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());
