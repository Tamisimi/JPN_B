function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
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
        return typeof item === "number" && isPrime(item);
    });

    console.log(result.length > 0 ? result : "Mảng không có phần tử nào");
}

filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
filter([]);
filter("abc");
