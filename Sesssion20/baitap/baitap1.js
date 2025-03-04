let a = +prompt("Nhập 1 số nguyên bất kì");
if (a > 0 && Number.isInteger(a)) {
    let n = 0;
    for (let i = 1; i <= a; i++) {
        n += i;
    }
    alert("Tổng tất cả các số nguyên là " + n);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}

