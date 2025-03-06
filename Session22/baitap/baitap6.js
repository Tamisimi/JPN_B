let number = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7]
let choice = +prompt("Mời bạn nhập số: ")
let count = 0
for (let i = 0; i < number.length; i++) {
    if (number[i] === choice) {
        count++
    }
}
if (count === 0) {
    alert(`số ${choice} ko tồn tại trong mảng`)
} else {
    alert(`số ${choice} xuất hiện ${count} lần trong mảng`)
}