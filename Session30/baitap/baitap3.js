let phones = [
    { id: 1, name: "iPhone 13", price: 20000000, quantity: 5, company: "Apple" },
    { id: 2, name: "Galaxy S23", price: 18000000, quantity: 10, company: "Samsung" },
    { id: 3, name: "Xiaomi Mi 11", price: 12000000, quantity: 8, company: "Xiaomi" }
];

let cart = [];
let choice;

do {
    console.log(`
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại
        5. Thanh toán giỏ hàng
        6. Sắp xếp điện thoại theo giá (Tăng dần/Giảm dần)
        7. Hiển thị tổng số tiền của điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hãng
        9. Thoát chương trình
    `);

    choice = +prompt("Mời bạn nhập lựa chọn:");

    switch (choice) {
        case 1:
            showPhonesByCompany();
            break;
        case 2:
            addNewPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkoutCart();
            break;
        case 6:
            sortPhonesByPrice();
            break;
        case 7:
            showTotalPrice();
            break;
        case 8:
            showQuantityByCompany();
            break;
        case 9:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 9);

function showPhonesByCompany() {
    let company = prompt("Nhập hãng điện thoại muốn xem:").toLowerCase();
    let filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company);
    console.log(filteredPhones.length ? filteredPhones : "Không có điện thoại thuộc hãng này!");
}

function addNewPhone() {
    let id = phones.length + 1;
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng điện thoại:");
    let company = prompt("Nhập hãng điện thoại:");

    phones.push({ id, name, price, quantity, company });
    console.log("Thêm điện thoại mới thành công!");
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc id điện thoại cần tìm:").toLowerCase();
    let foundPhones = phones.filter(phone => phone.name.toLowerCase().includes(keyword) || phone.id == keyword);
    console.log(foundPhones.length ? foundPhones : "Không tìm thấy điện thoại!");
}

function buyPhone() {
    let id = +prompt("Nhập id điện thoại muốn mua:");
    let quantity = +prompt("Nhập số lượng muốn mua:");
    let phone = phones.find(phone => phone.id === id);

    if (!phone) return console.log("Không tìm thấy điện thoại!");
    if (phone.quantity < quantity) return console.log(`Số lượng không đủ! Còn lại: ${phone.quantity}`);

    phone.quantity -= quantity;

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...phone, quantity });
    }

    console.log("Đã thêm điện thoại vào giỏ hàng!", cart);
}

function checkoutCart() {
    if (!cart.length) return console.log("Giỏ hàng trống!");
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Thanh toán thành công! Tổng tiền: ${total} VNĐ`);
    cart = [];
}

function sortPhonesByPrice() {
    let sortChoice = +prompt("Nhập 1 để sắp xếp tăng dần, 2 để giảm dần:");
    let sortedPhones = [...phones];
    sortChoice === 1 ? sortedPhones.sort((a, b) => a.price - b.price) : sortedPhones.sort((a, b) => b.price - a.price);
    console.log("Danh sách điện thoại sau khi sắp xếp:", sortedPhones);
}

function showTotalPrice() {
    let total = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Tổng giá trị các điện thoại trong kho: ${total} VNĐ`);
}

function showQuantityByCompany() {
    let companyCount = {};
    phones.forEach(phone => {
        companyCount[phone.company] = (companyCount[phone.company] || 0) + phone.quantity;
    });
    console.log("Số lượng điện thoại theo từng hãng:", companyCount);
}
