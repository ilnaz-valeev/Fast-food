// Добавляем функцию для показа уведомлений (аналог alert, но красивее)
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

// Функция для добавления товара в корзину
function addToCart(product, category) {
  // Получаем текущую корзину из localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Проверяем, есть ли уже такой товар в корзине
  const existingProductIndex = cart.findIndex(
    (item) => item.name === product.name && item.category === category
  );

  if (existingProductIndex !== -1) {
    // Если товар уже есть, увеличиваем количество
    cart[existingProductIndex].quantity += 1;
  } else {
    // Если товара нет, добавляем его
    cart.push({
      id: Date.now(), // уникальный идентификатор
      name: product.name,
      description: product.description,
      img: product.img,
      price: product.price,
      category: category,
      quantity: 1,
    });
  }

  // Сохраняем обновленную корзину в localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Показываем уведомление
  showNotification("Товар добавлен в корзину!");

  // Обновляем счетчик корзины
  updateCartCounter();
}

// Функция для обновления счетчика товаров в корзине
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Находим или создаем элемент для отображения количества
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

// Функция генерации карточек
function renderCards(category, sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const cardList = section.querySelector(".card-list");
  if (!cardList) return;

  cardList.innerHTML = ""; // Очищаем

  // Проверяем, есть ли товары в этой категории
  if (products[category] && products[category].length > 0) {
    products[category].forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="food-card">
          <img src="${product.img}" alt="${product.name}" class="card-img" />
          <div class="gram">${product.gram || ""}</div>
          <h3 class="card-name">${product.name}</h3>
          <p class="card-description">${product.description}</p>
          <p class="card-price">${product.price} р</p>
          <button class="card-button">Добавить в корзину</button>
        </div>
      `;

      // Добавляем обработчик события для кнопки
      const addButton = card.querySelector(".card-button");
      addButton.addEventListener("click", () => {
        addToCart(product, category);
      });

      cardList.appendChild(card);
    });
  } else {
    // Если товаров нет, показываем сообщение
    cardList.innerHTML = `
      <div class="empty-category">
        <p>В этой категории пока нет товаров</p>
      </div>
    `;
  }
}

// Функция для активации категории
function activateCategory(categoryId) {
  // Получаем все элементы с классом .food
  const foodItems = document.querySelectorAll(".food");

  // Сбрасываем активный класс для всех элементов
  foodItems.forEach((otherItem) => {
    otherItem.classList.remove("active");
    otherItem.querySelector(".food-name").style.color = "";
  });

  // Добавляем активный класс для выбранного элемента
  const activeItem = document.getElementById(categoryId);
  if (activeItem) {
    activeItem.classList.add("active");
    activeItem.querySelector(".food-name").style.color = "#d73432";
  }

  // Скрываем все секции
  const sections = [
    "pizza-section",
    "burger-section",
    "soup-section",
    "hot-section",
    "fish-section",
    "sushi-section",
    "dessert-section",
    "drink-section",
  ];

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.style.display = "none";
  });

  // Показываем соответствующую секцию
  const activeSection = document.getElementById(`${categoryId}-section`);
  if (activeSection) activeSection.style.display = "block";
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Активируем первую категорию (пиццу) по умолчанию
  activateCategory("pizza");

  // Рендерим карточки для всех категорий
  renderCards("pizza", "pizza-section");
  renderCards("burger", "burger-section");
  renderCards("soup", "soup-section");
  renderCards("hot", "hot-section");
  renderCards("fish", "fish-section");
  renderCards("sushi", "sushi-section");
  renderCards("dessert", "dessert-section");
  renderCards("drink", "drink-section");

  // Добавляем обработчики для категорий с проверкой на существование элементов
  const categories = [
    "pizza",
    "burger",
    "soup",
    "hot",
    "fish",
    "sushi",
    "dessert",
    "drink",
  ];

  categories.forEach((categoryId) => {
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.addEventListener("click", () =>
        activateCategory(categoryId)
      );
    }
  });

  // Обновляем счетчик корзины
  updateCartCounter();
});
