let num = prompt("Nhập vào một số nguyên:");
if (isNaN(num)) {
    alert("Dãy số không hợp lệ");
} else {
    let arr = Math.max(...num.split(""));
    alert(`${arr} là số lớn nhất trong dãy số`);
}