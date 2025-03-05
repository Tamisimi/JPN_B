let n = Number(prompt("Nhập một số nguyên:"));

if (!n || !Number.isInteger(n) || n < 2) {
    alert("Không phải là số nguyên tố");
} else {
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    alert(isPrime ? "Là số nguyên tố" : "Không phải là số nguyên tố");
}
