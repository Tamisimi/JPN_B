function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Không thể chia cho 0";
    return a / b;
}

let choice;
console.log("Menu Tính Toán Hai Số");
console.log("1. Cộng hai số");
console.log("2. Trừ hai số");
console.log("3. Nhân hai số");
console.log("4. Chia hai số");
console.log("5. Thoát");
do {
    choice = parseInt(prompt("Chọn chức năng (1-5):"));
    let num1, num2, result;
    switch (choice) {
        case 1:
            num1 = parseFloat(prompt("Nhập số thứ nhất:"));
            num2 = parseFloat(prompt("Nhập số thứ hai:"));
            result = add(num1, num2);
            console.log("Kết quả: " + result);
            break;
        case 2:
            num1 = parseFloat(prompt("Nhập số thứ nhất:"));
            num2 = parseFloat(prompt("Nhập số thứ hai:"));
            result = subtract(num1, num2);
            console.log("Kết quả: " + result);
            break;
        case 3:
            num1 = parseFloat(prompt("Nhập số thứ nhất:"));
            num2 = parseFloat(prompt("Nhập số thứ hai:"));
            result = multiply(num1, num2);
            console.log("Kết quả: " + result);
            break;
        case 4:
            num1 = parseFloat(prompt("Nhập số thứ nhất:"));
            num2 = parseFloat(prompt("Nhập số thứ hai:"));
            result = divide(num1, num2);
            console.log("Kết quả: " + result);
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 5);