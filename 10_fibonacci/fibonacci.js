const fibonacci = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) arr.push(1);
        else arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[num - 1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
