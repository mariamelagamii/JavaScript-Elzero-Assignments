function checkStatus(...param) {
    let name, age, avail, msg;
    for (let i = 0; i < param.length; i++) {
        typeof param[i] === "string" ? name = param[i] :
            typeof param[i] === "number" ? age = param[i] : avail = param[i];
    }
    avail ? msg = "Available" : msg = "Not Available";
    console.log(`Hello ${name}, Your Age is ${age}, You Are ${msg} For Hire`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"