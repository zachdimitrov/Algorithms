/*
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

  - direction can be 0 (for left shift) or 1 (for right shift). 
  - amount is the amount by which string s is to be shifted.
  - A left shift by 1 means remove the first character of s and append it to the end.
  - Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.

  Return the final string after all operations.
*/

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let arr = s.split("");

  for (let i = 0; i < shift.length; i++) {
    const com = shift[i];
    if (com[0] === 0) {
      for (let j = 0; j < com[1]; j++) {
        let letter = arr.shift();
        arr.push(letter);
      }
    } else {
      for (let j = 0; j < com[1]; j++) {
        let letter = arr.pop();
        arr.unshift(letter);
      }
    }
  }

  return arr.join("");
};

console.log(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]]));