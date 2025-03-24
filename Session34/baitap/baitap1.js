//  tạo mảng chứa danh sách người đăng ký
let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    // lấy thông tin của người dùng nhập
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
    /*
        email đúng định dạng hay không
        mật khẩu có trùng khớp hay không
        email đã tồn tại hay chưa?
    */
    let user = {
        id: Math.floor(Math.random() * 65656566),
        email: email,
        password: password
    }
    users.push(user);
    // lưu dữ liệu lên local
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công");
    // chuyển sang trang đăng nhập
}