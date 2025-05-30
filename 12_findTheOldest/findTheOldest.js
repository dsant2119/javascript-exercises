const findTheOldest = function (array) {
    const sorted = array.sort((a, b) => {
        const currentDate = new Date().getFullYear();
        let ageA = -111;
        let ageB = -111;

        if (a.yearOfDeath != undefined && b.yearOfDeath != undefined) {
            ageA = a.yearOfDeath - a.yearOfBirth;
            ageB = b.yearOfDeath - b.yearOfBirth;
        } else {
            ageA = currentDate - a.yearOfBirth;
            ageB = currentDate - b.yearOfBirth;
        }
        return ageB - ageA;
    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
