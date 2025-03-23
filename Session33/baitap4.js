let products = [
    { id: 1, name: 'Laptop Dell XPS 15', price: 39999000, image: 'https://mayxaugiacao.com/wp-content/uploads/2022/06/dell-xps-15-9520-mayxaugiacao.jpg', description: 'Laptop cao cấp, màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.' },
    { id: 2, name: 'iPhone 15 Pro Max', price: 29999000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPhRIeihjBpeuxRjwVz6EB9rv_9AeCLoe6Q&s', description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.' },
    { id: 3, name: 'Samsung Galaxy S24 Ultra', price: 28999000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFOf7kK1Xnok6xGPkeOwkiwx9L6UaMnND7Q&s', description: 'Android mạnh mẽ với bút S-Pen và camera siêu zoom.' },
    { id: 4, name: 'Tai nghe Sony WH-1000XM5', price: 7990000, image: 'https://cdn.tgdd.vn/Products/Images/54/313692/tai-nghe-bluetooth-chup-tai-sony-wh1000xm5-trang-1-750x500.jpg', description: 'Tai nghe chống ồn tốt nhất với chất lượng pin lên đến 30 giờ.' },
    { id: 5, name: 'Apple Watch Series 9', price: 12990000, image: 'https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg', description: 'Đồng hồ thông minh tính năng theo dõi sức khỏe và thể thao.' },
    { id: 6, name: 'Loa JBL Charge 5', price: 3490000, image: 'https://cdn.tgdd.vn/Products/Images/2162/251230/bluetooth-jbl-charge-5-2-750x500.jpg', description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ.' }
];
let productContainer = document.getElementById('product-container');
let searchInput = document.getElementById('search');
function displayProducts(productsToShow) {
    productContainer.innerHTML = '';
    if (productsToShow.length === 0) {
        productContainer.innerHTML = '<h2>Không tìm thấy sản phẩm nào!</h2>';
        return;
    }
    productsToShow.forEach(product => {
        productContainer.innerHTML += `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            <p>Giá: ${product.price.toLocaleString('vi-VN')} VND</p>
                        </div>
                    </div>
                `;
    });
}
searchInput.addEventListener('input', () => {
    let keyword = searchInput.value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(keyword));
    displayProducts(filteredProducts);
});
displayProducts(products);