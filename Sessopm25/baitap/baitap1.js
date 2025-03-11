function findMin(arr) {
    if (!Array.isArray(arr)) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
    return min;
}
findMin([2, 4, 8, 1, 9]);
