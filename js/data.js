const products = {
  pizza: [
    {
      name: "Римская",
      description: "Томаты, моцарелла, ветчина, шампиньоны, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    // ...другие товары...

    {
      name: "Маргарита",
      description: "Томаты, моцарелла, базилик, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Пепперони",
      description: "Томаты, моцарелла, пепперони, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Гавайская",
      description: "Томаты, моцарелла, ветчина, ананасы, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Вегетарианская",
      description:
        "Томаты, моцарелла, шампиньоны, болгарский перец, лук, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Четыре сыра",
      description: "Моцарелла, дорблю, пармезан, гауда, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Барбекю",
      description:
        "Томаты, моцарелла, куриное филе, лук, соус барбекю, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Мясная",
      description:
        "Томаты, моцарелла, ветчина, пепперони, бекон, колбаски, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Острая",
      description: "Томаты, моцарелла, пепперони, халапеньо, орегано",
      img: "./piz.png",
      gram: "300г",
      price: 650,
    },
    // ...добавьте еще 7 уникальных пицц...
  ],
  burger: [
    {
      name: "Чизбургер",
      description: "Говядина, сыр, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с курицей",
      description: "Куриное филе, салат, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Вегетарианский бургер",
      description: "Овощная котлета, салат, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с беконом",
      description: "Говядина, бекон, сыр, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Двойной бургер",
      description: "Две котлеты из говядины, сыр, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер BBQ",
      description: "Говядина, лук кольцами, сыр, BBQ соус, булочка",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с грибами",
      description: "Говядина, шампиньоны, сыр, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с яйцом",
      description: "Говядина, яйцо, сыр, булочка, соус",
      img: "./burg.png",
      gram: "300г",
      price: 650,
    },
    {
      name: "Бургер с авокадо",
      description: "Говядина, авокадо, сыр, булочка, соус",
      img: "./burg.png",
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
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3n9byxhehz9tnw0qd3ve614%2F1756282387_img_0.webp?st=2025-08-27T06%3A33%3A04Z&se=2025-09-02T07%3A33%3A04Z&sks=b&skt=2025-08-27T06%3A33%3A04Z&ske=2025-09-02T07%3A33%3A04Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=B0khwUCuoUkTGOrm9FZHmeSdQqY2zCHKK%2FJyl4FxHRk%3D&az=oaivgprodscus",
      gram: "200г",
      price: 450,
    },
    {
      name: "Куриный суп",
      description: "Классический куриный суп с овощами и лапшой",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Грибной крем-суп",
      description: "Кремовый суп из шампиньонов с гренками",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Борщ",
      description: "Традиционный украинский борщ с говядиной и сметаной",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Суп Минестроне",
      description: "Итальянский овощной суп с пастой и фасолью",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Луковый суп",
      description: "Французский луковый суп с сырной корочкой",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Суп из тыквы",
      description: "Кремовый суп из тыквы с имбирем и сливками",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Суп из чечевицы",
      description: "Питательный суп из красной чечевицы с овощами и специями",
      img: "./burg.png",
      gram: "200г",
      price: 450,
    },
    {
      name: "Мисо суп",
      description: "Японский суп с мисо пастой, тофу и водорослями",
      img: "./burg.png",
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
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3n9cybefrmaxz0k9rex4tgp%2F1756282421_img_0.webp?st=2025-08-27T06%3A33%3A08Z&se=2025-09-02T07%3A33%3A08Z&sks=b&skt=2025-08-27T06%3A33%3A08Z&ske=2025-09-02T07%3A33%3A08Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=RQk8LaBH0Q1k69NXJbkRlzIsfUfVyM3HqAhbIctz1SA%3D&az=oaivgprodscus",
      gram: "150г",
      price: 350,
    },
    {
      name: "Стейк из говядины",
      description: "Сочный стейк из говядины с картофельным пюре",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Паста Карбонара",
      description: "Паста с беконом, яйцом и сыром пармезан",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Лазанья",
      description: "Итальянская лазанья с мясным соусом и сыром",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Куриные крылышки",
      description: "Острые куриные крылышки с соусом барбекю",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Ризотто с грибами",
      description: "Кремовое ризотто с шампиньонами и пармезаном",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Свинина в кисло-сладком соусе",
      description: "Жареная свинина с ананасами в кисло-сладком соусе",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Овощное рагу",
      description: "Тушеные овощи с пряными травами и томатным соусом",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
  ],
  fish: [
    // Пример данных для рыбных блюд
    {
      name: "Лосось на гриле",
      description: "Филе лосося, приготовленное на гриле с лимоном",
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3n9fmkmfmz8ps5w19zrnb49%2F1756282560_img_0.webp?st=2025-08-27T06%3A53%3A58Z&se=2025-09-02T07%3A53%3A58Z&sks=b&skt=2025-08-27T06%3A53%3A58Z&ske=2025-09-02T07%3A53%3A58Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=N7Oo20h9LVMdNUaKy58bYZh%2BF4nplA%2F6DvWk7HcRiNA%3D&az=oaivgprodscus",
      gram: "150г",
      price: 350,
    },
    {
      name: "Треска в сливочном соусе",
      description: "Филе трески, запеченное в сливочном соусе с травами",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Сибас с овощами",
      description: "Запеченный сибас с овощным гарниром и лимонным соусом",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Креветки в чесночном соусе",
      description: "Обжаренные креветки в чесночном масле с зеленью",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Морской окунь с картофелем",
      description: "Филе морского окуня, запеченное с картофелем и травами",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Форель на пару",
      description: "Филе форели, приготовленное на пару с овощами",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Кальмары в кляре",
      description: "Жареные кальмары в хрустящем кляре с соусом тартар",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Мидии в белом вине",
      description: "Мидии, приготовленные в соусе из белого вина и чеснока",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
    {
      name: "Мидии в белом вине",
      description: "Мидии, приготовленные в соусе из белого вина и чеснока",
      img: "./burg.png",
      gram: "150г",
      price: 350,
    },
  ],
  sushi: [
    // Пример данных для суши
    {
      name: "Филадельфия",
      description: "Ролл с лососем, сливочным сыром и огурцом",
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3n9hxphftk9dmsg25h7g1za%2F1756282633_img_0.webp?st=2025-08-27T06%3A52%3A02Z&se=2025-09-02T07%3A52%3A02Z&sks=b&skt=2025-08-27T06%3A52%3A02Z&ske=2025-09-02T07%3A52%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=kApHvCaDeI5T4kTMC94k4%2B%2BVQz4t6sNuTYBjpw2l%2Baw%3D&az=oaivgprodscus",
      gram: "150г",
      price: 450,
    },
    {
      name: "Калифорния",
      description: "Ролл с крабовым мясом, авокадо и огурцом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Дракон",
      description: "Ролл с угрем, авокадо и огурцом, украшенный икрой",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Острый тунец",
      description: "Ролл с тунцом, острым соусом и огурцом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Вегетарианский ролл",
      description: "Ролл с авокадо, огурцом, морковью и салатом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Сяке маки",
      description: "Ролл с лососем и рисом, обернутый в нори",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Унаги маки",
      description: "Ролл с угрем и рисом, обернутый в нори",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Тэмпура ролл",
      description: "Ролл с креветками в кляре, авокадо и огурцом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Футомаки",
      description: "Большой ролл с разнообразными начинками и овощами",
        img: "./burg.png",
        gram: "150г",
        price: 450,
    },
  ],
  dessert: [
    // Пример данных для десертов
    {
      name: "Чизкейк",
      description: "Классический чизкейк с клубничным соусом",
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3n9jm8rf29sjcgtqvbyq0kx%2F1756282659_img_0.webp?st=2025-08-27T06%3A35%3A37Z&se=2025-09-02T07%3A35%3A37Z&sks=b&skt=2025-08-27T06%3A35%3A37Z&ske=2025-09-02T07%3A35%3A37Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Xw9a5st4emPfvWgVJEkD2AbM3QEX0HtWdC1WYqlHpug%3D&az=oaivgprodscus",
      gram: "150г",
      price: 450,
    },
    {
      name: "Тирамису",
      description: "Итальянский десерт с маскарпоне и кофе",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Медовик",
      description: "Слоеный торт с медовыми коржами и сметанным кремом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Шоколадный фондан",
      description: "Теплый шоколадный десерт с жидкой начинкой",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Панна котта",
      description: "Итальянский десерт из сливок с ягодным соусом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Макароны",
      description: "Французские миндальные печенья с кремовой начинкой",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Яблочный штрудель",
      description: "Традиционный австрийский десерт с яблоками и корицей",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Мороженое ассорти",
      description: "Разнообразие вкусов мороженого с фруктами и сиропом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Крем-брюле",
      description: "Французский десерт с карамелизированной корочкой",
        img: "./burg.png",
        gram: "150г",
        price: 450,
    },
  ],
  drink: [
    // Пример данных для напитков
    {
      name: "Кола",
      description: "Освежающий газированный напиток",
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3n9mpp3f8stgxgtyx2r6se0%2F1756282673_img_0.webp?st=2025-08-27T06%3A33%3A04Z&se=2025-09-02T07%3A33%3A04Z&sks=b&skt=2025-08-27T06%3A33%3A04Z&ske=2025-09-02T07%3A33%3A04Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jT%2FKRcbGSuNMOn2EzkbcqnPIxUsrKpW5zhcyca1nN5E%3D&az=oaivgprodscus",
      gram: "150г",
      price: 450,
    },
    {
      name: "Лимонад",
      description: "Домашний лимонад с мятой и лимоном",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Мохито",
      description: "Освежающий коктейль с мятой и лаймом",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Капучино",
      description: "Ароматный кофе с молочной пенкой",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Зеленый чай",
      description: "Полезный и освежающий зеленый чай",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Черный чай",
      description: "Классический черный чай с лимоном или молоком",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Свежевыжатый сок",
      description: "Апельсиновый, яблочный или морковный сок",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Минеральная вода",
      description: "Газированная или негазированная минеральная вода",
      img: "./burg.png",
      gram: "150г",
      price: 450,
    },
    {
      name: "Молочный коктейль",
      description: "Коктейль на основе молока с различными вкусами",
        img: "./burg.png",
        gram: "150г",
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