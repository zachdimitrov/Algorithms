/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);
    console.log(nums);
    let index = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            index++;
        }

        if (index === 3) {
            return nums[i + 1];
        }
    }

    return nums[0];
};

console.log(thirdMax([1, 2]));