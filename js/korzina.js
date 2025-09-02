// Функция для отображения товаров в корзине
function renderCart() {
  const cartContainer = document.querySelector(".cart-items");
  const cartEmpty = document.querySelector(".cart-empty");
  const cartSummary = document.querySelector(".cart-summary");

  // Получаем корзину из localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    // Если корзина пуста
    if (cartContainer) cartContainer.style.display = "none";
    if (cartEmpty) cartEmpty.style.display = "block";
    if (cartSummary) cartSummary.style.display = "none";
    return;
  }

  // Если есть товары в корзине
  if (cartContainer) cartContainer.style.display = "block";
  if (cartEmpty) cartEmpty.style.display = "none";
  if (cartSummary) cartSummary.style.display = "block";

  // Очищаем контейнер
  if (cartContainer) cartContainer.innerHTML = "";

  // Переменные для подсчета общей суммы
  let totalItems = 0;
  let totalPrice = 0;

  // Добавляем каждый товар в корзину
  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalItems += item.quantity;
    totalPrice += itemTotal;

    const cartItemElement = document.createElement("div");
    cartItemElement.className = "cart-item";
    cartItemElement.dataset.id = item.id;

    cartItemElement.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-desc">${item.description}</div>
        <div class="cart-item-price">${item.price} ₽</div>
      </div>
      <div class="cart-item-controls">
        <div class="cart-item-quantity">
          <button class="quantity-btn decrease">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn increase">+</button>
        </div>
        <button class="cart-item-remove">×</button>
      </div>
    `;

    if (cartContainer) cartContainer.appendChild(cartItemElement);

    // Добавляем обработчики событий для кнопок
    const decreaseBtn = cartItemElement.querySelector(".decrease");
    const increaseBtn = cartItemElement.querySelector(".increase");
    const removeBtn = cartItemElement.querySelector(".cart-item-remove");

    decreaseBtn.addEventListener("click", () => updateQuantity(item.id, -1));
    increaseBtn.addEventListener("click", () => updateQuantity(item.id, 1));
    removeBtn.addEventListener("click", () => removeFromCart(item.id));
  });

  // Обновляем информацию о заказе
  updateOrderSummary(totalItems, totalPrice);
}

// Функция для обновления количества товара
function updateQuantity(itemId, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity += change;

    // Если количество стало 0 или меньше, удаляем товар
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    // Сохраняем обновленную корзину
    localStorage.setItem("cart", JSON.stringify(cart));

    // Перерисовываем корзину
    renderCart();

    // Обновляем счетчик в навигации
    updateCartCounter();
  }
}

// Функция для удаления товара из корзины
function removeFromCart(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== itemId);

  // Сохраняем обновленную корзину
  localStorage.setItem("cart", JSON.stringify(cart));

  // Перерисовываем корзину
  renderCart();

  // Обновляем счетчик в навигации
  updateCartCounter();
}

// Функция для обновления сводки заказа
function updateOrderSummary(totalItems, totalPrice) {
  const deliveryCost = 200; // Стоимость доставки
  const discount = totalPrice > 1000 ? 100 : 0; // Скидка при заказе от 1000 руб
  const total = totalPrice + deliveryCost - discount;

  // Обновляем элементы на странице
  const summaryLabel = document.querySelector(".summary-label");
  if (summaryLabel) summaryLabel.textContent = `Товары (${totalItems})`;

  const summaryValue = document.querySelector(".summary-value:first-child");
  if (summaryValue) summaryValue.textContent = `${totalPrice} ₽`;

  const discountElement = document.querySelector(
    '.summary-value[style*="color: var(--accent)"]'
  );
  if (discountElement) discountElement.textContent = `-${discount} ₽`;

  const totalValue = document.querySelector(".total-value");
  if (totalValue) totalValue.textContent = `${total} ₽`;
}

// Функция для обработки промокода
function applyPromoCode() {
  const promoInput = document.querySelector(".promo-form input");
  const promoCode = promoInput.value.trim();

  if (promoCode === "FASTFOOD10") {
    alert("Промокод применен! Скидка 10%");
    // Здесь можно добавить логику применения скидки
  } else if (promoCode) {
    alert("Промокод недействителен");
  }

  promoInput.value = "";
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Рендерим корзину
  renderCart();

  // Добавляем обработчик для промокода
  const promoButton = document.querySelector(".promo-form button");
  if (promoButton) {
    promoButton.addEventListener("click", applyPromoCode);
  }

  // Добавляем обработчик для кнопки оформления заказа
  const checkoutButton = document.querySelector(".checkout-btn");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      alert("Заказ оформлен! Спасибо за покупку!");
      // Очищаем корзину после оформления заказа
      localStorage.removeItem("cart");
      renderCart();
      updateCartCounter();
    });
  }
});
