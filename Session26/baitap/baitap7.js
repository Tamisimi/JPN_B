function squareAndFilterEven(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }
    let squaredArray = arr.map(item => item ** 2);
    let result = squaredArray.filter(item => item % 2 === 0);
    return result;
}
squareAndFilterEven([2, 5, 10]);
squareAndFilterEven([]);
squareAndFilterEven("abc");
