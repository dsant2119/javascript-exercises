const repeatString = function(word, num) {
    if (num < 0)    return 'ERROR';
    newString = '';
    
    for(i = 0; i < num; i++)
        newString += word;

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
