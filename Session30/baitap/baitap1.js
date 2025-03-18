let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let carts = [];
let choice;

do {
    console.log(`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
           - Tăng dần.
           - Giảm dần.
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.`);

    choice = +prompt(`Mời bạn nhập lựa chọn`);

    switch (choice) {
        case 1:
            showProduct();
            break;
        case 2:
            choseProducts();
            break;
        case 3:
            sortProduct();
            break;
        case 4:
            calculateTotal();
            break;
        case 5:
            console.log("Cảm ơn bạn đã mua hàng!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 5);

function showProduct() {
    let chose = +prompt(`Mời bạn nhập lựa chọn
        1: Các món ăn dân tộc Kinh
        2: Các món ăn dân tộc Mông`);

    let filteredProducts = products.filter(product =>
        (chose === 1 && product.category === "món ăn dân tộc Kinh") ||
        (chose === 2 && product.category === "món ăn dân tộc Mông")
    );

    console.log(filteredProducts.length ? filteredProducts : "Không có sản phẩm nào!");
}

function choseProducts() {
    let choseId = +prompt(`Mời bạn nhập id sản phẩm`);
    let indexProduct = products.findIndex(product => product.id === choseId);

    if (indexProduct === -1) {
        console.log(`Sản phẩm không có trong cửa hàng`);
    } else {
        let choseQuantity = +prompt(`Mời bạn nhập số lượng sản phẩm muốn mua`);

        if (products[indexProduct].quantity < choseQuantity) {
            console.log(`Sản phẩm chỉ còn ${products[indexProduct].quantity}`);
        } else {
            products[indexProduct].quantity -= choseQuantity;

            let index = carts.findIndex(item => item.id === choseId);

            if (index === -1) {
                carts.push({
                    ...products[indexProduct],
                    quantity: choseQuantity
                });
            } else {
                carts[index].quantity += choseQuantity;
            }

            console.log("Giỏ hàng hiện tại:", carts);
        }
    }
}

function sortProduct() {
    let sortChoice = +prompt(`Mời bạn nhập lựa chọn 
        1: Tăng dần
        2: Giảm dần`);

    let sortedProducts = [...products];
    if (sortChoice === 1) {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortChoice === 2) {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ!");
        return;
    }
    console.log("Sản phẩm sau khi sắp xếp:", sortedProducts);
}

function calculateTotal() {
    if (carts.length === 0) {
        console.log("Giỏ hàng của bạn đang trống!");
    } else {
        let total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Tổng số tiền phải thanh toán là: ${total} VNĐ`);
    }
}
