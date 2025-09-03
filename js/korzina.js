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

  // Проверяем примененный промокод
  const appliedPromo = localStorage.getItem("appliedPromo");
  let promoDiscount = 0;

  if (appliedPromo === "FASTFOOD10") {
    promoDiscount = Math.round(totalPrice * 0.1); // 10% скидка
  }

  const total = totalPrice + deliveryCost - discount - promoDiscount;

  // Обновляем элементы на странице
  const summaryLabel = document.querySelector(".summary-label");
  if (summaryLabel) summaryLabel.textContent = `Товары (${totalItems})`;

  const summaryValue = document.querySelector(".summary-value:first-child");
  if (summaryValue) summaryValue.textContent = `${totalPrice} ₽`;

  const discountElement = document.querySelector(
    '.summary-value[style*="color: var(--accent)"]'
  );
  if (discountElement) {
    if (promoDiscount > 0) {
      discountElement.textContent = `-${discount + promoDiscount} ₽`;
    } else {
      discountElement.textContent = `-${discount} ₽`;
    }
  }

  const totalValue = document.querySelector(".total-value");
  if (totalValue) totalValue.textContent = `${total} ₽`;
}

// Функция для обработки промокода
function applyPromoCode() {
  const promoInput = document.querySelector(".promo-form input");
  const promoCode = promoInput.value.trim();

  if (promoCode === "FASTFOOD10") {
    // Сохраняем примененный промокод
    localStorage.setItem("appliedPromo", promoCode);
    showNotification("Промокод применен! Скидка 10%");

    // Пересчитываем корзину
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    updateOrderSummary(totalItems, totalPrice);
  } else if (promoCode) {
    showNotification("Промокод недействителен", "error");
  }

  promoInput.value = "";
}

// Функция для обновления счетчика товаров в корзине
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Находим или создаем элемент счетчика
  let cartCounter = document.querySelector(".cart-counter");
  const navBasket = document.querySelector(".nav-basket");

  if (!cartCounter && navBasket) {
    cartCounter = document.createElement("span");
    cartCounter.className = "cart-counter";
    navBasket.appendChild(cartCounter);
  }

  if (cartCounter) {
    if (totalItems > 0) {
      cartCounter.textContent = totalItems;
      cartCounter.style.display = "flex";
    } else {
      cartCounter.style.display = "none";
    }
  }
}

// Функция для показа уведомлений
function showNotification(message, type = "success") {
  // Создаем элемент уведомления
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${
      type === "success" ? "var(--accent)" : "var(--primary)"
    };
    color: white;
    padding: 12px 20px;
    border-radius: 30px;
    box-shadow: var(--shadow-hover);
    z-index: 2100;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(notification);

  // Показываем уведомление
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateY(0)";
  }, 10);

  // Скрываем уведомление через 3 секунды
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateY(20px)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Функция для оформления заказа
function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    showNotification(
      "Корзина пуста. Добавьте товары перед оформлением заказа",
      "error"
    );
    return;
  }

  // Получаем выбранный способ доставки
  const deliveryMethod = document.querySelector(
    'input[name="delivery"]:checked'
  ).id;

  // Создаем объект заказа
  const order = {
    id: Date.now(),
    date: new Date().toLocaleDateString("ru-RU"),
    items: cart,
    delivery: deliveryMethod,
    status: "processing",
  };

  // Сохраняем заказ в историю (в реальном приложении здесь был бы запрос к серверу)
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  if (!userData.orders) userData.orders = [];
  userData.orders.unshift(order);
  localStorage.setItem("userData", JSON.stringify(userData));

  // Очищаем корзину
  localStorage.removeItem("cart");
  localStorage.removeItem("appliedPromo");

  // Показываем уведомление
  showNotification("Заказ оформлен! Спасибо за покупку!");

  // Обновляем интерфейс
  renderCart();
  updateCartCounter();
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Добавляем класс к элементу навигации для корзины
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    if (link.textContent === "Корзина") {
      link.classList.add("nav-basket");
    }
  });

  // Рендерим корзину
  renderCart();

  // Обновляем счетчик товаров
  updateCartCounter();

  // Добавляем обработчик для промокода
  const promoButton = document.querySelector(".promo-form button");
  if (promoButton) {
    promoButton.addEventListener("click", applyPromoCode);
  }

  // Добавляем обработчик для кнопки оформления заказа
  const checkoutButton = document.querySelector(".checkout-btn");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", checkout);
  }

  // Добавляем обработчик для кнопки "Перейти к меню" в пустой корзине
  const goToMenuButton = document.querySelector(".cart-empty .btn");
  if (goToMenuButton) {
    goToMenuButton.addEventListener("click", function () {
      window.location.href = "./index.html";
    });
  }

  // Добавляем обработчики для способов доставки
  const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
  deliveryOptions.forEach((option) => {
    option.addEventListener("change", function () {
      // При изменении способа доставки пересчитываем корзину
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      let totalItems = 0;
      let totalPrice = 0;

      cart.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
      });

      updateOrderSummary(totalItems, totalPrice);
    });
  });
});
