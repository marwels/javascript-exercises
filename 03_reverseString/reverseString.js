const reverseString = function (string) {
    let sliced = [];
    let slicedReversed = [];
    for (i = 0; i <= string.length; i++) {
        sliced.push(string.slice(i, i + 1));
    }
    for (i = 0; i <= sliced.length; i++) {
        slicedReversed.push(sliced[sliced.length - i]);
    }
    return slicedReversed.join("");

};

// Do not edit below this line
module.exports = reverseString;
