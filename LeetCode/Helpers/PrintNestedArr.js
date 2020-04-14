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

module.exports = printNestedArr;