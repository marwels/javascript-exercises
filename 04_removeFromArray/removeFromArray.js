const removeFromArray = function (array, ...toRemove) {

    function isEqual(value) {
        for (i = 0; i < toRemove.length; i++) {
            if (value !== toRemove[i]) {
                return true; // filter includes in new array those elements, for which is Equal returns true
            }
        }
    }
    let filtered = array.filter(isEqual);
    return filtered;
}

// Do not edit below this line
module.exports = removeFromArray;
