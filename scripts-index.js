document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const searchInput = document.getElementById("search");
    const productList = document.getElementById("product-list");

    let products = [
        { id: 1, name: "ASUS ROG STRIX", category: "Laptop", price: 800, image: "image/text.txt/2.jpg" },
        { id: 2, name: "TecnoPova 6", category: "Phone", price: 500, image: "image/Tecno.jpg" },
        { id: 3, name: "Headphones", category: "Audio", price: 100, image: "image/1.jpg" },
        { id: 4, name: "Canon EOS R7", category: "Electronics", price: 300, image: "image/3.jpg" },
        { id: 5, name: "Apple iPad 10.9 Inches (10th Gen)", category: "Gadget", price: 400, image: "image/4.jpg" },
        { id: 6, name: "NEW H9 Smart Watch", category: "Wearable", price: 200, image: "image/5.jpg" },
        { id: 7, name: "Inplay NK1040-B Mechanical Keyboard", category: "Accessories", price: 50, image: "image/6.jpg" },
        { id: 8, name: "Inplay M066 RGB Gaming Mouse", category: "Accessories", category: "Moouse", price: 40, image: "image/7.jpg" },
        { id: 9, name: "Samsung 22 LED Borderless Monitor", category: "Display", price: 250, image: "image/8.jpg" },
        { id: 10, name: "NOOTRY Computer Speakers", category: "Audio", price: 150, image: "image/9.jpg" },
    ];

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cartCount) cartCount.textContent = cart.length;
    }

    function displayProducts(filteredProducts = products) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
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

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.category.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    });

    displayProducts();
    updateCartCount();
});
document.addEventListener("DOMContentLoaded", function () {
    const slideshow = document.getElementById("slideshow");
    const slides = Array.from(slideshow.children);
    let lastIndex = -1;

    function randomSlide() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * slides.length);
        } while (randomIndex === lastIndex);

        lastIndex = randomIndex;

        slides.forEach((slide, i) => {
            slide.style.display = i === randomIndex ? "block" : "none";
        });
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === 0 ? "block" : "none";
    });

    setInterval(randomSlide, 3000);
});
