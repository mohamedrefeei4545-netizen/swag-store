const productsContainer = document.getElementById("productsContainer");
const cartCount = document.getElementById("cartCount");

// عرض المنتجات
function loadProducts() {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        productsContainer.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <div class="product-price">
                        ${product.price} EGP
                    </div>

                    <button class="view-btn"
                        onclick="openProduct(${product.id})">
                        View Product
                    </button>

                </div>

            </div>
        `;

    });

}

// فتح صفحة المنتج
function openProduct(id) {

    localStorage.setItem("selectedProduct", id);

    window.location.href = "product.html";

}

// تحديث عدد عناصر السلة
function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartCount.textContent = cart.length;

}

// تشغيل الصفحة
loadProducts();
updateCartCount();