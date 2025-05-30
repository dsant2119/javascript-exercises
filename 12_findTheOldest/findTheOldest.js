const calculateAge = (person) => {
    const currentYear = new Date().getFullYear();
    return (person.yearOfDeath || currentYear) - person.yearOfBirth;
};

const findTheOldest = (array) => {
    // Use reduce to iterate through the array and keep track of the oldest person found so far
    return array.reduce((oldest, currPerson) => {
        // Calculate the age of the current person
        const currAge = calculateAge(currPerson);
        // Calculate the age of the oldest person found so far
        const oldestAge = calculateAge(oldest);

        // Compare the ages and return whichever person is older
        // This returned person becomes the new 'oldest' for the next iteration
        return currAge > oldestAge ? currPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
