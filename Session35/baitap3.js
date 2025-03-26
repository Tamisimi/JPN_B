const products = [
    {
        id: 1, name: "Laptop Dell XPS 15",
        price: 35000000,
        image: "https://nhatminhlaptop.com/upload/products/2023-03-23-13-45-56/9530-1.jpg",
        description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB."
    },
    {
        id: 2, name: "iPhone 15 Pro Max",
        price: 32000000,
        image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        description: "Smartphone đỉnh cao của Apple với chip A17 Pro."
    },
    {
        id: 3, name: "Samsung Galaxy S24",
        price: 25000000,
        image: "https://product.hstatic.net/200000409445/product/4_37f9cc422b714f86864f6cb548e98ac6_master.jpg",
        description: "Điện thoại Samsung mới nhất với camera siêu zoom."
    },
    {
        id: 4, name: "Tai nghe Sony WH-1000XM5",
        price: 7000000,
        image: "https://cdn.tgdd.vn/Products/Images/54/313692/tai-nghe-bluetooth-chup-tai-sony-wh1000xm5-trang-1-750x500.jpg",
        description: "Tai nghe chống ồn tốt nhất từ Sony."
    },
    {
        id: 5, name: "Apple Watch Series 9",
        price: 12000000,
        image: "https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg",
        description: "Đồng hồ thông minh cao cấp từ Apple với tính năng đo sức khỏe."
    },
    {
        id: 6, name: "Loa JBL Charge 5",
        price: 3000000,
        image: "https://cdn.tgdd.vn/Products/Images/2162/251230/bluetooth-jbl-charge-5-2-750x500.jpg",
        description: "Loa Bluetooth chống nước với âm thanh mạnh mẽ."
    }
]

localStorage.setItem("products", JSON.stringify(products));
let productList = document.getElementById("productList");

function showProducts(list) {
    productList.innerHTML = "";
    list.forEach((product) => {
        productList.innerHTML += `
            <div class="productCard">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <b>${product.price.toLocaleString()} VND</b><br>
                <button>Mua</button>
            </div>`;
    });
}
function searchProduct() {
    const searchValue = document.getElementById("searchInput").value.trim();
    const filteredProducts = products.filter(product => product.name.includes(searchValue));
    showProducts(filteredProducts);
}

showProducts(products);

