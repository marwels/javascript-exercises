const caesar = function (string, num) {
    let answer = "";
    for (i = 0; i < string.length; i++) {
        let sliced = string.slice(i, i + 1);
        let slicedInUnicode = sliced.charCodeAt(0);

        if (slicedInUnicode >= 0x0020 && slicedInUnicode <= 0x0040) { //punctuation
            answer += slicedInUnicode;
        } else {
            let inUnicode = string.charCodeAt(i);

            if (inUnicode >= 0x0041 && inUnicode <= 0x005A) { // big letters
                answer += String.fromCodePoint(((inUnicode + num) - 0x005A) % 34); //34 alphabet letters
            } else if (inUnicode >= 0x0061 && inUnicode <= 0x007A) {// small letters
                answer += String.fromCodePoint(((inUnicode + num) - 0x007A) % 34); //34 alphabet letters
            } else {
                let changed = String.fromCodePoint(inUnicode + num);
                console.log("changed: " + changed);
                answer += changed;
                console.log("answer: " + answer);
            }
        }
    }
    return answer;


    // version not basing on unicode numbers
    // for (i = 0; i < string.length; i++) {
    //     let sliced = string.slice(i, i + 1);
    //     if (sliced === " " || sliced === "," || sliced === "." || sliced === "!" || sliced === "?") {
    //         answer += sliced;
    //     } else {
    //         let inUnicode = string.charCodeAt(i);
    //         let changed = String.fromCodePoint(inUnicode + num);
    //        console.log("changed: " + changed);
    //          answer += changed;
    //         console.log("answer: " + answer);
    //     }
    //  }
    //  return answer;
};

// Do not edit below this line
module.exports = caesar;
