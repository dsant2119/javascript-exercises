const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const findTheOldest = function (array) {
    let ageToBeat = calculateAge(array[0]);
    array.forEach((person) => {
        if (calculateAge(person) > ageToBeat) return person;
        else return array[0];
    });
};

const calculateAge = (obj) => {
    return obj.yearOfDeath - obj.yearOfBirth;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
