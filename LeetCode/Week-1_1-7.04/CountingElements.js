/*
Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them seperately.
*/

var countElements = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = arr.indexOf(arr[i] + 1);
        if (j >= 0) {
            count++;
        }
    }
    return count;
};

let arrA = [1, 2, 3];
let arrB = [1, 1, 3, 3, 5, 5, 7, 7];
let arrC = [1, 3, 2, 3, 5, 0];
let arrD = [1, 1, 2, 2];

console.log(countElements(arrA));
console.log(countElements(arrB));
console.log(countElements(arrC));
console.log(countElements(arrD));