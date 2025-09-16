let cart = [];

// Add to cart
function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (!cartItems || !totalEl) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      ${item.product} - PKR ${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  totalEl.textContent = `Total: PKR ${total}`;
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout on WhatsApp
function checkout() {
  let message = "Hello! I want to order:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.product}: PKR ${item.price}\n`;
    total += item.price;
  });

  message += `\nTotal: PKR ${total}`;
  const phone = "03017016801"; // your WhatsApp number
  window.open(`https://wa.me/92${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// Pay Now (JazzCash/Easypaisa instructions)
function payNow() {
  alert("For JazzCash/Easypaisa Payments:\nSend to: 03280203486\nAfter payment, share receipt on WhatsApp: 03017016801");
}
