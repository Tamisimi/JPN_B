let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    if (!email || !password || !confirmPassword) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    let emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("Email đã tồn tại!");
        return;
    }
    if (!(email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn")))) {
        alert("Email không đúng định dạng!");
        return;
    }
    let user = {
        id: Math.floor(Math.random() * 65656566),
        email: email,
        password: password
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công");
}

function login() {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ email và mật khẩu!");
        return;
    }
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Đăng nhập thành công!");
        window.location.href = "home.html";
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}
