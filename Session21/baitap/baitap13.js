let n = 8;
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    for (let k = 0; k < i; k++) {
        row += "*";
    }
    console.log(row);
}

for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    for (let k = 0; k < i; k++) {
        row += "*";
    }
    console.log(row);
}
