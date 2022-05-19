const findTheOldest = function (arrayOfObjects) {
    let arrBirth = arrayOfObjects.map((object) => object.yearOfBirth);
    let arrDeath = arrayOfObjects.map((object) => object.yearOfDeath);
    let arrAge = [];

    for (i = 0; i < arrayOfObjects.length; i++) {
        arrAge.push(arrDeath[i] - arrBirth[i]);
    }
    console.log(arrAge);

    for (i = 0; i < arrAge.length; i++) {
        if (arrAge[i] === NaN) {
            let today = new Date();
            let yr = today.getFullYear();
            console.log(yr);
            arrAge[i] = yr - arrBirth[i];
        }
    }

    console.log(arrAge);

    let largest = Math.max.apply(Math, arrAge); //?? skłasnia apply
    console.log(largest);
    //2. version of finding the largest:
    //let temp = 0;
    //arrAge.forEach((element) => {
    //    if (temp < element) {
    //       temp = element;
    //    }
    //});

    let searchedIndex = arrAge.indexOf(largest);
    return arrayOfObjects[searchedIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
