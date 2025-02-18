document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsList.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<p>Your cart is empty. Please add some items! 🛒</p>";
            cartTotal.textContent = "Total: $0";
            return;
        }

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">❌</button>`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = `Total: $${total}`;
    }

    window.removeFromCart = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    
    checkoutBtn.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("🛒 YOUR CART IS EMPTY! PLEASE ADD SOME ITEMS FIRST.");
        } else {
            alert("🎉 THANK YOU FOR YOUR PURCHASE! 🎉");
            localStorage.removeItem("cart"); 
            loadCart(); 
        }
    });

    loadCart();
});
