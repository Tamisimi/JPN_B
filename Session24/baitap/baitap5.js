let m = [];
let c;

do {
    console.log("\n===== MENU =====");
    console.log("1. Nhập mảng 2D");
    console.log("2. Hiển thị mảng");
    console.log("3. Tính tổng");
    console.log("4. Tổng đường chéo chính");
    console.log("5. Tổng đường chéo phụ");
    console.log("6. TBC hàng/cột");
    console.log("7. Thoát");
    console.log("================");

    c = +prompt("Chọn: ");

    switch (c) {
        case 1: {
            let r = +prompt("Số hàng: ");
            let col = +prompt("Số cột: ");
            m = [];

            for (let i = 0; i < r; i++) {
                m[i] = [];
                for (let j = 0; j < col; j++) {
                    m[i][j] = +prompt(`Nhập [${i}][${j}]: `);
                }
            }
            console.log("Đã nhập xong.");
            break;
        }

        case 2: {
            if (m.length === 0) {
                console.log("Mảng rỗng.");
            } else {
                for (let i = 0; i < m.length; i++) {
                    console.log(m[i].join(" "));
                }
            }
            break;
        }

        case 3: {
            let s = 0;
            for (let i = 0; i < m.length; i++) {
                for (let j = 0; j < m[i].length; j++) {
                    s += m[i][j];
                }
            }
            console.log(`Tổng: ${s}`);
            break;
        }

        case 4: {
            if (m.length !== m[0].length) {
                console.log("Không phải ma trận vuông.");
            } else {
                let s = 0;
                for (let i = 0; i < m.length; i++) {
                    s += m[i][i];
                }
                console.log(`Tổng đường chéo chính: ${s}`);
            }
            break;
        }

        case 5: {
            if (m.length !== m[0].length) {
                console.log("Không phải ma trận vuông.");
            } else {
                let s = 0;
                let n = m.length;
                for (let i = 0; i < n; i++) {
                    s += m[i][n - 1 - i];
                }
                console.log(`Tổng đường chéo phụ: ${s}`);
            }
            break;
        }

        case 6: {
            let o = prompt("Hàng (h) hay cột (c)? ");
            if (o === "h") {
                let r = +prompt("Nhập hàng: ");
                if (r >= 0 && r < m.length) {
                    let s = 0;
                    for (let j = 0; j < m[r].length; j++) {
                        s += m[r][j];
                    }
                    console.log(`TBC hàng ${r}: ${s / m[r].length}`);
                } else {
                    console.log("Hàng không hợp lệ.");
                }
            } else if (o === "c") {
                let col = +prompt("Nhập cột: ");
                if (col >= 0 && col < m[0].length) {
                    let s = 0;
                    for (let i = 0; i < m.length; i++) {
                        s += m[i][col];
                    }
                    console.log(`TBC cột ${col}: ${s / m.length}`);
                } else {
                    console.log("Cột không hợp lệ.");
                }
            } else {
                console.log("Lựa chọn sai.");
            }
            break;
        }

        case 7:
            console.log("Thoát.");
            break;

        default:
            console.log("Nhập sai, chọn lại.");
            break;
    }
} while (c !== 7);
