let number = +prompt("Nhập một số từ 0 đến 9:");
let words;
switch (number) {
    case 0:
        words = "Số Không";
        break;
    case 1:
        words = "Số Một";
        break;
    case 2:
        words = "Số Hai";
        break;
    case 3:
        words = "Số Ba";
        break;
    case 4:
        words = "Số Bốn";
        break;
    case 5:
        words = "Số Năm";
        break;
    case 6:
        words = "Số Sáu";
        break;
    case 7:
        words = "Số Bảy";
        break;
    case 8:
        words = "Số Tám";
        break;
    case 9:
        words = "Số Chín";
        break;
    default:
        words = "Bạn đã nhập sai! Vui lòng nhập số từ 0 đến 9.";
}
alert(words);