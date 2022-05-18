const palindromes = function (palin) {
    let arrayPalin = palin.split("");
    const filteredArrayPalin = arrayPalin.filter(Boolean);
    //Falsy values include null, undefined, 0, empty string, NaN and false.
    //So they’ll return false if we pass them into the Boolean function.

    for (var i = 0; i < filteredArrayPalin.length; i++) {

        if (filteredArrayPalin[i] === "," || filteredArrayPalin === "!") {
            filteredArrayPalin.splice(i, 1);
            i--;
        }
    }


    console.log(filteredArrayPalin);

    for (i = 0; i < filteredArrayPalin.length / 2; i++) {
        if (filteredArrayPalin[i] !== filteredArrayPalin[filteredArrayPalin.length - 1 - i]) {
            return false;
        }
    }

    return true;
}


// Do not edit below this line
module.exports = palindromes;