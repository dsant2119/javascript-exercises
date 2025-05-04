const palindromes = function (str) {
    // Process string

    let start = 0;
    let end = str.length - 1;
    let pal = false;

    if (str.length % 2 != 0)
        while (start != end) {
            start++;
            end--;
            if (str[start] === str[end]) pal = true;
        }
    else
        while (start != end - 1) {
            counter++;
            start++;
            end--;
            if (str[start] === str[end]) pal = true;
        }
    return pal;
};

// Do not edit below this line
module.exports = palindromes;
