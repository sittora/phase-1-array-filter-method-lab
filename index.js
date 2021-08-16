
function findMatching(collection, name) {
    const result = collection.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
}


function fuzzyMatch(drivers, letters){
    const result = drivers.filter(driver => driver.startsWith(letters));
    return result;
}


function matchName(drivers, name) {
    const result = drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
    return result;
}