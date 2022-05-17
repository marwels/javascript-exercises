const ftoc = function (fahrenheit) {
  //[°C] = ([°F] − 32) × 5⁄9
  let celsius = (fahrenheit - 32) * (5 / 9);
  //number.toFixed([digits])
  if (fahrenheit === 32) {
    return 0;
  } else {
    return celsius.toFixed(1);
  }

};

const ctof = function (celsius) {
  //[°F] = [°C] × 9⁄5 + 32
  let fahrenheit = celsius * (9 / 5) + 32;
  if (celsius === 0) {
    return 32;
  } else {
    return fahrenheit.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
