const sumAll = function(num1, num2) {

    if ((Number.isInteger(num1) && num1 > 0) && (Number.isInteger(num2) && num2 > 0)) {
        let endVal = Math.max(num1, num2); // get start value
        let startVal = Math.min(num1, num2); // get end value
        let finalSum = startVal; // initialize starting sum to starting value

        for (let i = (startVal + 1); i <= endVal; i++) {
            finalSum += i;
        }

        return finalSum;

    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
