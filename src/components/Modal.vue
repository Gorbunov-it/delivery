<template>
  <div class="card-modal__overlay" :class="{ open: isOpen }" @click.self="isCloseModal()">
    <div class="card-modal">
      <div class="card-modal__header">
        <h2 class="card-modal__header--title">Корзина</h2>
        <span class="card-modal__header--close" @click="isCloseModal()">
          <img src="../assets/images/icon/close.svg" alt="image: CLOSE" />
        </span>
      </div>
      <div class="card-modal__body">
        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>
          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>
          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>
          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>
          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
      </div>
      <div class="card-modal__footer">
        <div class="card-modal__footer--price">1250 ₽</div>
        <div class="card-modal__footer--controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const isCloseModal = () => emit("toggleModal");
</script>

<style scoped>
.card-modal__overlay {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}

.card-modal__overlay.open {
  display: flex;
}

.card-modal {
  width: 100%;
  max-width: 780px;
  border-radius: 5px;
  background: #fff;
  padding: 40px 45px;
}

.card-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.card-modal__header--title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
}

.card-modal__header--close {
  cursor: pointer;
}

.card-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
}

.card-modal__footer--price {
  border-radius: 5px;
  background: #262626;
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 20px;
}

.card-modal__footer--controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.card-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}

.card-item__title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.card-item__controls {
  display: flex;
  align-items: center;
}

.card-item__controls--price {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-right: 50px;
}

.card-item__controls--count {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 15px;
}

.card-item__controls button {
  padding: 5px 16px;
  border-radius: 2px;
  border: 1px solid #40a9ff;
  background: #fff;
  color: #40a9ff;
}
</style>
