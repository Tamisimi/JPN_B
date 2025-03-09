let n = Number(prompt("Nhập số phần tử của mảng:"));
if (n < 0 || !Number.isInteger(n)) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    let arr = [];
    let result = [];
    for (let i = 0; i < n; i++) {
        let value = prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(value);

        if (value.length === 1 && value >= '0' && value <= '9') {
            result.push(value);
        }
    }
    if (result.length > 0) {
        alert("Ký tự số trong mảng: " + result.join(" "));
    } else {
        alert("Không có ký tự số");
    }
}
