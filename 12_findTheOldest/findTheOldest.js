const findTheOldest = function (arrayOfObjects) {
    let arrBirth = arrayOfObjects.map((object) => object.yearOfBirth);
    let arrDeath = arrayOfObjects.map((object) => object.yearOfDeath);
    let arrAge = [];

    for (i = 0; i < arrayOfObjects.length; i++) {
        let age = arrDeath[i] - arrBirth[i];
        if (isNaN(age)) {
            let today = new Date();
            let yr = today.getFullYear();
            console.log("year" + yr);
            arrAge.push(yr - arrBirth[i]);
        } else {
            arrAge.push(age);
        }
    }
    console.log("final Arr age");
    console.log(arrAge);

    let largest = Math.max.apply(null, arrAge); //?? skłasnia apply
    console.log(largest);
    //2. version of finding the largest:
    //let temp = 0;
    //arrAge.forEach((element) => {
    //    if (temp < element) {
    //       temp = element;
    //    }
    //});

    let searchedIndex = arrAge.indexOf(largest);
    console.log(searchedIndex);
    return arrayOfObjects[searchedIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
