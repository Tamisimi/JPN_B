let arr = ["", false, 0, 5, 10, "Hello world!"];
let result = [];
let j = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        result[j] = arr[i];
        j++;
    }
}
console.log(result);
