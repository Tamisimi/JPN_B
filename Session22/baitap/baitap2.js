let number = [2, 5, 7, 4, 1, 8, 6];
let input = Number(prompt("Nhập một số:"));
let found = false;

for (let i = 0; i < number.length; i++) {
    if (number[i] === input) {
        found = true;
        break;
    }
}
console.log(found ? "Bingo" : "Chúc bạn may mắn lần sau");
