let cart = [];
let total = 0;

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  total += price;

  document.getElementById('cart-count').innerText = cart.length;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // Limpiar lista

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center justify-content-between';
    li.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" class="me-2" style="width:50px; height:50px; object-fit:cover;">
        <div>${item.name} - $${item.price.toFixed(2)}</div>
      </div>
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
        <i class="bi bi-trash"></i>
      </button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById('cart-total').innerText = total.toFixed(2);
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  document.getElementById('cart-count').innerText = cart.length;
  renderCart();
}
