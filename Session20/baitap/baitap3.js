let a = prompt("Nhập 1 số nguyên bất kì");
if (a > 0 || Number.isInteger(a)) {
    for (let i = 0; i <= (a.length) / 2; i++) {
        if (a[i] != a[a.length - 1 - i]) {
            console.log("Đây không phải là số đối xứng");
            break;
        } else {
            console.log("Đây là số đối xứng");
            break;
        }
    }
} else {
    console.log("Dữ liệu nhập vào không hợp lệ");
}

