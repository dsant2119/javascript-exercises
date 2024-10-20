const repeatString = function(word, num) {
    newString = '';
    for(i = 0; i < num; i++){
        newString += word;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
