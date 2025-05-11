const palindromes = function (str) {
    // Process string. To lower. Get rid of punctuation.
    const newString = processString(str);
    let start = 0;
    let end = newString.length - 1;

    while (start < end) {
        start++;
        end--;
        if (newString[start] !== newString[end]) return false;
    }
    return true;
};

function processString(str) {
    return str.toLowerCase().replace(/[\.,!?;:'"\s]/g, "");
}

// Do not edit below this line
module.exports = palindromes;
