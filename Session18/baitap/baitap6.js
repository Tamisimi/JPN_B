let year = prompt("Nhập một năm:");
let message;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    message = year + " là năm nhuận";
} else {
    message = year + " không phải là năm nhuận";
}
alert(message);