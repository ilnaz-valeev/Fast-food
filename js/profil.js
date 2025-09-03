// Добавляем стили для popup-окон
const popupStyles = document.createElement("style");
popupStyles.textContent = `
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .popup-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .popup {
        background-color: var(--light);
        border-radius: 20px;
        box-shadow: var(--shadow-hover);
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        padding: 25px;
        position: relative;
        transform: translateY(-50px);
        transition: transform 0.3s ease;
    }
    
    .popup-overlay.active .popup {
        transform: translateY(0);
    }
    
    .popup-close {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--gray);
        transition: color 0.3s ease;
    }
    
    .popup-close:hover {
        color: var(--primary);
    }
    
    .popup-title {
        color: var(--dark);
        margin-bottom: 20px;
        font-size: 22px;
        text-align: center;
    }
    
    .popup-form .form-group {
        margin-bottom: 20px;
    }
    
    .popup-form .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 20px;
    }
`;
document.head.appendChild(popupStyles);

document.addEventListener("DOMContentLoaded", function () {
  // Загрузка данных пользователя
  let userData = JSON.parse(localStorage.getItem("userData"));

  // Если данных нет, показываем popup для первоначального заполнения
  if (!userData) {
    setTimeout(() => {
      showInitialPopup();
    }, 500);

    // Создаем пустые данные по умолчанию
    userData = {
      name: "",
      phone: "",
      email: "",
      addresses: [],
      preferences: {
        spicy: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
      },
      orders: [],
      stats: {
        totalOrders: 0,
        bonusPoints: 0,
      },
    };
  }

  // Инициализация данных профиля
  function initProfile() {
    // Заполнение основной информации
    const profileInfo = document.querySelector(".profile-info");
    if (profileInfo) {
      const nameElement = profileInfo.querySelector("h1");
      const phoneElement = profileInfo.querySelectorAll("p")[0];
      const emailElement = profileInfo.querySelectorAll("p")[1];

      if (nameElement)
        nameElement.textContent = userData.name || "Пользователь";
      if (phoneElement)
        phoneElement.textContent = userData.phone || "Телефон не указан";
      if (emailElement)
        emailElement.textContent = userData.email || "Email не указан";
    }

    // Заполнение статистики
    const statValues = document.querySelectorAll(".stat-value");
    if (statValues.length >= 2) {
      statValues[0].textContent = userData.stats.totalOrders;
      statValues[1].textContent = userData.stats.bonusPoints;
    }

    // Заполнение истории заказов
    renderOrderHistory();

    // Заполнение адресов
    renderAddresses();

    // Заполнение предпочтений
    if (userData.preferences) {
      const spicyCheckbox = document.getElementById("spicy");
      const vegetarianCheckbox = document.getElementById("vegetarian");
      const glutenFreeCheckbox = document.getElementById("gluten-free");
      const lactoseFreeCheckbox = document.getElementById("lactose-free");

      if (spicyCheckbox) spicyCheckbox.checked = userData.preferences.spicy;
      if (vegetarianCheckbox)
        vegetarianCheckbox.checked = userData.preferences.vegetarian;
      if (glutenFreeCheckbox)
        glutenFreeCheckbox.checked = userData.preferences.glutenFree;
      if (lactoseFreeCheckbox)
        lactoseFreeCheckbox.checked = userData.preferences.lactoseFree;
    }

    // Заполнение настроек аккаунта
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    if (emailInput) emailInput.value = userData.email || "";
    if (phoneInput) phoneInput.value = userData.phone || "";
  }

  // Отрисовка истории заказов
  function renderOrderHistory() {
    const tbody = document.querySelector(".order-history tbody");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (userData.orders && userData.orders.length > 0) {
      userData.orders.forEach((order) => {
        const statusClass =
          order.status === "delivered"
            ? "status-delivered"
            : order.status === "processing"
            ? "status-processing"
            : "status-cancelled";

        const statusText =
          order.status === "delivered"
            ? "Доставлен"
            : order.status === "processing"
            ? "В обработке"
            : "Отменен";

        tbody.innerHTML += `
                    <tr>
                        <td>${order.id}</td>
                        <td>${order.date}</td>
                        <td>${order.amount}</td>
                        <td><span class="order-status ${statusClass}">${statusText}</span></td>
                    </tr>
                `;
      });
    } else {
      tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: var(--gray);">У вас еще нет заказов</td>
                </tr>
            `;
    }
  }

  // Отрисовка адресов
  function renderAddresses() {
    const addressList = document.querySelector(".address-list");
    if (!addressList) return;

    addressList.innerHTML = "";

    if (userData.addresses && userData.addresses.length > 0) {
      userData.addresses.forEach((address, index) => {
        const addressItem = document.createElement("li");
        addressItem.className = "address-item";
        addressItem.innerHTML = `
                    <div>
                        <strong>${address.title}</strong><br>
                        ${address.address}<br>
                        ${address.phone}
                    </div>
                    <div class="address-actions">
                        <button class="btn btn-outline edit-address" data-index="${index}">Изменить</button>
                    </div>
                `;
        addressList.appendChild(addressItem);
      });

      // Добавление обработчиков для кнопок изменения адреса
      document.querySelectorAll(".edit-address").forEach((btn) => {
        btn.addEventListener("click", function () {
          const index = parseInt(this.getAttribute("data-index"));
          showAddressPopup(index);
        });
      });
    } else {
      addressList.innerHTML = `
                <li class="address-item" style="text-align: center; color: var(--gray);">
                    У вас нет сохраненных адресов
                </li>
            `;
    }
  }

  // Показать popup для редактирования/добавления адреса
  function showAddressPopup(addressIndex = -1) {
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";
    popupOverlay.innerHTML = `
            <div class="popup">
                <button class="popup-close">&times;</button>
                <h2 class="popup-title">${
                  addressIndex >= 0
                    ? "Редактирование адреса"
                    : "Добавление адреса"
                }</h2>
                <form class="popup-form" id="addressForm">
                    <div class="form-group">
                        <label for="popup-address-title">Название адреса</label>
                        <input type="text" id="popup-address-title" class="form-control" required 
                            value="${
                              addressIndex >= 0
                                ? userData.addresses[addressIndex].title
                                : ""
                            }">
                    </div>
                    <div class="form-group">
                        <label for="popup-address-text">Адрес</label>
                        <textarea id="popup-address-text" class="form-control" rows="3" required>${
                          addressIndex >= 0
                            ? userData.addresses[addressIndex].address
                            : ""
                        }</textarea>
                    </div>
                    <div class="form-group">
                        <label for="popup-address-phone">Телефон</label>
                        <input type="tel" id="popup-address-phone" class="form-control" required 
                            value="${
                              addressIndex >= 0
                                ? userData.addresses[addressIndex].phone
                                : ""
                            }">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-outline" id="popup-cancel">Отмена</button>
                        <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>
                </form>
            </div>
        `;

    document.body.appendChild(popupOverlay);

    // Активируем popup после небольшой задержки для анимации
    setTimeout(() => {
      popupOverlay.classList.add("active");
    }, 10);

    // Обработчик закрытия popup
    const closePopup = () => {
      popupOverlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(popupOverlay);
      }, 300);
    };

    const closeBtn = popupOverlay.querySelector(".popup-close");
    const cancelBtn = popupOverlay.querySelector("#popup-cancel");

    if (closeBtn) closeBtn.addEventListener("click", closePopup);
    if (cancelBtn) cancelBtn.addEventListener("click", closePopup);

    // Обработчик клика вне popup
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });

    // Обработчик отправки формы
    const addressForm = popupOverlay.querySelector("#addressForm");
    if (addressForm) {
      addressForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("popup-address-title").value;
        const address = document.getElementById("popup-address-text").value;
        const phone = document.getElementById("popup-address-phone").value;

        if (addressIndex >= 0) {
          // Редактирование существующего адреса
          userData.addresses[addressIndex] = { title, address, phone };
        } else {
          // Добавление нового адреса
          if (!userData.addresses) userData.addresses = [];
          userData.addresses.push({ title, address, phone });
        }

        saveUserData();
        renderAddresses();
        closePopup();

        // Показываем уведомление об успешном сохранении
        showNotification("Адрес успешно сохранен!");
      });
    }
  }

  // Показать popup для первоначального заполнения профиля
  function showInitialPopup() {
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";
    popupOverlay.innerHTML = `
            <div class="popup">
                <h2 class="popup-title">Заполните ваш профиль</h2>
                <form class="popup-form" id="initialForm">
                    <div class="form-group">
                        <label for="popup-name">Имя и фамилия</label>
                        <input type="text" id="popup-name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="popup-email">Email</label>
                        <input type="email" id="popup-email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="popup-phone">Телефон</label>
                        <input type="tel" id="popup-phone" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="popup-address">Адрес</label>
                        <textarea id="popup-address" class="form-control" rows="3" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="popup-password">Пароль</label>
                        <input type="password" id="popup-password" class="form-control" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>
                </form>
            </div>
        `;

    document.body.appendChild(popupOverlay);

    // Активируем popup после небольшой задержки для анимации
    setTimeout(() => {
      popupOverlay.classList.add("active");
    }, 10);

    // Обработчик отправки формы
    const initialForm = popupOverlay.querySelector("#initialForm");
    if (initialForm) {
      initialForm.addEventListener("submit", (e) => {
        e.preventDefault();

        userData.name = document.getElementById("popup-name").value;
        userData.email = document.getElementById("popup-email").value;
        userData.phone = document.getElementById("popup-phone").value;
        const address = document.getElementById("popup-address").value;
        const password = document.getElementById("popup-password").value;

        // Добавляем адрес
        if (!userData.addresses) userData.addresses = [];
        userData.addresses.push({
          title: "Основной адрес",
          address: address,
          phone: userData.phone,
        });

        // Сохраняем пароль (в реальном приложении нужно хэшировать)
        userData.password = password;

        saveUserData();
        initProfile();

        // Закрываем popup
        popupOverlay.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(popupOverlay);
        }, 300);

        // Показываем уведомление об успешном сохранении
        showNotification("Профиль успешно создан!");
      });
    }
  }

  // Показать уведомление
  function showNotification(message) {
    // Создаем элемент уведомления
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--accent);
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

  // Сохранение данных в localStorage
  function saveUserData() {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  // Добавление обработчика для кнопки "Добавить адрес"
  const addAddressBtn = document.querySelector(".profile-section .btn-primary");
  if (addAddressBtn) {
    addAddressBtn.addEventListener("click", function () {
      showAddressPopup();
    });
  }

  // Сохранение предпочтений
  document.querySelectorAll(".preference-item input").forEach((input) => {
    input.addEventListener("change", function () {
      if (!userData.preferences) userData.preferences = {};
      userData.preferences[this.id] = this.checked;
      saveUserData();
      showNotification("Предпочтения сохранены");
    });
  });

  // Сохранение настроек аккаунта
  const saveSettingsBtn = document.querySelector(
    ".profile-section:last-child .btn"
  );
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", function () {
      const newEmail = document.getElementById("email");
      const newPhone = document.getElementById("phone");
      const newPassword = document.getElementById("password");

      if (newEmail && newEmail.value) userData.email = newEmail.value;
      if (newPhone && newPhone.value) userData.phone = newPhone.value;
      if (newPassword && newPassword.value) {
        // Здесь должна быть логика обновления пароля
        userData.password = newPassword.value;
        newPassword.value = "";
      }

      saveUserData();
      initProfile(); // Обновляем отображение данных
      showNotification("Настройки сохранены!");
    });
  }

  // Инициализация профиля
  initProfile();
});
