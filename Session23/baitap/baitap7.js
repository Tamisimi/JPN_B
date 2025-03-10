let n = 6;
let arr = [2, 4, 6, 1, 8, 9];

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let max1 = arr[0];
    let max2 = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 || max1 === max2) {
            max2 = arr[i];
        }
    }
    if (max1 === max2) {
        console.log("Không có số lớn thứ hai");
    } else {
        console.log(max2);
    }
}
