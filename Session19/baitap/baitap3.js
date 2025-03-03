let type = prompt("Nhập loại chuyển đổi (VND->USD hoặc USD->VND):");
let amount = Number(prompt("Nhập số tiền:"));
let exchange = 23000;

if (type === "VND->USD") {
    let result = (amount / exchange).toFixed(2);
    alert(result + " USD");
} else if (type === "USD->VND") {
    let result = (amount * exchange).toLocaleString();
    alert(result + " VND");
} else {
    alert("Loại chuyển đổi không hợp lệ!");
}