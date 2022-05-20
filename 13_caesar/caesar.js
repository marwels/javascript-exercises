const caesar = function (string) {
    let answer = "";
    for (i = 0; i < string.length; i++) {
        answer += string.charCodeAt(i);
        console.log(answer);
    }
    return answer;
};

// Do not edit below this line
module.exports = caesar;
