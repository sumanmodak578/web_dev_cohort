// polyphil for filter function

// Signature : Return - new array | input: userFn,
// agar user ka function True return karta hain to current value ko new araray peh include kar deta hain

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];
const f = arr.myFilter((a) => a % 2 == 0);
console.log(f);
