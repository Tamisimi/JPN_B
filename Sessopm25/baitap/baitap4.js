function soNguyen(number) {
    let count = 0;
    if (!Number.isInteger(number)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            count++;
        }
        count == 1 ? console.log("là số nguyên tố") : console.log("Không phải số nguyên tố");
    }
}

soNguyen(17);
soNguyen(6);
soNguyen("text");