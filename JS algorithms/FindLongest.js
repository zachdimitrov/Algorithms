function findLongest(str) {
    let arr = str.split(" ");
    let final = 0;
    let result;
    arr.forEach(word => {
        result = 0;
        let w = word.split("");
        w.forEach(letter => {
            if (letter.match(/[a-zA-Z]+/g)) {
                result++;
            }
        });

        if (result > final) {
            final = result;
        }
    });

    return final;
}

console.log(findLongest("what is the longest word here?"));