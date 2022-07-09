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
          :id="item.id"
        >
        </cart-item>
      </div>
    </div>
  </section>

  <section class="cart-recommendations">
    <div class="cart-recommendations__container">
      <div class="cart-recommendations__title">
        <h2>ДОБАВИТЬ К ЗАКАЗУ</h2>
      </div>
      <div class="cart-recommendations__inner">
        <cart-aditional-item
          v-for="(item, index) in products"
          :key="index"
          :image="item.image"
          :title="item.name"
          :price="item.price"
          :id="item.id"
        >
        </cart-aditional-item>
      </div>
    </div>
  </section>

  <div class="devider"></div>

  <section class="cart-total">
    <div class="cart-total__wrapper">
      <div class="cart-total__info">
        <div class="cart-total__title">
          <h2>ИТОГО:</h2>
          <span>{{ total }}₽</span>
        </div>
        <div class="cart-total__inner">
          <div class="cart-total__delivery">
            <span>До бесплатной доставки не хватет:</span>
            <i>{{ delivery }}₽</i>
          </div>
          <div class="cart-total__total">
            <span>Итого</span>
            <span>{{ total + delivery }}₽</span>
          </div>
        </div>
      </div>
      <div class="cart-total__button">
        <router-link to="/order">
          <base-button type="order" text="Оформить заказ"></base-button>
        </router-link>
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
    total() {
      return this.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    delivery() {
      return this.total > 600 ? 0 : 600 - this.total;
    },
  },
  mounted() {
    if (this.products.length === 0) {
      this.$store.dispatch("products/getProducts");
    }
  },
};
</script>

<style></style>
