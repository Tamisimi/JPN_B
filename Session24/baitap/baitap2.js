console.log("\n========= MENU =========");
console.log("1. Nhập mảng");
console.log("2. Hiển thị mảng");
console.log("3. Tìm phần tử lớn nhất và nhỏ nhất");
console.log("4. Tính tổng các phần tử");
console.log("5. Tìm số lần xuất hiện của một phần tử");
console.log("6. Sắp xếp mảng tăng dần");
console.log("7. Thoát");
console.log("========================");
let arr = [];
let choose;
do {
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
            let even = [];
            let odd = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even.push(arr[i]);
                } else {
                    odd.push(arr[i]);
                }
            }
            console.log("Các số chẵn: ", even);
            console.log("Các số lẻ: ", odd);
            break;
        }
        case 4: {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            let average = sum / arr.length;
            console.log(`Trung bình cộng của mảng: ${average}`);
            break;
        }
        case 5: {
            let index = +prompt("Nhập vị trí cần xóa: ");

            if (index >= 0 && index < arr.length) {
                for (let i = index; i < arr.length - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                arr.pop();
                console.log("Mảng sau khi xóa phần tử: ", arr);
            }
            break;
        }
        case 6: {
            let max = arr[0];
            let secondMax = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < max) {
                    if (!isFound || arr[i] > secondMax) {
                        secondMax = arr[i];
                        console.log("Số lớn thứ hai trong mảng là:", secondMax);
                    }
                }
            }
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
} while (choose != 7)