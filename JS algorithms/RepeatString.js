function repeatString(s, n) {
    let num = +n;
    if (num < 0) return "";
    if (num === 0) return s;

    let result = s;
    console.log(n);
    for (i = 0; i < num; i++) {
        result += s;
    }
    return result;
}

console.log(repeatString("abv", 3));
console.log(repeatString("derts", 0));
console.log(repeatString("kiegsds", -3));
console.log(repeatString("WO", 13));