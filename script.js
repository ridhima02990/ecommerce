const products = [
  {
    id: 1,
    name: 'T-shirt',
    price: 499,
    image: 'https://via.placeholder.com/200x150?text=T-shirt'
  },
  {
    id: 2,
    name: 'Sneakers',
    price: 1299,
    image: 'https://via.placeholder.com/200x150?text=Sneakers'
  },
  {
    id: 3,
    name: 'Backpack',
    price: 899,
    image: 'https://via.placeholder.com/200x150?text=Backpack'
  }
];

let cart = [];

function renderProducts() {
  const productContainer = document.getElementById('products');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;

  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById('total').innerText = total;
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

renderProducts();
