let numbers = [];

function inputNumbers() {
    let count = +prompt("Nhập số lượng số nguyên: ");
    numbers = [];
    for (let i = 0; i < count; i++) {
        let num = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
        numbers.push(num);
    }
    console.log("Danh sách số nguyên:", numbers.join(", "));
}

function calculateAverage() {
    if (numbers.length === 0) return console.log("Danh sách trống. Vui lòng nhập số trước!");
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`Trung bình các số: ${(sum / numbers.length).toFixed(2)}`);
}

function findLargestEven() {
    let evens = numbers.filter(num => num % 2 === 0);
    if (evens.length === 0) return console.log("Không có số chẵn nào trong danh sách!");
    console.log(`Số chẵn lớn nhất: ${Math.max(...evens)}`);
}

function findSmallestOdd() {
    let odds = numbers.filter(num => num % 2 !== 0);
    if (odds.length === 0) return console.log("Không có số lẻ nào trong danh sách!");
    console.log(`Số lẻ nhỏ nhất: ${Math.min(...odds)}`);
}

let choice;

do {
    console.log("\nMenu Xử Lý Số Nguyên:");
    console.log("1. Nhập danh sách số nguyên");
    console.log("2. Tính trung bình các số");
    console.log("3. Tìm số chẵn lớn nhất");
    console.log("4. Tìm số lẻ nhỏ nhất");
    console.log("5. Thoát");

    choice = +prompt("Chọn chức năng: ");

    switch (choice) {
        case 1:
            inputNumbers();
            break;
        case 2:
            calculateAverage();
            break;
        case 3:
            findLargestEven();
            break;
        case 4:
            findSmallestOdd();
            break;
        case 5:
            console.log("Đã thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 5);
