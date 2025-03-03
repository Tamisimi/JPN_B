let years = prompt("Nhập số năm kinh nghiệm của nhân viên:");
let category;
if (years < 1) {
    category = "Mới vào nghề";
} else if (years >= 1 && years <= 3) {
    category = "Nhân viên có kinh nghiệm";
} else if (years >= 4 && years <= 6) {
    category = "Chuyên viên";
} else {
    category = "Quản lý";
}
alert("Xếp loại: " + category);