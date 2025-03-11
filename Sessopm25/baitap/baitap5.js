function soNguyen(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    console.log(`Số lượng số nguyên dương: ${count}`);
}
soNguyen([4, 5.4, 6, -2]);
soNguyen([1, 2, 5, 7, -8, 6]);
soNguyen([1.2, -3, -6]);
