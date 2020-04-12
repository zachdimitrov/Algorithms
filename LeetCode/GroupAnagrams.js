/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/


var groupAnagrams = function(strs) {
    let anagrams = [];
    let current = [];
    current.push(strs[0]);
    anagrams.push(current);

    for (let i = 0; i < strs.length; i++) {
        let currentLetters = strs[i].split("").sort().join("");
        let exists = false;
        for (let j = 0; j < anagrams.length; j++) {
            const letters = anagrams[j][0].split("").sort().join("");
            if (letters == currentLetters) {
                exists = true;
                if (i != 0) {
                    anagrams[j].push(strs[i]);
                }
            }
        }
        if (!exists) {
            let current = [];
            current.push(strs[i])
            anagrams.push(current);
        }
    }

    return anagrams;
};

function printNestedArr(arr) {
    let string = "[\n\r";
    if (arr.length > 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            const element = arr[i];
            string += "    [ " + element.join(", ") + " ],\n\r";
        }
        string += "    [ " + arr[arr.length - 1].join(", ") + " ]";
    }

    return string + "\n\r]";
}

// let testB = [
//     ["ate", "eat", "tea"],
//     ["nat", "tan"],
//     ["bat"]
// ];

// console.log(printNestedArr(testB));

let testA = ["eat", "tea", "tan", "ate", "nat", "bat"];
let testB = ["", "", ""]

console.log(printNestedArr(groupAnagrams(testB)));