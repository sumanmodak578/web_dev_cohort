const str = "Suman";
str.length; // 5
// String.prototype = {all strings functions}
//  str.__proto__ = String.prototype

const arr = [1, 2, 4];
arr.fill();

if (!Array.prototype.fill) {
  // Fallback - Polyfill - Backup Function
  Array.prototype.fill = function () {};
}
