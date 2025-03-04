let n = prompt("Nhập một số nguyên:");

n = Number(n);

if (!n || !Number.isInteger(n) || n < 2) {
    alert("Không phải là số nguyên tố");
} else {
    let num = true;
    for (let i = 2; i < n && num; i++) {
        if (n % i === 0) {
            num = false;
        }
    }
    if (num) {
        alert("Là số nguyên tố");
    } else {
        alert("Không phải là số nguyên tố");
    }
}