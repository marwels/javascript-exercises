const findTheOldest = function (arrayOfObjects) {
    let arrBirth = arrayOfObjects.map((object) => object.yearOfBirth);
    let arrDeath = arrayOfObjects.map((object) => object.yearOfBirth);
    let arrAge = [];

    for (i = 0; i < arrayOfObjects.length; i++) {
        arrAge.push(arrDeath[i] - arrBirth[i]);
    }
    console.log(arrAge);

    let temp = 0;
    arrAge.forEach((element) => {
        if (temp < element) {
            temp = element;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
