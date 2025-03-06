let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
    let newElement = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    arr.push(newElement);
}
let evenSum = 0;
let oddSum = 0;
for (let num of arr) {
    if (num % 2 === 0) {
        evenSum += num;
    } else {
        oddSum += num;
    }
}
alert("Tổng số chẵn: " + evenSum + " Tổng số lẻ: " + oddSum);
