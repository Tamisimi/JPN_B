let a = prompt("Mời nhập vào giá trị:");
let b = prompt("Mời nhập vào giá trị:");
let c = prompt("Mời nhập vào giá trị:");
let delta = b * b - 4 * a * c
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log("Nghiệm 1: ", x1);
console.log("Nghiệm 2: ", x2);

