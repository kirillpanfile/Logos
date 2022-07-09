<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="`http://localhost:5000/images/${image}`" />
    </div>
    <div class="cart-main">
      <div class="cart-item__info">
        <div class="cart-item__title">
          <h1>{{ title }}</h1>
        </div>
        <div class="cart-item__description">
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="cart-item__quantity">
        <div class="cart-item__quantity-inner">
          <button @click="decrement">
            <img src="../../assets/images/Icons/Product/minus.png" />
          </button>
          <span>{{ quantity }}</span>
          <button @click="increment">
            <img src="../../assets/images/Icons/Product/plus.png" />
          </button>
        </div>
      </div>
      <div class="cart-item__price">
        <span>{{ itemTotalPrice }}</span>
      </div>
      <div class="cart-item__remove">
        <button @click="remove">
          <img src="../../assets/images/Icons/Product/plus.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartItem",
  props: ["image", "title", "price", "quantity", "description", "id"],
  computed: {
    ...mapGetters({
      products: "products/popularProducts",
    }),
    itemTotalPrice() {
      return this.price * this.quantity;
    },
  },
  methods: {
    decrement() {
      this.$store.commit("cart/decrementQty", this.id);
    },
    increment() {
      this.$store.commit("cart/incrementQty", this.id);
    },
    remove() {
      this.$store.commit("cart/removeItem", this.id);
    },
  },
};
</script>

<style></style>
