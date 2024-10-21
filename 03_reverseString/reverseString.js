const reverseString = function(word) {
    if(word.length <= 1)
        return word;

    return  reverseString(word.slice(1)) + word.charAt(0);

    /*
        Non-recursive, super simple way:
        return string.split("").reverse().join("");
    */
};

console.log(reverseString('word'));

// Do not edit below this line
module.exports = reverseString;
