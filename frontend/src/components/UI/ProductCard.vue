<template>
  <!-- <div
    class="card__wrapper"
    v-if="loaded"
    @mouseleave="counterButtons = false"
    v-for="product in coldProducts"
    :key="product._id"
  > -->
  <div class="card__counter" v-if="cardCounter > 0">{{ cardCounter }}</div>
  <div class="card__image">
    <img :src="`http://localhost:5000/images/${product.image}`" alt="" />
  </div>
  <div class="card__info">
    <div class="card__hero">
      <h1>{{ product.name }}</h1>
      <small>Вес: {{ product.weight }}г</small>
    </div>
    <div class="card__description">
      {{ product.description }}
    </div>
    <div class="card__footer" v-if="counterButtons != true">
      <div class="card__price">{{ product.price }} ₽</div>
      <button @click="counterButtons = true">В корзину ц</button>
    </div>
    <div class="card__footer" v-else>
      <button @click="decrement">-</button>
      <div class="card__price">{{ product.price }} ₽</div>
      <button @click="increment">+</button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// import { mapGetters, mapState } from "vuex";

export default {
  name: "ProductCard",
  // data() {
  //   return {
  //     loaded: false,
  //   };
  // },
  // props: {
  //   counterButtons: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   cardCounter: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
  // methods: {
  //   check() {
  //     console.log(this.coldProducts);
  //   },
  //   increment() {
  //     this.cardCounter++;
  //   },
  //   decrement() {
  //     this.cardCounter--;
  //   },
  // },
  // computed: {
  //   ...mapState({ allProducts: (state) => state.products.allProducts }),
  //   ...mapGetters({ oneProduct: "oneProduct" }),
  //   ...mapGetters({ coldProducts: "coldProducts" }),
  // },
  // watch: {
  //   cardCounter() {
  //     this.cardCounter < 0 ? (this.cardCounter = 0) : "";
  //   },
  // },
  // mounted() {
  //   this.$store.dispatch("getAllProducts").then(() => (this.loaded = true));
  // },
};
</script>

<style></style>
