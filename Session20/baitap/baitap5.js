let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
a = Number(a);
b = Number(b);
if ((!a && a !== 0) || (!b && b !== 0) || !Number.isInteger(b)) {
    alert("Không hợp lệ");
} else {
    let result = 1;
    for (let i = 0; i < Math.abs(b); i++) {
        result *= a;
    }
    if (b < 0) {
        result = 1 / result;
    }
    alert("Kết quả: " + result);
}
