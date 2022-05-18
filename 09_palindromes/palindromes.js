const palindromes = function (palin) {
    let arrayPalin = palin.split("");
    const filteredArrayPalin = arrayPalin.filter(Boolean);
    //Falsy values include null, undefined, 0, empty string, NaN and false.
    //So they’ll return false if we pass them into the Boolean function.

    console.log(filteredArrayPalin);

    for (i = 0; i < filteredArrayPalin.length; i++) {
        if (filteredArrayPalin[i] === filteredArrayPalin[filteredArrayPalin.length - i]) {
            continue;
        } else { return false; }

    }
};

// Do not edit below this line
module.exports = palindromes;
