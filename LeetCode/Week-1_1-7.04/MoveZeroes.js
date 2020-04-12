/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
    let zeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeros++;
            nums.splice(i, 1);
            if (i < nums.length - 1) i--;
        }
    }

    if (zeros > 0) {
        for (let j = 0; j < zeros; j++) {
            nums.push(0);
        }
    }
};

let nums = [0, 0, 1];
moveZeroes(nums);
console.log(nums.join(', '));