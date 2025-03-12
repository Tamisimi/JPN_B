function findNum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    console.log("Dữ liệu không hợp lệ");
}
console.log(`ket qua:`, sum(1, 5));
console.log(`ket qua:`, sum(1, "text"));
console.log(`ket qua:`, sum(1, 5.3));