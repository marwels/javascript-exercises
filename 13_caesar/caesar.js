const caesar = function (string, num) {
    let answer = "";
    for (i = 0; i < string.length; i++) {
        let sliced = string.slice(i, i + 1);
        if (sliced === " " || sliced === "," || sliced === "." || sliced === "!" || sliced === "?") {
            answer += sliced;
        } else {
            let inUnicode = string.charCodeAt(i);
            let changed = String.fromCodePoint(inUnicode + num);
            console.log("changed: " + changed);
            answer += changed;
            console.log("answer: " + answer);
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = caesar;
