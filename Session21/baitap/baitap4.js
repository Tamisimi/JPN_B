let a = +prompt("Nhập a = ");
let b = +prompt("Nhập b = ");
let c = +prompt("Nhập c = ");
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phuong trinh vô số nghiệm');
        } else {
            alert('Phuong trinh vô nghiệm');
        }
    } else {
        let x = -c / b;
        alert("Phương trình có nghiệm" + x);
    }
} else {
    let dt = b * b - 4 * a * c;
    if (dt < 0) {
        alert("Phương trình vô nghiệm");
    } else if (dt == 0) {
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép x1 = x2 = " + x);
    } else {
        let x1 = (-b + Math.sqrt(dt)) / (2 * a);
        let x2 = (-b - Math.sqrt(dt)) / (2 * a);
        alert(`Phương trình có 2 nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`);
    }
}