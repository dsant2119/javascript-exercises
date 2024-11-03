const removeFromArray = function(arr, ...searchArgs) {
    console.log("Starting array: ", arr);
    console.log("Elements to be removed array: ", searchArgs);
    newArr = [];

    arr.forEach(element => {
        if(!searchArgs.includes(element))
            newArr.push(element);
    });

    console.log("New array final: ",  newArr);
    return newArr;
};
removeFromArray([1,2,3,4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
