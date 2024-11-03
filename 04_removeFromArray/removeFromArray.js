const removeFromArray = function(arr, ...searchArgs) {
    newArr = [];
    
    arr.forEach(element => {
        if(!searchArgs.includes(element))
            newArr.push(element);
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
