function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function rectangleArea(width, height) {
    return width * height;
}

function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}

let choice;

do {
    console.log("\nMenu Tính Toán Hình Học:");
    console.log("1. Tính diện tích hình tròn");
    console.log("2. Tính chu vi hình tròn");
    console.log("3. Tính diện tích hình chữ nhật");
    console.log("4. Tính chu vi hình chữ nhật");
    console.log("5. Thoát");

    choice = +prompt("Chọn chức năng: ");

    switch (choice) {
        case 1:
            let r1 = +prompt("Nhập bán kính hình tròn: ");
            console.log(`Diện tích hình tròn: ${circleArea(r1).toFixed(2)}`);
            break;
        case 2:
            let r2 = +prompt("Nhập bán kính hình tròn: ");
            console.log(`Chu vi hình tròn: ${circlePerimeter(r2).toFixed(2)}`);
            break;
        case 3:
            let width = +prompt("Nhập chiều rộng hình chữ nhật: ");
            let height = +prompt("Nhập chiều dài hình chữ nhật: ");
            console.log(`Diện tích hình chữ nhật: ${rectangleArea(width, height).toFixed(2)}`);
            break;
        case 4:
            let width2 = +prompt("Nhập chiều rộng hình chữ nhật: ");
            let height2 = +prompt("Nhập chiều dài hình chữ nhật: ");
            console.log(`Chu vi hình chữ nhật: ${rectanglePerimeter(width2, height2).toFixed(2)}`);
            break;
        case 5:
            console.log("Đã thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 5);
