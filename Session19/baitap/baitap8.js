let a = prompt("Mời nhập vào 1 tháng bất kỳ");
if (a >= 1 && a <= 12) {
    if (a >= 1 && a <= 3) {
        alert("mùa xuân")
    } else if (a >= 4 && a <= 6) {
        alert("mùa hạ")
    } else if (a >= 7 && a <= 9) {
        alert("mùa thu")
    } else if (a >= 10 && a <= 12) {
        alert("mùa đông")
    }
} else {
    alert("Tháng không hợp lệ");
}
