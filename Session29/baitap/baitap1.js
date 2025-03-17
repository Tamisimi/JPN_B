let contact = [];
console.log("===== Quản lý danh bạ =====");
console.log("1. Thêm liên hệ");
console.log("2. Hiển thị danh bạ");
console.log("3. Tìm kiếm liên hệ theo số điện thoại");
console.log("4. Cập nhật thông tin liên hệ");
console.log("5. Xóa liên hệ");
console.log("0. Thoát chương trình");
let choose;
do {
    choose = +prompt("Mời nhập lựa chọn");
    switch (choose) {
        case 1: {
            addContact();
            break;
        }
        case 2: {
            showContact();
            break;
        }
        case 3: {
            searchContact();
            break;
        }
        case 4: {
            updateContact()
            break;
        }
        case 5: {
            deleteContact()
            break;
        }
        case 0: {
            break;
        }

        default: {
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
        }
    }
} while (choose !== 0);

function addContact() {
    let id = +prompt("Nhập ID: ");
    let name = prompt("Nhập tên: ");
    let email = prompt("Nhập email: ");
    let phone = prompt("Nhập số điện thoại: ");
    contact.push({ id, name, email, phone });
    console.log("Đã thêm liên hệ thành công!");
}

function showContact() {
    contact.forEach(contact => console.log(contact));
}

function searchContact() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let result = contact.find(contact => contact.phone === phone);
    if (result) {
        console.log('Kết quả tìm kiếm:', result);
    } else {
        console.log("Không tìm thấy số điện thoại");

    }
}

function updateContact() {
    let id = parseInt(prompt("Nhập ID cần cập nhật:"));
    let newName = prompt("Nhập tên mới (hoặc để trống):");
    let newEmail = prompt("Nhập email mới (hoặc để trống):");
    let newPhone = prompt("Nhập số điện thoại mới (hoặc để trống):");
    let foundContact = contact.find(contact => contact.id === id);
    if (foundContact) {
        foundContact.name = newName;
        foundContact.email = newEmail;
        foundContact.phone = newPhone;
        console.log('Đã cập nhật liên hệ:', contact);
    } else {
        console.log('Không tìm thấy liên hệ với id:', id);
    }
}

function deleteContact() {
    let id = +prompt("Nhập ID cần xóa:");
    let index = contact.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contact.splice(index, 1);
        console.log('Đã xóa liên hệ:');
    } else {
        console.log('Không tìm thấy liên hệ với id:', id);
    }
}

