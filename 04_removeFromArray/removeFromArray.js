const removeFromArray = function (array, ...toRemove) {

    function isEqual(value) {
        let equal = toRemove.includes(value);
        let notEqual = !equal; // filter includes in new array those elements, for which is Equal returns true
        return notEqual;
    }
    let filtered = array.filter(isEqual);
    return filtered;
}

// Do not edit below this line
module.exports = removeFromArray;


