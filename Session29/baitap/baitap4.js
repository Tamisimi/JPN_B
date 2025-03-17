let tasks = [];

console.log("===== Quản lý Công Việc =====");
console.log("1. Thêm công việc mới");
console.log("2. Hiển thị tất cả công việc");
console.log("3. Cập nhật trạng thái công việc");
console.log("4. Lọc công việc theo trạng thái");
console.log("5. Sắp xếp công việc theo trạng thái");
console.log("0. Thoát chương trình");

let choose;
do {
    choose = +prompt("Mời nhập lựa chọn:");
    switch (choose) {
        case 1:
            addTask();
            break;
        case 2:
            showTasks();
            break;
        case 3:
            updateStatus();
            break;
        case 4:
            filterTasks();
            break;
        case 5:
            sortTasks();
            break;
        case 0:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
} while (choose !== 0);
function addTask() {
    let id = tasks.length + 1;
    let name = prompt("Nhập tên công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let startTime = prompt("Nhập thời gian bắt đầu:");
    let status = prompt("Nhập trạng thái (chưa hoàn thành/hoàn thành):");
    tasks.push({ id, name, description, startTime, status });
    console.log("Đã thêm công việc mới thành công!");
}
function showTasks() {
    console.log("===== Danh sách Công Việc =====");
    tasks.forEach(task => console.log(task));
}
function updateStatus() {
    let id = +prompt("Nhập ID công việc cần cập nhật trạng thái:");
    let task = tasks.find(task => task.id === id);
    if (task) {
        task.status = prompt("Nhập trạng thái mới (chưa hoàn thành/hoàn thành):") || task.status;
        console.log("Đã cập nhật trạng thái công việc!");
    } else {
        console.log("Không tìm thấy công việc với ID:", id);
    }
}
function filterTasks() {
    let status = prompt("Nhập trạng thái cần lọc (chưa hoàn thành/hoàn thành):");
    let filteredTasks = tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());
    console.log("===== Công việc theo trạng thái =====");
    filteredTasks.forEach(task => console.log(task));
}
function sortTasks() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    console.log("===== Danh sách Công Việc sau khi sắp xếp =====");
    tasks.forEach(task => console.log(task));
}
