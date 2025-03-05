let odd = 0;
let even = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Mời nhập vào số nguyên");
    if (number % 2 !== 0) {
        odd++;
    } else {
        even++;
    }
}
alert("Số lượng số chẵn là " + even + " Số lượng số lẻ là " + odd);

