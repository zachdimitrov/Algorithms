// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxCount = 0;
    let test = 0;
    let hm = [];

    for (let j = 0; j < nums.length; j++) {
        let e = nums[j];
        if (e === 0) e = -1;
        test += e;

        if (test === 0) {
            maxCount = j + 1;
        }

        if (hm[test] != undefined) {
            maxCount = Math.max(j - hm[test], maxCount);
        } else {
            hm[test] = j;
        }
    }

    return maxCount;
};

console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1, 1]));