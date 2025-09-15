let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById('cart-items');
  if (!cartItems) return;
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.product} - PKR ${item.price}</p>`;
    total += item.price;
  });
  let totalEl = document.getElementById('total');
  if(totalEl) totalEl.innerText = `Total: PKR ${total}`;
}

function checkout() {
  if(cart.length === 0){ alert('Your cart is empty!'); return; }
  let message = 'Hello, I want to order:%0A';
  cart.forEach(item => { message += `- ${item.product} (PKR ${item.price})%0A`; });
  let total = cart.reduce((sum,item)=>sum+item.price,0);
  message += `%0ATotal: PKR ${total}`;
  window.open(`https://wa.me/923017016801?text=${message}`, '_blank');
}

function payNow() {
  alert('Please send payment to:\nJazzCash / Easypaisa: 03280203486\nAfter payment, share screenshot on WhatsApp.');
  window.open('https://wa.me/923280203486?text=I have sent payment for my order','_blank');
}
