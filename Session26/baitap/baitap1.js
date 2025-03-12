function filter(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let result = arr.filter((item) => { return item >= 10 });
    console.log(result);
}
filter([1, 22, 10, 9, 8]);
filter([]);
filter("abc"); 
