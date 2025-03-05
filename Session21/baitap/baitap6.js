let number = Number(prompt("Nhập một số nguyên:"));

if (!Number.isInteger(number)) {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
} else {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
