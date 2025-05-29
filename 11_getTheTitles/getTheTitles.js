const books = [
    {
        title: "Book",
        author: "Name",
    },
    {
        title: "Book2",
        author: "Name2",
    },
];

const getTheTitles = function (arr) {
    let newArr = [];
    arr.forEach((element) => {
        newArr.push(element.title);
    });

    return newArr;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
