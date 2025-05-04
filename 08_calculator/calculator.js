const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  return numArr.reduce((accumulator, value) => accumulator + value, 0); // Note the comma before the zero separates the clbk fn args from the initial value arg.
};

const multiply = function (numArr) {
  if (numArr.includes(0)) return 0;
  else return numArr.reduce((accumulator, value) => accumulator * value, 1);
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
