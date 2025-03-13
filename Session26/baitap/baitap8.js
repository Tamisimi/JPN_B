function filterOdd(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let result = arr.filter((item) => {
        return typeof item === "number" && item % 2 !== 0;
    });

    console.log(result);
}

filterOdd([10, 2, 3, 5, 7, 9]);
filterOdd([]);
filterOdd("abc");
