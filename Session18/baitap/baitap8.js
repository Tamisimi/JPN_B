let a = +prompt("Nhập độ dài cạnh a:");
let b = +prompt("Nhập độ dài cạnh b:");
let c = +prompt("Nhập độ dài cạnh c:");

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Đây là tam giác đều");
    } else if (a === b || b === c || a === c) {
        alert("Đây là tam giác cân");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Đây là tam giác vuông");
    } else {
        alert("Đây là tam giác thường");
    }
} else {
    alert("Ba cạnh nhập vào không tạo thành tam giác!");
}