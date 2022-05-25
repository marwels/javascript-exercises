const caesar = function (string, num) {
    let answer = "";
    for (i = 0; i < string.length; i++) {
        let sliced = string.slice(i, i + 1);
        let slicedInUnicode = sliced.charCodeAt(0);

        if (num > 26) { //26 alphabet letters
            num = num % 26;
        }

        if (slicedInUnicode >= 0x0020 && slicedInUnicode <= 0x0040) { //punctuation
            answer += sliced;
        } else {
            let inUnicode = string.charCodeAt(i);

            if (inUnicode >= 0x0041 && inUnicode <= 0x005A) { // big letters
                if ((inUnicode + num) > 0x005A) {

                    answer += String.fromCodePoint((inUnicode + num - 26)); // this does not work!!
                } else {
                    answer += String.fromCodePoint(inUnicode + num);
                }

            } else if (inUnicode >= 0x0061 && inUnicode <= 0x007A) {// small letters
                if ((inUnicode + num) > 0x007A) {
                    answer += String.fromCodePoint(((inUnicode + num) - 26));
                } else {
                    answer += String.fromCodePoint(inUnicode + num);
                }
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
