const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || num1 % 1 != 0 || num2 % 1 != 0 || typeof(num1) != "number" || typeof(num2) != "number")
        return "ERROR";

    let sum = 0;
    let firstNum = Math.min(num1, num2);
    let lastNum = Math.max(num1, num2);

    for (let i = firstNum; i <= lastNum; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
