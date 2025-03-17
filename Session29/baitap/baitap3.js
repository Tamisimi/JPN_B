let menu = {};

console.log("===== Quản lý Menu Nhà Hàng =====");
console.log("1. Thêm món ăn vào menu");
console.log("2. Xóa món ăn theo tên");
console.log("3. Cập nhật thông tin món ăn");
console.log("4. Hiển thị toàn bộ menu");
console.log("5. Tìm kiếm món ăn theo tên");
console.log("0. Thoát chương trình");

let choose;
do {
    choose = +prompt("Mời nhập lựa chọn:");
    switch (choose) {
        case 1:
            addDish();
            break;
        case 2:
            deleteDish();
            break;
        case 3:
            updateDish();
            break;
        case 4:
            showMenu();
            break;
        case 5:
            searchDish();
            break;
        case 0:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
} while (choose !== 0);

function addDish() {
    let category = prompt("Nhập danh mục món ăn:");
    let name = prompt("Nhập tên món ăn:");
    let price = +prompt("Nhập giá món ăn:");
    let description = prompt("Nhập mô tả món ăn:");
    menu[category].push({ name, price, description });
    console.log("Đã thêm món vào danh mục thành công!");
}

function deleteDish() {
    let name = prompt("Nhập tên món ăn cần xóa:");
    let found = false;
    for (let category in menu) {
        let index = menu[category].findIndex(dish => dish.name === name);
        if (index !== -1) {
            menu[category].splice(index, 1);
            console.log("Đã xóa món khỏi danh mục.");
            found = true;
            break;
        }
    }
    if (!found) console.log("Không tìm thấy món ăn cần xóa!");
}

function updateDish() {
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    let found = false;
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            dish.name = prompt("Nhập tên mới:") || dish.name;
            dish.price = +prompt("Nhập giá mới:") || dish.price;
            dish.description = prompt("Nhập mô tả mới:") || dish.description;
            console.log(`Đã cập nhật món "${name}" thành công!`);
            found = true;
            break;
        }
    }
    if (!found) console.log("Không tìm thấy món ăn cần cập nhật!");
}
function showMenu() {
    console.log("===== MENU NHÀ HÀNG =====");
    for (let category in menu) {
        console.log(`\n--- Danh mục: ${category} ---`);
        menu[category].forEach(dish => {
            console.log(`- ${dish.name} | Giá: ${dish.price} | Mô tả: ${dish.description}`);
        });
    }
}
function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    let found = false;
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name.toLowerCase().includes(name.toLowerCase()));
        if (dish) {
            console.log(`Tìm thấy món: ${dish.name} | Danh mục: ${category} | Giá: ${dish.price} | Mô tả: ${dish.description}`);
            found = true;
        }
    }
    if (!found) console.log("Không tìm thấy món ăn!");
}
