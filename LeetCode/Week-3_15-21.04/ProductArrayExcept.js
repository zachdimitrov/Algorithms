/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Input:  [1,2,3,4]
Output: [24,12,8,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output = [];

    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        nums[i] = 1;
        output[i] = nums.reduce((a,b) => a * b);
        nums[i] = e;
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4]).join(", "));