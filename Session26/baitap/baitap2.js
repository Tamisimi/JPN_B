function filter(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let result = arr.filter(function (item) {
        return item.length > 5;
    });
    console.log(result.length > 0 ? result : "Mảng không có phần tử nào");
}
filter(["apple", "banana", "cat", "elephant", "dog"]);
filter([]);
filter("abc");
