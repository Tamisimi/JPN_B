let str = "";
let c;

do {
    console.log("\n===== MENU =====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài");
    console.log("4. Đếm ký tự");
    console.log("5. Kiểm tra đối xứng");
    console.log("6. Viết hoa chữ đầu");
    console.log("7. Thoát");
    console.log("================");

    c = +prompt("Chọn: ");

    switch (c) {
        case 1:
            str = prompt("Nhập chuỗi: ");
            break;

        case 2:
            console.log(`Chuỗi: ${str}`);
            break;

        case 3:
            console.log(`Độ dài: ${str.length}`);
            break;

        case 4:
            let ch = prompt("Nhập ký tự: ");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === ch) count++;
            }
            console.log(`Số lần xuất hiện: ${count}`);
            break;

        case 5:
            let rev = str.split("").reverse().join("");
            console.log(str === rev ? "Là chuỗi đối xứng" : "Không phải đối xứng");
            break;

        case 6:
            let newStr = str
                .split(" ")
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");
            console.log(`Kết quả: ${newStr}`);
            break;

        case 7:
            console.log("Thoát.");
            break;

        default:
            console.log("Nhập sai, chọn lại.");
            break;
    }
} while (c !== 7);
