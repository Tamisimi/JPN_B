let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = Number(prompt(`Nhập số thứ ${i + 1}:`));
}

if (arr.length === 0) {
    alert("Không có số lớn nhất");
} else {
    let maxNum = Math.max(...arr);
    let maxIndex = arr.indexOf(maxNum);
    alert(`Số lớn nhất: ${maxNum}\nVị trí: ${maxIndex}`);
}
