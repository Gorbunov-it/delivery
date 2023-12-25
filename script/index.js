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
