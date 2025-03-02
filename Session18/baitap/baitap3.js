let admin = prompt("Đăng nhập hệ thống");
if (admin === "ADMIN") {
    let password = prompt("Mời nhập mật khẩu");
    if (password === "TheMaster") {
        console.log("Welcome");
    } else if (password === null) {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if (admin === null) {
    console.log("Cancelled");
} else {
    console.log("I Don’t know you");
}


