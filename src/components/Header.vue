<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo">
          <img src="../assets/images/logo.png" alt="images: LOGO" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="../assets/images/icon/user.png" alt="images: USER" />
            Войти
          </button>
          <button class="btn btn-outline" id="card-buttom" @click="isOpenModal()">
            <img src="../assets/images/icon/shopping-cart_.png" alt="images: USER" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["toggleModal"]);
const isOpenModal = () => emit("toggleModal");
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>
