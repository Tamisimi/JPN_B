function findOdd(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let arrOdd = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            arrOdd.push(arr[i]);
        }
    }
    arrOdd.length > 0 ? console.log(arrOdd) : console.log("Không chứa số chẵn");
}

findOdd([11, 4, 65, 6]);
findOdd([1, 3, 5, 17]);
findOdd("text");         
