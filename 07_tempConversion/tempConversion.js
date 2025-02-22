const convertToCelsius = function(tempVal) {
  // C = (temp - 32) * (5/9)
  return (Math.round((tempVal - 32) * (5/9) * 10) / 10);

};

const convertToFahrenheit = function(tempVal) {
  // F = (temp * (9/5)) + 32
  return (Math.round(((tempVal * (9/5)) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
