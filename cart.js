let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let stored = localStorage.getItem("cart");
  if (stored) cart = JSON.parse(stored);
}

function checkout() {
  let msg = "Hello, I want to buy:\n";
  cart.forEach(item => {
    msg += `${item.product} - PKR ${item.price}\n`;
  });
  let total = cart.reduce((sum, i) => sum + i.price, 0);
  msg += `Total: PKR ${total}`;
  window.open(`https://wa.me/923017016801?text=${encodeURIComponent(msg)}`, "_blank");
}

loadCart();
