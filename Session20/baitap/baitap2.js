let a = +prompt("Nhập 1 số nguyên bất kì");
if (a > 0 && Number.isInteger(a)) {
    for (let i = 0; i <= a; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}

