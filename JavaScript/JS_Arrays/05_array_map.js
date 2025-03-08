const nums = [1, 2, 3, 4, 5];

const roots = nums.map((num) => num ** 2);
console.log(nums);

const newArr = [
  {
    key: 1,
    value: 10,
  },
  {
    key: 2,
    value: 20,
  },
  {
    key: 3,
    value: 30,
  },
];

const result = newArr.map(({ key, value }) => ({ [key]: value }));
console.log(result);

const anotherArr = nums.map((value, index) => {
  if (index < 3) {
    return value;
  }
});

console.log(anotherArr);
