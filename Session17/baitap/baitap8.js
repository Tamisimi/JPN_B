let date1 = new Date(prompt("Nhập ngày thứ nhất: "));
let date2 = new Date(prompt("Nhập ngày thứ hai: "));
let time = Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));
console.log("Độ lệch là ", time);
