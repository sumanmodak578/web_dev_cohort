// polyphil for map

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }

    return result;
  };
}

// Signature .map
// Return? - New Array, Each element Iterate, userFn

const arr = [1, 2, 3, 4, 5, 6];
const n = arr.map((a) => a * 3);
const n2 = arr.myMap((a) => a * 3);
console.log(n2);
