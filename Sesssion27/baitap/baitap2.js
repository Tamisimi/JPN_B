let students = [];

function addStudents() {
    let count = +prompt("Nhập số lượng sinh viên: ");
    for (let i = 0; i < count; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        students.push(name);
    }
}

function displayStudents() {
    console.log("Danh sách sinh viên: ");
    students.forEach((student, index) => console.log(`${index + 1}. ${student}`))
}

function findStudent() {
    let name = prompt("Nhập tên sinh viên cần tìm: ");
    let found = students.find(student => student.toLowerCase() === name.toLowerCase());
    found ? console.log(`Đã tìm thấy sinh viên: ${found}`) : console.log("Không tìm thấy sinh viên trong danh sách!");
}

function deleteStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = students.findIndex(student => student.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        console.log(`Đã xóa sinh viên: ${students[index]}`);
        students.splice(index, 1);
    } else {
        console.log("Không tìm thấy sinh viên để xóa!");
    }
}

let choice;
console.log("\nMenu Quản Lý Sinh Viên");
console.log("1. Nhập danh sách sinh viên");
console.log("2. Hiển thị danh sách sinh viên");
console.log("3. Tìm sinh viên theo tên");
console.log("4. Xóa sinh viên khỏi danh sách");
console.log("5. Thoát");
do {

    choice = +prompt("Chọn chức năng: ");
    switch (choice) {
        case 1:
            addStudents();
            break;
        case 2:
            displayStudents();
            break;
        case 3:
            findStudent();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            console.log("Đã thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 5);
