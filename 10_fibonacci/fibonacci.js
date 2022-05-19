const fibonacci = function (num) {
    let arrFibonacci = [1, 1];
    if (num < 0) { return "OOPS" }
    for (i = 2; i <= num; i++) {
        arrFibonacci.push(arrFibonacci[i - 1] + arrFibonacci[i - 2]);
        console.log(arrFibonacci);

    }
    return arrFibonacci[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
