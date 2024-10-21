const removeFromArray = function(arr, numToRemove) {
    newArr = arr.slice(0, arr.indexOf(numToRemove)).concat(arr.slice(arr.indexOf(numToRemove) + 1));
    // console.log(arr.indexOf(numToRemove));
    return newArr;
};
console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;
