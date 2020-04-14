function swapNames(name) {
    var names = name.split(" ");
    return `${names[1]} ${names[0]}`;
}

console.log(swapNames("Abraham Lincoln"));
console.log(swapNames("Hank Aaron"));