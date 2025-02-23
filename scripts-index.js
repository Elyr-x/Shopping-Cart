document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");

    let products = [
        { id: 1, name: "Laptop", price: 800, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Phone", price: 500, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Headphones", price: 100, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Camera", price: 300, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Tablet", price: 400, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Smartwatch", price: 200, image: "https://via.placeholder.com/150" },
        { id: 7, name: "Keyboard", price: 50, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Mouse", price: 40, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Monitor", price: 250, image: "https://via.placeholder.com/150" },
        { id: 10, name: "Speaker", price: 150, image: "https://via.placeholder.com/150" }
    ];

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cartCount) cartCount.textContent = cart.length;
    }

    function displayProducts() {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    }

    window.addToCart = function (id) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = products.find(p => p.id === id);
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    };

    displayProducts();
    updateCartCount();
});
