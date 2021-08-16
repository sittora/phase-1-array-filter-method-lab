

// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no matc

function findMatching(collection, name) {
    const result = collection.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
}

// 1) returns a driver if beginning provided letters match
// 2) does not return drivers if only middle or ending letters match
// 3) does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, letters){
    const result = drivers.filter(driver => driver.startsWith(letters));
    return result;
}

// 1) accesses the data structure to check if name matches
function matchName(drivers, name) {
    const result = drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
    return result;
}