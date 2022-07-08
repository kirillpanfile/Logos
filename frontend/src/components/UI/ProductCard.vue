<template>
  <div class="card__wrapper">
    <span class="card__counter" v-if="quantity">{{ quantity }}</span>
    <div class="card__image">
      <img :src="`http://localhost:5000/images/${image}`" alt="" />
    </div>
    <div class="card__info">
      <div class="card__hero">
        <h1>{{ title }}</h1>
        <small>Вес: {{ weight }}г</small>
      </div>
      <p class="card__description">
        {{ description }}
      </p>
      <div class="card__footer" v-if="!quantity">
        <div class="card__price">{{ totalPrice }} ₽</div>
        <button @click="buy">В корзину</button>
      </div>
      <div class="card__footer" v-if="quantity">
        <button @click="decrementQty">-</button>
        <div class="card__price">{{ totalPrice }} ₽</div>
        <button @click="incrementQty">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("cart");
export default {
  name: "ProductCard",
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Product name",
    },
    weight: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    buy() {
      this.addToCart({ ...this.$props, quantity: 1 });
    },
    incrementQty() {
      this.$store.commit("cart/incrementQty", this.id);
    },
    decrementQty() {
      this.$store.commit("cart/decrementQty", this.id);
    },
  },
  computed: {
    ...mapState(["items"]),
    quantity() {
      return this.items.length > 0
        ? this.items.find((item) => item.id == this.id)?.quantity
        : false;
    },
    totalPrice() {
      if (!this.quantity) return this.price;
      return this.price * this.quantity;
    },
  },
};
</script>

<style></style>
