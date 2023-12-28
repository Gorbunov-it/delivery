<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="good in goodArray" :key="good.id">
          <div class="products-card__image">
            <img :src="getUrl(good.image)" alt="image: GOODS" />
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">{{ good.title }}</h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">{{ good.subtitle }}</p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description--controls">
                <button class="btn btn-primary">
                  <img src="../assets/images/icon/shopping-cart.png" alt="images: CART" />
                  В корзину
                </button>
                <span class="products-card__description-controls--price">{{ good.price }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodArray } from "../constants/goods";

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
};
</script>
