function findMax(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng ko có dữ liệu");
        return;
    }
    let max = Math.max(...arr);
    let position = arr.indexOf(max);

    console.log(`max = ${max}`);
    console.log(`position: ${position}`);
}
findMax([10, 9, 5, 11, 24, 5]);
findMax([]);
findMax("abc");
