let employees = [
    { id: 1, name: "Nguyễn Văn A", position: "Developer", salary: 1500 },
    { id: 2, name: "Trần Thị B", position: "Tester", salary: 1200 }
];

function addEmployee(id, name, position, salary) {
    let newEmployee = { id: id, name: name, position: position, salary: salary };
    employees.push(newEmployee);
    console.log("Thêm nhân viên thành công!");
}

function deleteEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees.splice(i, 1);
            console.log("Đã xóa nhân viên!");
            return;
        }
    }
    console.log("Không tìm thấy nhân viên để xóa!");
}

function updateSalary(id, newSalary) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].salary = newSalary;
            console.log("Lương đã được cập nhật!");
            return;
        }
    }
    console.log("Không tìm thấy nhân viên để cập nhật lương!");
}

function searchEmployeeByName(name) {
    let found = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.includes(name)) {
            found.push(employees[i]);
        }
    }
    if (found.length > 0) {
        console.log("Nhân viên tìm thấy:", found);
    } else {
        console.log("Không tìm thấy nhân viên nào!");
    }
}

function showMenu() {
    let choice;
    do {
        console.log("\n===== Quản lý nhân viên =====");
        console.log("1. Thêm nhân viên");
        console.log("2. Xóa nhân viên");
        console.log("3. Cập nhật lương nhân viên");
        console.log("4. Tìm kiếm nhân viên theo tên");
        console.log("5. Hiển thị danh sách nhân viên");
        console.log("0. Thoát chương trình");

        choice = prompt("Nhập lựa chọn của bạn: ");

        switch (choice) {
            case "1":
                let id = parseInt(prompt("Nhập ID nhân viên: "));
                let name = prompt("Nhập tên nhân viên: ");
                let position = prompt("Nhập vị trí: ");
                let salary = parseFloat(prompt("Nhập lương: "));
                addEmployee(id, name, position, salary);
                break;
            case "2":
                let delId = parseInt(prompt("Nhập ID nhân viên cần xóa: "));
                deleteEmployee(delId);
                break;
            case "3":
                let updateId = parseInt(prompt("Nhập ID nhân viên cần cập nhật lương: "));
                let newSalary = parseFloat(prompt("Nhập lương mới: "));
                updateSalary(updateId, newSalary);
                break;
            case "4":
                let searchName = prompt("Nhập tên nhân viên cần tìm: ");
                searchEmployeeByName(searchName);
                break;
            case "5":
                console.log("Danh sách nhân viên hiện tại:", employees);
                break;
            case "0":
                console.log("Thoát chương trình!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    } while (choice !== "0");
}

showMenu();
