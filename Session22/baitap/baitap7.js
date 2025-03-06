let number = [];
let n = +prompt("Nhập số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
    let element = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    number.push(element);
}
let sorted = number.toSorted();
console.log(sorted);