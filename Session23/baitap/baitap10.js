console.log("================== MENU ===================");
console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
console.log("2. In ra giá trị các phần tử đang quản lý");
console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần");
console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng ");
console.log("5. In ra các số nguyên tố trong mảng và tính tổng ");
console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng ");
console.log("7. Thêm một phần tử vào vị trí chỉ định ");
console.log("8. Xóa một phần tử theo giá trị ");
console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần ");
console.log("0. Thoát ");
console.log("============================================");
let arr = [];
let choose;
do {
    choose = +prompt("Lựa chọn của bạn: ");
    switch (choose) {
        case 1: {
            let number = +prompt("Nhập số phần tử ");
            for (let i = 0; i < number; i++) {
                let value = +prompt("Nhập giá trị phần tử ");
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
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    console.log("các phần tử chẵn " + arr[i]);
                    sum += arr[i];

                }
            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - 1; j++) {
                    if (arr[i] < arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log("Tổng phần tử chẵn là " + sum);
            break;
        }
        case 4: {
            let max = arr[0];
            let indexMax = 0;
            let min = arr[0];
            let indexMin = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    indexMax = i;
                }
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                    indexMin = i;
                }
            }
            console.log(`Phần tử lớn nhất ${max} tại vị trí ${indexMax}`);
            console.log(`Phần tử nhỏ nhất ${min} tại vị trí ${indexMin}`);
            break;
        }
        case 0: {
            console.log("Đã thoát chương trình.");
        }
        default: {
            break;
        }
    }
} while (choose != 0);


