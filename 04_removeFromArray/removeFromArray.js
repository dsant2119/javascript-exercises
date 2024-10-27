const removeFromArray = function(arr, ...searchArgs) {
    // argumentsArr = searchArgs;
    console.log("Starting array: ", arr);
    console.log("Elements to be removed array: ", searchArgs);
    newArr = [];
    searchArgs.forEach(element => {
        console.log("Checking for: " + element);
        if(arr.includes(element)){
            console.error(arr.slice(0, arr.indexOf(element)));
            newArr.push(arr.slice(0, arr.indexOf(element)));
        }
        console.log(newArr);
    });
    // newArr = arr.slice(0, arr.indexOf(numToRemove)).concat(arr.slice(arr.indexOf(numToRemove) + 1));
    console.log(newArr);
    return newArr;
};
removeFromArray([1,2,3,4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
