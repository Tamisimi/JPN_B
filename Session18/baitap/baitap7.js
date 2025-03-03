let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let operator = prompt("Mời bạn nhập vào phép tính (+, -, *, /)");

let result;
if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    if (b !== 0) {
        result = a / b;
    } else {
        result = "Không thể chia cho 0!";
    }
} else {
    result = "Phép toán không hợp lệ!";
}
alert(`Kết quả của phép tính là : ${result}`);