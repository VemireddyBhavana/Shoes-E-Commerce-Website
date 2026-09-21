// ===============================
// COUNTDOWN TIMER
// ===============================

let days = 2;
let hours = 12;
let minutes = 30;
let seconds = 45;

setInterval(() => {

    if (seconds > 0) {
        seconds--;
    } else {
        seconds = 59;

        if (minutes > 0) {
            minutes--;
        } else {
            minutes = 59;

            if (hours > 0) {
                hours--;
            } else {
                hours = 23;

                if (days > 0) {
                    days--;
                }
            }
        }
    }

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}, 1000);


function addToCart(name, price, image){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name,
price,
image,
quantity:1
});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product Added Successfully!");

}

// ======================
// LOAD CART ITEMS
// ======================

function loadCart() {

    const container = document.getElementById("cartContainer");

    if (!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        container.innerHTML = `
            <h2>Your Cart is Empty 🛒</h2>
            <p>Add some products first.</p>
        `;

        return;
    }

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-details">

                    <h3>${item.name}</h3>

                    <p>₹${item.price}</p>

                    <p>Quantity: ${item.quantity}</p>

                </div>

            </div>
        `;
    });

    container.innerHTML += `
        <h2>Total: ₹${total}</h2>
    `;
}

loadCart();


// ======================
// ADD TO WISHLIST
// ======================

function addToWishlist(name, price, image) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({
        name,
        price,
        image
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to Wishlist ❤️");
}

// ======================
// LOAD WISHLIST
// ======================

function loadWishlist() {

    const container = document.getElementById("wishlistContainer");

    if (!container) return;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.length === 0) {

        container.innerHTML = `
            <h2>No Wishlist Items ❤️</h2>
            <p>Add your favorite shoes here.</p>
        `;

        return;
    }

    container.innerHTML = "";

    wishlist.forEach(item => {

        container.innerHTML += `

        <div class="wishlist-card">

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

        </div>

        `;

    });

}

loadWishlist();