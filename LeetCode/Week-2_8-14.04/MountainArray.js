/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let peak = null;
    if (A.length < 3 || A[A.length - 1] > A[A.length - 2] || A[0] > A[1]) {
        return false;
    }

    for (let i = 1; i < A.length; i++) {
        if (A[i] == A[i - 1]) {
            return false;
        }

        if (peak > 0 && peak < i) {
            console.log(peak, i, A[i - 1], A[i])
            if (A[i] > A[i - 1]) {
                return false;
            }
        }

        if (i < A.length - 1 && (A[i] > A[i - 1] && A[i] > A[i + 1])) {
            peak = i;
        }
    }

    return true;
};

console.log(validMountainArray([3, 7, 6, 4, 3, 0, 1, 0]));