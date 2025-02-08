function ageInTime(theAge) {
    if (theAge >= 100 || theAge <=10) {
        return console.log(`Age Out Of Range`);
    }
    console.log(`Year: ${theAge}`)
    console.log(`Months: ${theAge *= 12}`)
    console.log(`Weeks: ${theAge *= 4}`)
    console.log(`Days: ${theAge *= 7}`)
    console.log(`Hours: ${theAge *= 24}`)
    console.log(`Minutes: ${theAge *= 60}`)
    console.log(`Seconds: ${theAge *= 60}`)
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months