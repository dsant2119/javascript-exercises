const getTheTitles = function (arr) {
    let newArr = [];
    arr.forEach((element) => {
        newArr.push(element.title);
    });

    return newArr;

    //  One-liner: return arr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
