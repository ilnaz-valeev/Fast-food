

      // Получаем все секции с карточками
      const pizzaSection = document.getElementById("pizza-section");
      const burgerSection = document.getElementById("burger-section");
      const soupSection = document.getElementById("soup-section");
      const hotSection = document.getElementById("hot-section");
      const fishSection = document.getElementById("fish-section");
      const sushiSection = document.getElementById("sushi-section");
      const dessertSection = document.getElementById("dessert-section");
      const drinkSection = document.getElementById("drink-section");

      // Получаем все категории
      const pizza = document.getElementById("pizza");
      const burger = document.getElementById("burger");
      const soup = document.getElementById("soup");
      const hot = document.getElementById("hot");
      const fish = document.getElementById("fish");
      const sushi = document.getElementById("sushi");
      const dessert = document.getElementById("dessert");
      const drink = document.getElementById("drink");

      // При клике на "Пицца", показываем секцию с пиццей
      pizza.addEventListener("click", function () {
        pizzaSection.style.display = "block";

        burgerSection.style.display = "none";
        soupSection.style.display = "none";
        hotSection.style.display = "none";
        fishSection.style.display = "none";
        sushiSection.style.display = "none";
        dessertSection.style.display = "none";
        drinkSection.style.display = "none";
      });

      // При клике на "Бургер", показываем секцию с бургером
      burger.addEventListener("click", function () {
        burgerSection.style.display = "block";

        pizzaSection.style.display = "none";
        soupSection.style.display = "none";
        hotSection.style.display = "none";
        fishSection.style.display = "none";
        sushiSection.style.display = "none";
        dessertSection.style.display = "none";
        drinkSection.style.display = "none";
      });

      // При клике на "Супы", показываем секцию с супами
      soup.addEventListener("click", function () {
        soupSection.style.display = "block";

        pizzaSection.style.display = "none";
        burgerSection.style.display = "none";

        hotSection.style.display = "none";
        fishSection.style.display = "none";
        sushiSection.style.display = "none";
        dessertSection.style.display = "none";
        drinkSection.style.display = "none";
      });

      // При клике на "Горячее", показываем секцию с горячими блюдами
      hot.addEventListener("click", function () {
        hotSection.style.display = "block";

        pizzaSection.style.display = "none";
        burgerSection.style.display = "none";
        soupSection.style.display = "none";

        fishSection.style.display = "none";
        sushiSection.style.display = "none";
        dessertSection.style.display = "none";
        drinkSection.style.display = "none";
      });

      // При клике на "Рыба", показываем секцию с рыбой
      fish.addEventListener("click", function () {
        fishSection.style.display = "block";

        pizzaSection.style.display = "none";
        burgerSection.style.display = "none";
        soupSection.style.display = "none";
        hotSection.style.display = "none";

        sushiSection.style.display = "none";
        dessertSection.style.display = "none";
        drinkSection.style.display = "none";
      });

      // При клике на "Суши", показываем секцию с суши
      sushi.addEventListener("click", function () {
        sushiSection.style.display = "block";

        pizzaSection.style.display = "none";
        burgerSection.style.display = "none";
        soupSection.style.display = "none";
        hotSection.style.display = "none";
        fishSection.style.display = "none";

        dessertSection.style.display = "none";
        drinkSection.style.display = "none";
      });

      // При клике на "Десерты", показываем секцию с десертами
      dessert.addEventListener("click", function () {
        dessertSection.style.display = "block";

        pizzaSection.style.display = "none";
        burgerSection.style.display = "none";
        soupSection.style.display = "none";
        hotSection.style.display = "none";
        fishSection.style.display = "none";
        sushiSection.style.display = "none";

        drinkSection.style.display = "none";
      });

      // При клике на "Напитки", показываем секцию с напитками
      drink.addEventListener("click", function () {
        drinkSection.style.display = "block";

        pizzaSection.style.display = "none";
        burgerSection.style.display = "none";
        soupSection.style.display = "none";
        hotSection.style.display = "none";
        fishSection.style.display = "none";
        sushiSection.style.display = "none";
        dessertSection.style.display = "none";
      });

      // Получаем все элементы с классом .food
      // Получаем все элементы с классом .food
const foodItems = document.querySelectorAll(".food");

// Добавляем обработчик событий для каждого элемента
foodItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Сбрасываем активный класс для всех элементов
    foodItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    // Добавляем активный класс для выбранного элемента
    this.classList.add("active");

    // Получаем текстовое название блюда
    const foodName = this.querySelector(".food-name");

    // Меняем цвет текста на красный для выбранного элемента
    foodName.style.color = "#d73432";

    // Сбрасываем цвет текста для всех других элементов
    foodItems.forEach((otherItem) => {
      if (otherItem !== this) {
        otherItem.querySelector(".food-name").style.color = ""; // Возвращаем цвет по умолчанию
      }
    });

    // Скрываем все секции
    pizzaSection.style.display = "none";
    burgerSection.style.display = "none";
    soupSection.style.display = "none";
    hotSection.style.display = "none";
    fishSection.style.display = "none";
    sushiSection.style.display = "none";
    dessertSection.style.display = "none";
    drinkSection.style.display = "none";

    // Показываем соответствующую секцию в зависимости от выбранного элемента
    switch (this.id) {
      case "pizza":
        pizzaSection.style.display = "block";
        break;
      case "burger":
        burgerSection.style.display = "block";
        break;
      case "soup":
        soupSection.style.display = "block";
        break;
      case "hot":
        hotSection.style.display = "block";
        break;
      case "fish":
        fishSection.style.display = "block";
        break;
      case "sushi":
        sushiSection.style.display = "block";
        break;
      case "dessert":
        dessertSection.style.display = "block";
        break;
      case "drink":
        drinkSection.style.display = "block";
        break;
    }
  });
});

// Пример данных для всех категорий (заполните своими уникальными данными)


// Функция генерации карточек
// ...existing code...
function renderCards(category, sectionId) {
  const section = document.getElementById(sectionId);
  const cardList = section.querySelector(".card-list");
  cardList.innerHTML = ""; // Очищаем

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
    cardList.appendChild(card);
  });
}


// ...existing code...
// Вызов для всех секций (после загрузки страницы)
renderCards("pizza", "pizza-section");
renderCards("burger", "burger-section");
renderCards("soup", "soup-section");
renderCards("hot", "hot-section");
renderCards("fish", "fish-section");
renderCards("sushi", "sushi-section");
renderCards("dessert", "dessert-section");
renderCards("drink", "drink-section");



document.querySelectorAll('.card-button').forEach(function(cardButton){
    cardButton.addEventListener('click', function(){
        alert('Товар добавлен в корзину');
    });
});

