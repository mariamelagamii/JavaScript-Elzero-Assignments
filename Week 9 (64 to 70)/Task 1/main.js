function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let fName = zName.slice(0,5);
        let lName = zName.slice(5, 7).toUpperCase();
        return `Hello ${fName} ${lName}.`
    }
    function ageWithMessage(zAge) {
        let Age = zAge.split(" ")[0];
        return `Your Age Is ${Age}`
    }
    function countryTwoLetters(zCountry) {
        let country = zCountry.slice(0, 2).toUpperCase();
        return `You Live in ${country}`
    }
    function fullDetails() {
        return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY