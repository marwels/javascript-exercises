const sumAll = function (startNum, finishNum) {

    //Gauss: (n / 2) (first number + last number) = sum
    //n= last-first+1
    if (typeof startNum !== "number" || typeof finishNum !== "number") {
        return "ERROR";
    } else if (startNum < 0 || finishNum < 0) {
        return "ERROR";
    } else if (startNum < finishNum) {
        return ((finishNum - startNum + 1) / 2) * (startNum + finishNum);
    } else {
        return ((startNum - finishNum + 1) / 2) * (finishNum + startNum);
    }
};

// Do not edit below this line
module.exports = sumAll;
