/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    for (let i = 0, j = A.length - 1; i < A.length, j >= 0; i++, j--) {
        console.log(i, j, " * ", A.join(", "));
        if (i >= j) {
            console.log("case 1: ", i, j)
            break;
        } else if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
            console.log("case 2: ", i, j);
            let k = A[j];
            A[j] = A[i];
            A[i] = k;
        } else if (A[i] % 2 === 0) {
            j++;
            console.log("case 3: ", i, j);
        } else if (A[j] % 2 !== 0) {
            i--;
            console.log("case 4: ", i, j);
        }
    }
    return A;
};

let A = [1, 0, 3];
sortArrayByParity(A);
console.log(A.join(", "));