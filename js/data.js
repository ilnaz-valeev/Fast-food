const products = {
  pizza: [
    {
      name: "Римская",
      description: "Томаты, моцарелла, ветчина, шампиньоны, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    // ...другие товары...

    {
      name: "Маргарита",
      description: "Томаты, моцарелла, базилик, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Пепперони",
      description: "Томаты, моцарелла, пепперони, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Гавайская",
      description: "Томаты, моцарелла, ветчина, ананасы, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Вегетарианская",
      description:
        "Томаты, моцарелла, шампиньоны, болгарский перец, лук, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Четыре сыра",
      description: "Моцарелла, дорблю, пармезан, гауда, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Барбекю",
      description:
        "Томаты, моцарелла, куриное филе, лук, соус барбекю, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Мясная",
      description:
        "Томаты, моцарелла, ветчина, пепперони, бекон, колбаски, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Острая",
      description: "Томаты, моцарелла, пепперони, халапеньо, орегано",
      img: "/img/photo-food/pizza.png",
      gram: "300г",
      price: 650,
    },
    // ...добавьте еще 7 уникальных пицц...
  ],
  burger: [
    {
      name: "Чизбургер",
      description: "Говядина, сыр, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с курицей",
      description: "Куриное филе, салат, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Вегетарианский бургер",
      description: "Овощная котлета, салат, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с беконом",
      description: "Говядина, бекон, сыр, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Двойной бургер",
      description: "Две котлеты из говядины, сыр, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер BBQ",
      description: "Говядина, лук кольцами, сыр, BBQ соус, булочка",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с грибами",
      description: "Говядина, шампиньоны, сыр, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с яйцом",
      description: "Говядина, яйцо, сыр, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с авокадо",
      description: "Говядина, авокадо, сыр, булочка, соус",
      img: "/img/photo-food/burger.png",
      gram: "300г",
      price: 650,
    },
    // ...добавьте еще 7 уникальных бургеров...
  ],
  // Добавьте аналогично для soup, hot, fish, sushi, dessert, drink
  soup: [
    // Пример данных для супов
    {
      name: "Суп Том Ям",
      description: "Острый тайский суп с креветками и грибами",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Куриный суп",
      description: "Классический куриный суп с овощами и лапшой",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Грибной крем-суп",
      description: "Кремовый суп из шампиньонов с гренками",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Борщ",
      description: "Традиционный украинский борщ с говядиной и сметаной",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Суп Минестроне",
      description: "Итальянский овощной суп с пастой и фасолью",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Луковый суп",
      description: "Французский луковый суп с сырной корочкой",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Суп из тыквы",
      description: "Кремовый суп из тыквы с имбирем и сливками",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Суп из чечевицы",
      description: "Питательный суп из красной чечевицы с овощами и специями",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Мисо суп",
      description: "Японский суп с мисо пастой, тофу и водорослями",
      img: "/img/photo-food/soup.png",
      gram: "200г",
      price: 450,
    },

    // ...добавьте еще 7 уникальных супов...
  ],
  hot: [
    // Пример данных для горячих блюд
    {
      name: "Курица Терияки",
      description: "Куриное филе в соусе терияки с овощами",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Стейк из говядины",
      description: "Сочный стейк из говядины с картофельным пюре",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Паста Карбонара",
      description: "Паста с беконом, яйцом и сыром пармезан",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Лазанья",
      description: "Итальянская лазанья с мясным соусом и сыром",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Куриные крылышки",
      description: "Острые куриные крылышки с соусом барбекю",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Ризотто с грибами",
      description: "Кремовое ризотто с шампиньонами и пармезаном",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Свинина в кисло-сладком соусе",
      description: "Жареная свинина с ананасами в кисло-сладком соусе",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Овощное рагу",
      description: "Тушеные овощи с пряными травами и томатным соусом",
      img: "/img/photo-food/teriaki.webp",
      gram: "150г",
      price: 350,
    },
  ],
  fish: [
    // Пример данных для рыбных блюд
    {
      name: "Лосось на гриле",
      description: "Филе лосося, приготовленное на гриле с лимоном",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Треска в сливочном соусе",
      description: "Филе трески, запеченное в сливочном соусе с травами",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Сибас с овощами",
      description: "Запеченный сибас с овощным гарниром и лимонным соусом",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Креветки в чесночном соусе",
      description: "Обжаренные креветки в чесночном масле с зеленью",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Морской окунь с картофелем",
      description: "Филе морского окуня, запеченное с картофелем и травами",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Форель на пару",
      description: "Филе форели, приготовленное на пару с овощами",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Кальмары в кляре",
      description: "Жареные кальмары в хрустящем кляре с соусом тартар",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Мидии в белом вине",
      description: "Мидии, приготовленные в соусе из белого вина и чеснока",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
    {
      name: "Мидии в белом вине",
      description: "Мидии, приготовленные в соусе из белого вина и чеснока",
      img: "/img/photo-food/fish.webp",
      gram: "150г",
      price: 350,
    },
  ],
  sushi: [
    // Пример данных для суши
    {
      name: "Филадельфия",
      description: "Ролл с лососем, сливочным сыром и огурцом",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Калифорния",
      description: "Ролл с крабовым мясом, авокадо и огурцом",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Дракон",
      description: "Ролл с угрем, авокадо и огурцом, украшенный икрой",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Острый тунец",
      description: "Ролл с тунцом, острым соусом и огурцом",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Вегетарианский ролл",
      description: "Ролл с авокадо, огурцом, морковью и салатом",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Сяке маки",
      description: "Ролл с лососем и рисом, обернутый в нори",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Унаги маки",
      description: "Ролл с угрем и рисом, обернутый в нори",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Тэмпура ролл",
      description: "Ролл с креветками в кляре, авокадо и огурцом",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Футомаки",
      description: "Большой ролл с разнообразными начинками и овощами",
      img: "/img/photo-food/suhi.webp",
      gram: "150г",
      price: 450,
    },
  ],
  dessert: [
    // Пример данных для десертов
    {
      name: "Чизкейк",
      description: "Классический чизкейк с клубничным соусом",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Тирамису",
      description: "Итальянский десерт с маскарпоне и кофе",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Медовик",
      description: "Слоеный торт с медовыми коржами и сметанным кремом",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Шоколадный фондан",
      description: "Теплый шоколадный десерт с жидкой начинкой",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Панна котта",
      description: "Итальянский десерт из сливок с ягодным соусом",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Макароны",
      description: "Французские миндальные печенья с кремовой начинкой",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Яблочный штрудель",
      description: "Традиционный австрийский десерт с яблоками и корицей",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Мороженое ассорти",
      description: "Разнообразие вкусов мороженого с фруктами и сиропом",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
    {
      name: "Крем-брюле",
      description: "Французский десерт с карамелизированной корочкой",
      img: "/img/photo-food/desert.webp",
      gram: "150г",
      price: 450,
    },
  ],
  drink: [
    // Пример данных для напитков
    {
      name: "Кола",
      description: "Освежающий газированный напиток",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Лимонад",
      description: "Домашний лимонад с мятой и лимоном",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Мохито",
      description: "Освежающий коктейль с мятой и лаймом",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Капучино",
      description: "Ароматный кофе с молочной пенкой",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Зеленый чай",
      description: "Полезный и освежающий зеленый чай",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Черный чай",
      description: "Классический черный чай с лимоном или молоком",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Свежевыжатый сок",
      description: "Апельсиновый, яблочный или морковный сок",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Минеральная вода",
      description: "Газированная или негазированная минеральная вода",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
    {
      name: "Молочный коктейль",
      description: "Коктейль на основе молока с различными вкусами",
      img: "/img/photo-food/drink.png",
      gram: "400мл",
      price: 450,
    },
  ],
};

// Функция для получения корзины из localStorage (если нет — пустой массив)
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Функция для сохранения корзины в localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}