<template>
  <section class="cart-header">
    <div class="cart-header__breadcrumb">
      <router-link to="/"> &#8249; к выбору блюда </router-link>
    </div>
    <div class="cart-header__title">
      <h1>КОРЗИНА</h1>
      <span>(в корзине {{ quantity }} товара)</span>
    </div>
  </section>

  <section class="cart-body">
    <div class="cart-body__container">
      <div class="cart-body__inner">
        <cart-item
          v-for="(item, index) in cart"
          :key="index"
          :image="item.image"
          :title="item.title"
          :price="item.price"
          :quantity="item.quantity"
          :description="item.description"
        >
        </cart-item>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "products/popularProducts",
      quantity: "cart/cartQuantity",
    }),
    ...mapState({
      cart: (state) => state.cart.items,
    }),
  },
  mounted() {
    if (this.products.length === 0) {
      this.$store.dispatch("products/getProducts");
    }
  },
};
</script>

<style></style>
