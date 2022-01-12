// Code your solution here
function findMatching(arrDrivers, name) {
    const arrMatching = arrDrivers.filter(element => element === name || element === name.toLowerCase());
    return arrMatching;
}

function fuzzyMatch(arrDrivers, name) {
    const arrMatching = arrDrivers.filter(element => element[0] === name[0])
    return arrMatching;
}

function matchName(arrDrivers, name) {
    const arrMatching = arrDrivers.filter(element => element.name === name)
    return arrMatching;
}
