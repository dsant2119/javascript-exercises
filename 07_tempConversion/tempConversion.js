const convertToCelsius = function(temp) {
  const temp_C = ((temp - 32) * (5/9));
  console.log(temp_C);
  return temp_C;
};

const convertToFahrenheit = function(temp) {
  const temp_F = ((temp *(5/9) + 32));
  console.log(temp_F);
  return temp_F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
