function removeEven(n) {
    // let arr = [];
    // n.forEach(number => {
    //     if (number % 2 != 0) {
    //         arr.push(number);
    //     }
    // });

    // return arr;
    return n.filter(x => x % 2 != 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.join(","));
let ne = removeEven(arr);
console.log(ne.join(","));