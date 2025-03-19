function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "huanrose@gmail.com" && pass === "123456") {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại!");
    }
}