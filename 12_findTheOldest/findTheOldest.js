const findTheOldest = function (array) {
    const sorted = array.sort((a, b) => {
        const currentDate = new Date().getFullYear();
        const ageA = -111;
        const ageB = -111;

        if (a.yearOfDeath != undefined && b.yearOfDeath != undefined) {
            const ageA = a.yearOfDeath - a.yearOfBirth;
            const ageB = b.yearOfDeath - b.yearOfBirth;
        } else {
            const ageA = currentDate - a.yearOfBirth;
            const ageB = currentDate - b.yearOfBirth;
        }
        return ageB - ageA;
    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
