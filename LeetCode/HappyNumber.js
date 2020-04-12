/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.
*/

var isHappy = function(n) {
    var calc = function(n) {
        let res = 0;
        let nums = String(n).split('').map(x => +x);
        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];
            res += (el * el);
        }
        return res;
    }

    while (n != 1) {
        let k = calc(n);
        if (n == k) {
            return false;
        }
        n = k;
    }

    return true;
};

console.log(isHappy(19));