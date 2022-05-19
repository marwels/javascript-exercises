const getTheTitles = function (arrayOfObjects) {
    let titles = [];
    for (i = 0; i < arrayOfObjects.length; i++) {
        titles.push(arrayOfObjects[i].title);
        console.log(titles);
    }

    //2. version return arrayOfObjects.map((object) => object.title).filter(Boolean)

    //3. version for (const object of arrayOfObjects) {
    //     if (object.title !== undefined) titles.push(object.title);
    //}

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
