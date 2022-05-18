const add = function (...toAdd) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

  let sum = toAdd.reduce((a, b) => a + b, 0); // with initial value to avoid when the array is empty
  return sum;
};

const subtract = function (...toSubstract) {
  let total = toSubstract.reduce((a, b) => a - b, 0); // with initial value to avoid when the array is empty
  return total;
};

const sum = function (...toSum) {
  if (toSum.length === 1 && Array.isArray(toSum[0])) {
    toSum = toSum[0];
  }
  let total = toSum.reduce((a, b) => a + b, 0); // with initial value to avoid when the array is empty
  return total;
};

const multiply = function () {

};

const power = function () {

};

const factorial = function () {

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
