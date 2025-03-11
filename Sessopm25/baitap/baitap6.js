function isPalindrome() {
    let text = prompt("Nhập chuỗi");
    let flag = 1;
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        console.log("Đây là chuỗi đối xứng");
    } else {
        console.log("Đây không phải chuỗi đối xứng");
    }
}

isPalindrome();