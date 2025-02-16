class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Suman", "Modak");
const p2 = new Person("Asish", "Karmakar");
console.log(p1.getFullName());
console.log(p2.getFullName());
