const removeFromArray = function() {
    const argsArray = Array.from(arguments);
    let removeFromValues = argsArray[0];
    let valuesToRemove = argsArray.slice(1);

    const filteredArray = removeFromValues.filter(item => !valuesToRemove.includes(item));

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
