// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const ncopy = [...nums];
        ncopy.splice(i, 1);
        if (ncopy.indexOf(element) < 0) {
            return element;
        }
    }
};

console.log(singleNumber([1, 0, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));