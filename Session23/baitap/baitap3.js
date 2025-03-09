let n = Number(prompt("Nhập số phần tử của mảng:"));
if (!Number.isInteger(n) || n < 0) {
    alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    let arr = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(num);
        if (num < 0 && Number.isInteger(num)) {
            count++;
        }
    }
    alert(`Số lượng số nguyên âm: ${count}`);
}
