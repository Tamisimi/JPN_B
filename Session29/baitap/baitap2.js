let product = [];
console.log("===== Quản lý sản phẩm =====");
console.log("1. Thêm sản phẩm");
console.log("2. Hiển thị sản phẩm");
console.log("3. Tìm kiếm sản phẩm theo id");
console.log("4. Cập nhật thông tin sản phẩm");
console.log("5. Xóa sản phẩm theo id");
console.log("6. Lọc sản phẩm theo khoảng giá");
console.log("0. Thoát chương trình");
let choose;
do {
    choose = +prompt("Mời nhập lựa chọn");
    switch (choose) {
        case 1: {
            addproduct();
            break;
        }
        case 2: {
            showproduct();
            break;
        }
        case 3: {
            searchproduct();
            break;
        }
        case 4: {
            updateproduct()
            break;
        }
        case 5: {
            deleteproduct()
            break;
        }
        case 6: {
            filterByPrice();
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

function addproduct() {
    let id = +prompt("Nhập ID: ");
    let name = prompt("Nhập tên: ");
    let price = +prompt("Nhập giá: ");
    let category = prompt("Nhập danh mục: ");
    let quantity = +prompt("Nhập số lượng: ");
    product.push({ id, name, price, category, quantity });
    console.log("Đã thêm sản phẩm thành công!");
}

function showproduct() {
    product.forEach(product => console.log(product));
}

function searchproduct() {
    let id = +prompt("Nhập số id cần tìm:");
    let result = product.find(product => product.id === id);
    if (result) {
        console.log('Kết quả tìm kiếm:', result);
    } else {
        console.log("Không tìm thấy số id");
    }
}

function updateproduct() {
    let id = parseInt(prompt("Nhập ID cần cập nhật:"));
    let newName = prompt("Nhập tên mới:");
    let newPrice = +prompt("Nhập giá mới:");
    let newCategory = prompt("Nhập danh mục mới:");
    let newQuantity = +prompt("Nhập số lượng mới:");
    let foundProduct = product.find(product => product.id === id);
    if (foundProduct) {
        foundProduct.name = newName;
        foundProduct.price = newPrice;
        foundProduct.category = newCategory;
        foundProduct.quantity = newQuantity;
        console.log('Đã cập nhật sản phẩm:', foundProduct);
    } else {
        console.log("Không tìm thấy sản phẩm");
    }
}

function deleteproduct() {
    let id = +prompt("Nhập ID cần xóa:");
    let index = product.findIndex(product => product.id === id);
    if (index !== -1) {
        product.splice(index, 1);
        console.log('Đã xóa sản phẩm:');
    } else {
        console.log('Không tìm thấy sản phẩm với id:', id);
    }
}

function filterByPrice() {
    let minPrice = +prompt("Nhập giá tối thiểu: ");
    let maxPrice = +prompt("Nhập giá tối đa: ");
    let filterProducts = product.filter(item => item.price >= minPrice && item.price <= maxPrice);
    if (filterProducts.length > 0) {
        console.log('Các sản phẩm trong khoảng giá:', filterProducts);
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    }
}
