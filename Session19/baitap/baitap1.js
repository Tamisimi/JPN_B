let a = prompt("Nhập vào 1 tháng bất kì");
if (a === "1" || a === "3" || a === "5" || a === "7" || a === "8" || a === "10" || a == "12") {
    alert("tháng " + a + " có 31 ngày");
} else if (a === "4" || a === "6" || a === "9" || a === "11") {
    alert("tháng " + a + " có 30 ngày");
} else {
    alert("tháng 2 có 28 ngày hoặc 29 ngày năm nhuận");
}
