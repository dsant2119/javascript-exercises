const fibonacci = (num) => {
    let arr = [];
    let number = Number(num);
    if (number === 0) return 0;
    if (number < 0) return "OOPS";

    for (let i = 0; i < number; i++) {
        if (i === 0 || i === 1) arr.push(1);
        else arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
