let arr = [];
let choose;
do {
    console.log("\n========= MENU =========");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất");
    console.log("4. Tính tổng các phần tử");
    console.log("5. Tìm số lần xuất hiện của một phần tử");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát");
    console.log("========================");
    choose = +prompt("Lựa chọn của bạn: ");
    switch (choose) {
        case 1: {
            let n = +prompt("Nhập số phần tử của mảng: ");
            arr = [];
            for (let i = 0; i < n; i++) {
                let value = +prompt(`Nhập phần tử thứ ${i + 1}: `);
                arr.push(value);
            }
            break;
        }
        case 2: {
            for (let i = 0; i < arr.length; i++) {
                console.log(`arr[${i}] = ${arr[i]}`);
            }
            break;
        }
        case 3: {
            let max = arr[0];
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Phần tử lớn nhất ${max}`);
            console.log(`Phần tử nhỏ nhất ${min}`);
            break;
        }
        case 4: {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        }
        case 5: {
            let num = +prompt("Nhập số cần tìm: ");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                    count++;
                }
            }
            console.log(`Số ${num} xuất hiện ${count} lần trong mảng.`);
            break;
        }
        case 6: {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log("Mảng sau khi sắp xếp tăng dần: ", arr);
            break;
        }
        case 7: {
            console.log("Thoát chương trình.");
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
            break;
        }
    }
} while (choose !== 7);