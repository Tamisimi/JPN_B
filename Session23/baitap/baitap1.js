let arr = [];
let result = "";
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i + 1}: `);
    arr.push(num);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        result += arr[i] + " ";
    }
}
if (result) {
    alert("Các số lớn hơn hoặc bằng 10: " + result);
} else {
    alert("Không có số nào lớn hơn 10");
}
