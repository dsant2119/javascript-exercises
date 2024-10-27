const removeFromArray = function(arr, ...searchArgs) {
    // argumentsArr = searchArgs;
    console.log("Starting array: ", arr);
    console.log("Elements to be removed array: ", searchArgs);
    startArr = arr;
    newArr = [];
    startIndex = 0;
    num = -1;
    searchArgs.forEach(element => {
        console.log("Checking for: " + element);
        if(startArr.includes(element)){
            console.log(startArr.slice(startIndex, startArr.indexOf(element)).concat(startArr.slice(startArr.indexOf(element) + 1)));
            newArr = newArr.concat(startArr.slice(startIndex, startArr.indexOf(element)).concat(startArr.slice(startArr.indexOf(element) + 1)));
            console.log("Start index: " + startIndex);
        }
        console.log("New array: ", newArr);
    });
    // newArr = arr.slice(0, arr.indexOf(numToRemove)).concat(arr.slice(arr.indexOf(numToRemove) + 1));
    console.log(newArr);
    return newArr;
};
removeFromArray([1,2,3,4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
