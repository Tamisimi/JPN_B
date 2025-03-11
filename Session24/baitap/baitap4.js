let arr = [];
let choice;
console.log("\n======= MENU =======");
console.log("1. Nhập mảng số nguyên");
console.log("2. Hiển thị mảng");
console.log("3. Tìm phần tử lớn nhất và chỉ số của nó");
console.log("4. Tính tổng và trung bình cộng của các số dương");
console.log("5. Đảo ngược mảng");
console.log("6. Kiểm tra mảng có đối xứng không");
console.log("7. Thoát chương trình");
console.log("====================");
do {
    choice = +prompt("Lựa chọn của bạn: ");
    switch (choice) {
        case 1: {
            let n = +prompt("Nhập số phần tử của mảng: ");
            arr = [];
            for (let i = 0; i < n; i++) {
                let value = +prompt(`Nhập phần tử thứ ${i + 1}: `);
                arr.push(value);
            }
            console.log("Mảng đã được nhập.");
            break;
        }
        case 2: {
            if (arr.length === 0) {
                console.log("Mảng rỗng.");
            } else {
                console.log("Mảng hiện tại:", arr);
            }
            break;
        }
        case 3: {
            if (arr.length === 0) {
                console.log("Mảng rỗng.");
                break;
            }
            let max = arr[0];
            let indexMax = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    indexMax = i;
                }
            }
            console.log(`Phần tử lớn nhất là ${max} tại vị trí ${indexMax}`);
            break;
        }
        case 4: {
            let sum = 0;
            let count = 0;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            if (count === 0) {
                console.log("Không có số dương trong mảng.");
            } else {
                let avg = sum / count;
                console.log(`Tổng các số dương: ${sum}`);
                console.log(`Trung bình cộng: ${avg}`);
            }
            break;
        }
        case 5: {
            if (arr.length === 0) {
                console.log("Mảng rỗng.");
                break;
            }
            let reversedArray = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                reversedArray.push(arr[i]);
            }
            arr = reversedArray;
            console.log("Mảng sau khi đảo ngược:", arr);
            break;
        }
        case 6: {
            if (arr.length === 0) {
                console.log("Mảng rỗng.");
                break;
            }
            let tric = true;
            let len = arr.length;

            for (let i = 0; i < Math.floor(len / 2); i++) {
                if (arr[i] !== arr[len - 1 - i]) {
                    tric = false;
                    break;
                }
            }
            if (tric) {
                console.log("Mảng là đối xứng.");
            } else {
                console.log("Mảng không đối xứng.");
            }
            break;
        }
        case 7: {
            console.log("Thoát chương trình.");
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
        }
    }
} while (choice !== 7);
