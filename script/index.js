const modalFunc = () => {
  const modal = document.querySelector(".card-modal__overlay");
  const cardButtom = document.querySelector("#card-buttom");
  const closeButtom = document.querySelector(".card-modal__header--close");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cardButtom.addEventListener("click", (e) => {
    openModal();
  });

  closeButtom.addEventListener("click", (e) => {
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    const valiable = e.target;
    if (!valiable.classList.contains(".card-modal__overlay") || valiable.closest(".card-modal__header--close")) {
    } else {
      closeModal();
    }
  });
};

modalFunc();

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      reating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image1.jpg",
      ailimage: "RESTS",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      reating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image2.jpg",
      ailimage: "RESTS",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      reating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image3.jpg",
      ailimage: "RESTS",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      reating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image4.jpg",
      ailimage: "RESTS",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      reating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image5.jpg",
      ailimage: "RESTS",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      reating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image6.jpg",
      ailimage: "RESTS",
    },
  ];

  const randerResrs = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<a href="./goods.html?id=${card.id}" class="products-card">
            <div class="products-card__image">
              <img src="./images/rests/${card.image}" alt="image: ${card.ailimage}" />
            </div>
            <div class="products-card__description">
              <div class="products-card__description-row">
                <h4 class="products-card__description--title">${card.title}</h4>
                <div class="products-card__description-badge">${card.time} мин</div>
              </div>
              <div class="products-card__description-row">
                <div class="products-card__description-info">
                  <div class="products-card__description-info--raiting">
                    <img src="./images/icon/star.jpg" alt="image: STAR" />
                    ${card.reating}
                  </div>
                  <div class="products-card__description-info--price">От ${card.price} ₽</div>
                  <div class="products-card__description-info--group">${card.type}</div>
                </div>
              </div>
            </div>
        </a>`
      );
    });
  };

  const loading = () => {
    container.innerHTML = '<p style="width:100%; text-align: center">Загрузка...</p>';
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerResrs(restArray);
    }, 2000);
  }
};

restsFunc();

const goodsFunc = () => {
  const goodsContainer = document.querySelector("#goods-container");

  const goodArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      subtitle: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "image_1.jpg",
      ailimage: "GOODS",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      subtitle: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "image_2.jpg",
      ailimage: "GOODS",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      subtitle: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "image_3.jpg",
      ailimage: "GOODS",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      subtitle: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "image_4.jpg",
      ailimage: "GOODS",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      subtitle: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "image_5.jpg",
      ailimage: "GOODS",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      subtitle: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "image_6.jpg",
      ailimage: "GOODS",
    },
  ];

  const randerGood = (array) => {
    goodsContainer.innerHTML = "";
    array.forEach((card) => {
      goodsContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="products-card">
          <div class="products-card__image">
            <img src="./images/goods/${card.image}" alt="image: ${card.ailimage}" />
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">${card.title}</h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">${card.subtitle}</p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description--controls">
                <button class="btn btn-primary">
                  <img src="./images/icon/shopping-cart.png" alt="images: CART" />В корзину
                </button>
                <span class="products-card__description-controls--price">${card.price} ₽</span>
              </div>
            </div>
          </div>
        </div>`
      );
    });
  };

  const loading = () => {
    goodsContainer.innerHTML = '<p style="width:100%; text-align: center">Загрузка...</p>';
  };

  if (goodsContainer) {
    loading();

    setTimeout(() => {
      randerGood(goodArray);
    }, 2000);
  }
};

goodsFunc();
