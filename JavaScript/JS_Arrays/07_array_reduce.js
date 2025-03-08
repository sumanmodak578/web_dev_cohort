const myarr = [1, 2, 3, 4, 5];

const initialValue = 0;

const sum = myarr.reduce((accumolator, currentValue) => {
  return accumolator + currentValue;
}, initialValue);

console.log(sum);
