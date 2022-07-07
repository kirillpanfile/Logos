<template>
  <div class="card__wrapper">
  <!-- <div class="card__counter"></div>{{ cardCounter }}</div> -->
  <div class="card__image">
    <img :src="`http://localhost:5000/images/${image}`" alt="" />
  </div>
  <div class="card__info">
    <div class="card__hero">
      <h1>{{ title }}</h1>
      <small>Вес: {{ weight }}г</small>
    </div>
    <div class="card__description">
      {{ description }}
    </div>
    <div class="card__footer">
      <div class="card__price">{{ price }} ₽</div>
      <button >В корзину ц</button>
    </div>
    <!-- <div class="card__footer" v-else>
      <button >-</button>
      <div class="card__price">{{ price }} ₽</div>
      <button >+</button>
    </div> -->
  </div>
  </div>
</template>

<script>
// import { mapGetters, mapState } from "vuex";

export default {
  name: "ProductCard",
  props: {
    image: {
      type: String,
      default: '1657118418502jarenye-baklajany-s-chesnokom-i-maionezom_1540793620_10_max.jpg'
    },
    title: {
      type: String,
      default: "Product name"
    },
    weight: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },

  }
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
