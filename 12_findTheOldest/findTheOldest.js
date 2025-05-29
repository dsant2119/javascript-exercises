const findTheOldest = function (array) {
    const sorted = array.sort((a, b) => {
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;
        return ageB - ageA;
    });

    return sorted[0];
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
