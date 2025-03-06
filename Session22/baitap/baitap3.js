let input = +prompt("Nhập vào dãy số:");
if (!Number.isInteger(input)) {
    console.log("Dãy không hợp lệ");
} else {
    let reversed = input.toString().split("").reverse().join("");
    console.log(reversed)
}

