function isArithmeticSequence(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }

    let commonDifference = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== commonDifference) {
            return false;
        }
    }

    return true;
}

console.log(isArithmeticSequence([2, 4, 6, 8]));
console.log(isArithmeticSequence([3, 6, 9, 12, 14]));
console.log(isArithmeticSequence("abc")); 
