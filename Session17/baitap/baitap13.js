let input = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));
let months = parseInt(prompt("Nhập số tháng gửi:"));
let money = 4.3 / 100 / 12;
let interest = input * money * months;
let amount = input + money;
alert(`Tiền lãi nhận được: ${interest.toLocaleString()} VNĐ`);  