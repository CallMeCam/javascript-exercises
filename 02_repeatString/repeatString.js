const repeatString = function(repeatingString, repeatNum) {
    let newString = "";

    if (repeatNum >= 0) {
        for (let i = 0; i < repeatNum; i++) {
            newString += repeatingString;
        }
    } else {
        newString = "ERROR";
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
