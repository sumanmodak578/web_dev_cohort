// write a polyfill for forEach function
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // current object is taraf point karta hain

    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

const arr = [1, 2, 3, 4, 5, 6];

// Real Signature ko samjho - No return, function input, value, index
// calls my fn for every value

const ret = arr.myForEach(function (value, index) {
  console.log(`Value at index ${index} os ${value}`);
});

console.log(ret);
