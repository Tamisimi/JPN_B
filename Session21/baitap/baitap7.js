let money = +prompt("Số tiền muốn giử (VND)");
let raise = +prompt("Lãi xuất hàng tháng (%)");
let month = +prompt("Thời gian giử tiền (month)");
let total = money * (raise / 100) * month;
let interest = total - money;
console.log(`tien lai: ${Number(interest)} VND`);
console.log(`tien nhan duoc: ${Number(total)} VND`);