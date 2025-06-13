let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;

// Inicializa contador y renderiza carrito al cargar
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cart-count').innerText = cart.length;
  renderCart();
});

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('total', total.toString());
}

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  total += price;

  document.getElementById('cart-count').innerText = cart.length;
  saveCart(); // Guardamos en localStorage
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
  saveCart(); // Guardamos después de borrar
  renderCart();
}



function comprar() {
  if (cart.length === 0) {
    showAlert("Tu carrito está vacío", "warning");
    return;
  }

  // Limpiar carrito y localStorage
  cart = [];
  total = 0;
  saveCart();
  renderCart();
  document.getElementById('cart-count').innerText = 0;

  // Mostrar alerta de éxito
  showAlert("¡Compra exitosa!", "success");
}

// Mostrar alerta con estilo glass
function showAlert(message, type = "success") {
  const alert = document.createElement('div');
  alert.className = `glass-alert ${type}`;
  alert.innerText = message;

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.classList.add('show');
  }, 100); // para permitir transición

  setTimeout(() => {
    alert.classList.remove('show');
    setTimeout(() => alert.remove(), 500);
  }, 3000);
}


  function mostrarAlerta() {
    const alerta = document.getElementById('alertaGlass');
    alerta.style.display = 'block';

    setTimeout(() => {
      alerta.style.display = 'none';
    }, 3000);
  }