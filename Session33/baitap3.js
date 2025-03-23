let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'CocaCola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];
function filter() {
    const selectedCategory = document.getElementById("categorySelect").value;
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    if (selectedCategory === "") {
        productList.innerHTML = "<p>Vui lòng chọn danh mục!</p>";
        return;
    }
    const filteredProducts = dish.filter(item => item.category === selectedCategory);
    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>Không có sản phẩm nào thuộc danh mục này!</p>";
    } else {
        filteredProducts.forEach(product => {
            productList.innerHTML += `<div class="product-item">🔹 <b>Tên đồ ăn:</b> ${product.name} - <b>Danh mục:</b> ${product.category}</div>`;
        });
    }
}