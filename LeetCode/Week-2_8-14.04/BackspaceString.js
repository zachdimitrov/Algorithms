//Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

var backspaceCompare = function(S, T) {
    function process(word) {
        let arr = word.split("");
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] && arr[i] == "#") {
                if (arr[i - 1]) {
                    arr.splice(i - 1, 2);
                    i = i - 2;
                } else {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }

        if (arr[0] == "#") arr.splice(0, 1);
        return arr.join("");
    }

    console.log(process(S), ", ", process(T));
    return process(S) == process(T);
};

let S = "a##c",
    T = "#a#c";
console.log(backspaceCompare(S, T));