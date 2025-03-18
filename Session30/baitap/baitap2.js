let books = [
    { id: 1, name: "Harry Potter", price: 100000, quantity: 10, category: "Fantasy" },
    { id: 2, name: "Sherlock Holmes", price: 80000, quantity: 5, category: "Detective" },
    { id: 3, name: "Dế Mèn Phiêu Lưu Ký", price: 50000, quantity: 15, category: "Literature" },
    { id: 4, name: "One Piece", price: 60000, quantity: 20, category: "Manga" }
];

let cart = [];
let choice;

do {
    console.log(`
        1. Hiển thị danh sách sách theo thể loại
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id
        4. Mua sách
        5. Sắp xếp sách theo giá (Tăng dần/Giảm dần)
        6. Tính tổng số lượng và tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho
        8. Thoát chương trình
    `);

    choice = +prompt("Mời bạn nhập lựa chọn:");

    switch (choice) {
        case 1:
            showBooksByCategory();
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            calculateCart();
            break;
        case 7:
            showTotalBooks();
            break;
        case 8:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 8);

function showBooksByCategory() {
    let category = prompt("Nhập thể loại sách bạn muốn xem:");
    let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    console.log(filteredBooks.length ? filteredBooks : "Không có sách thuộc thể loại này!");
}

function addNewBook() {
    let id = books.length + 1;
    let name = prompt("Nhập tên sách:");
    let price = +prompt("Nhập giá sách:");
    let quantity = +prompt("Nhập số lượng sách:");
    let category = prompt("Nhập thể loại sách:");

    books.push({ id, name, price, quantity, category });
    console.log("Thêm sách mới thành công!");
}

function searchBook() {
    let keyword = prompt("Nhập tên hoặc id sách cần tìm:").toLowerCase();
    let foundBooks = books.filter(book => book.name.toLowerCase().includes(keyword) || book.id == keyword);
    console.log(foundBooks.length ? foundBooks : "Không tìm thấy sách!");
}

function buyBook() {
    let id = +prompt("Nhập id sách muốn mua:");
    let quantity = +prompt("Nhập số lượng muốn mua:");
    let book = books.find(book => book.id === id);

    if (!book) return console.log("Không tìm thấy sách!");
    if (book.quantity < quantity) return console.log(`Số lượng không đủ! Còn lại: ${book.quantity}`);

    book.quantity -= quantity;

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...book, quantity });
    }

    console.log("Đã thêm sách vào giỏ hàng!", cart);
}

function sortBooksByPrice() {
    let sortChoice = +prompt("Nhập 1 để sắp xếp tăng dần, 2 để giảm dần:");
    let sortedBooks = [...books];
    sortChoice === 1 ? sortedBooks.sort((a, b) => a.price - b.price) : sortedBooks.sort((a, b) => b.price - a.price);
    console.log("Danh sách sách sau khi sắp xếp:", sortedBooks);
}

function calculateCart() {
    if (!cart.length) return console.log("Giỏ hàng trống!");
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}, Tổng tiền: ${totalPrice} VNĐ`);
}

function showTotalBooks() {
    let totalBooks = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalBooks}`);
}
