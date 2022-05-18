const add = function (...toAdd) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  if (toAdd.length === 1 && Array.isArray(toAdd[0])) {
    toAdd = toAdd[0];
  }
  let sum = toAdd.reduce((a, b) => a + b, 0); // with initial value to avoid when the array is empty
  return sum;
};

const subtract = function (a, b) {
  let total = a - b;
  return total;
};

const sum = function (...toSum) {
  if (toSum.length === 1 && Array.isArray(toSum[0])) {
    toSum = toSum[0];
  }
  let total = toSum.reduce((a, b) => a + b, 0); // with initial value to avoid when the array is empty
  return total;
};

const multiply = function (...toMultiply) {
  if (toMultiply.length === 1 && Array.isArray(toMultiply[0])) {
    toMultiply = toMultiply[0];
  }
  let total = toMultiply.reduce((a, b) => a * b, 1); // with initial value to avoid when the array is empty
  return total;
};

const power = function (m, n) {
  return Math.pow(m, n);
};

const factorial = function (num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
