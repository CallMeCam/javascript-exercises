const reverseString = function(revString) {
    newString = "";

    for (let i = revString.length - 1; i >= 0; i--) {
        newString += revString[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
