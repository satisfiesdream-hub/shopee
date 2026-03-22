const USD_TO_INR = 84;
const inr = v => '₹' + (v * USD_TO_INR).toLocaleString('en-IN');

const products = [
  { id:1, name:'Rose Gold Serum', brand:'Lumière', category:'skincare', price:89, original:120, img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80', rating:4.8, reviews:214, badge:'sale' },
  { id:2, name:'Velvet Matte Lipstick', brand:'Rouge', category:'cosmetic', price:34, original:null, img:'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9b?w=400&q=80', rating:4.6, reviews:189, badge:'new' },
  { id:3, name:'Diamond Drop Earrings', brand:'Éclat', category:'jewellery', price:149, original:199, img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', rating:4.9, reviews:97, badge:'sale' },
  { id:4, name:'Midnight Bloom Perfume', brand:'Sillage', category:'fragrance', price:112, original:null, img:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80', rating:4.7, reviews:302, badge:'new' },
  { id:5, name:'Vitamin C Brightening Cream', brand:'Glow Lab', category:'skincare', price:58, original:75, img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80', rating:4.5, reviews:441, badge:'sale' },
  { id:6, name:'Smoky Eye Palette', brand:'Noir', category:'cosmetic', price:47, original:null, img:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80', rating:4.4, reviews:156, badge:null },
  { id:7, name:'Gold Chain Necklace', brand:'Éclat', category:'jewellery', price:89, original:110, img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', rating:4.8, reviews:73, badge:'sale' },
  { id:8, name:'Cherry Blossom Mist', brand:'Sillage', category:'fragrance', price:68, original:null, img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80', rating:4.6, reviews:228, badge:'new' },
  { id:9, name:'Hyaluronic Acid Toner', brand:'Glow Lab', category:'skincare', price:42, original:55, img:'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&q=80', rating:4.7, reviews:519, badge:'sale' },
  { id:10, name:'Nude Gloss Set', brand:'Rouge', category:'cosmetic', price:29, original:null, img:'https://images.unsplash.com/photo-1631214524020-3c69b3b0e5e7?w=400&q=80', rating:4.3, reviews:88, badge:null },
  { id:11, name:'Pearl Stud Earrings', brand:'Éclat', category:'jewellery', price:65, original:80, img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', rating:4.9, reviews:134, badge:'sale' },
  { id:12, name:'Oud Wood Cologne', brand:'Sillage', category:'fragrance', price:135, original:null, img:'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80', rating:4.8, reviews:61, badge:'new' },
];

let cart = [];
let currentFilter = 'all';

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => {
    const discount = p.original ? Math.round((1 - p.price / p.original) * 100) : null;
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= .5 ? '½' : '');
    return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'New' : 'Sale'}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWish(this)"><i class="fa-regular fa-heart"></i></button>
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <p class="product-name">${p.name}</p>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${inr(p.price)}</span>
          ${p.original ? `<span class="price-original">${inr(p.original)}</span><span class="price-discount">-${discount}%</span>` : ''}
        </div>
        <button class="btn-add-cart" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-bag-shopping"></i> Add to Bag
        </button>
      </div>
    </div>`;
  }).join('');
}

function filterProducts(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderProducts(cat);
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
  showAddedFeedback(id);
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cart-empty"><i class="fa-regular fa-bag-shopping"></i><p>Your bag is empty</p></div>';
    footerEl.style.display = 'none';
    return;
  }
  footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.img}" alt="${i.name}"/>
      <div class="cart-item-info">
        <p>${i.name}</p>
        <span>${inr(i.price * i.qty)}</span>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span class="qty-val">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeItem(${i.id})"><i class="fa-solid fa-trash"></i></button>
    </div>`).join('');
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = inr(subtotal);
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function toggleWish(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  icon.className = btn.classList.contains('active') ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
}

function showAddedFeedback(id) {
  const card = document.querySelector(`.product-card[data-id="${id}"] .btn-add-cart`);
  if (!card) return;
  const orig = card.innerHTML;
  card.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
  card.style.background = '#10b981';
  setTimeout(() => { card.innerHTML = orig; card.style.background = ''; }, 1200);
}

function scrollToShop() {
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function goToCheckout() {
  toggleCart();
  document.getElementById('checkoutOverlay').classList.add('open');
  goStep(1);
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
}

function goStep(n) {
  ['stepDelivery','stepPayment','stepConfirm'].forEach((id, i) => {
    document.getElementById(id).classList.toggle('hidden', i !== n - 1);
  });
  [1,2,3].forEach(i => {
    const dot = document.getElementById(`step${i}Dot`);
    dot.classList.toggle('active', i === n);
    dot.classList.toggle('done', i < n);
  });
  if (n === 3) renderOrderSummary();
}

function renderOrderSummary() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('orderSummary').innerHTML = cart.map(i => `
    <div class="order-item">
      <img src="${i.img}" alt="${i.name}"/>
      <div class="order-item-info"><p>${i.name}</p><span>Qty: ${i.qty}</span></div>
      <span class="order-item-price">${inr(i.price * i.qty)}</span>
    </div>`).join('');
  document.getElementById('confirmSubtotal').textContent = inr(subtotal);
  document.getElementById('confirmTotal').textContent = inr(subtotal);
}

function switchPay(type, btn) {
  document.querySelectorAll('.pay-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cardForm').classList.toggle('hidden', type !== 'card');
  document.getElementById('altPay').classList.toggle('hidden', type === 'card');
}

function fmtCard(input) {
  input.value = input.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);
}

function placeOrder() {
  closeCheckout();
  cart = [];
  updateCartUI();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

document.addEventListener('DOMContentLoaded', () => renderProducts());
