/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => b - a);
    console.log(stones.join(", "));
    if (stones.length == 0) {
        return 0;
    } else if (stones.length == 1) {
        return stones[0];
    } else {
        let nstone = stones[0] - stones[1];
        stones.splice(0, 2);
        if (nstone > 0) {
            stones.push(nstone);
        }

        return lastStoneWeight(stones);
    }
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));