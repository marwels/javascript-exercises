const ftoc = function (fahrenheit) {
  //[°C] = ([°F] − 32) × 5⁄9
  let celsius = Number((fahrenheit - 32) * (5 / 9));

  if (fahrenheit === 32) {
    return 0;
  } else {
    return Number(celsius.toFixed(1));
    //number.toFixed([digits]) returns string!




  }

};

const ctof = function (celsius) {
  //[°F] = [°C] × 9⁄5 + 32
  let fahrenheit = Number((celsius * (9 / 5) + 32));
  if (celsius === 0) {
    return 32;
  } else {
    return Number(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
