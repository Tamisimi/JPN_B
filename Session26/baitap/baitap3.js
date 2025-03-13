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
        return item.includes("@") && !item.includes(" ");
    });
    console.log(result.length > 0 ? result : "Mảng không có phần tử nào");
}
filter(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out com"]);
filter([]);
filter("abc");
