let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Mời nhập vào số nguyên");
    if (number % 2 !== 0) {
        sum += number;
    }
}
alert("Tổng của các số lẻ là " + sum);

