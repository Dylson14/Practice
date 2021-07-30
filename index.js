//Write a function that takes in a number and returns the corresponging day of the week. 
//Ex:
//Input: 1
//Output: 'Monday'
//Input: 5
//Output: 'Friday'
//Input: 8
//Output: undefined

function findDOWNumber (dowNUM) {
    /* we give a number and return a string. We are creating a map */

    var dowList = ["Sunday", "Monday", "Tuesday", "Wednesday"];

    return dowList[dowNUM];



};

console.log("Expected Monday, Actual: " + findDOWNumber(1));
console.log("Expected Friday, Actual: " + findDOWNumber(5));
console.log("Expected undefined, Actual: " + findDOWNumber(8));
