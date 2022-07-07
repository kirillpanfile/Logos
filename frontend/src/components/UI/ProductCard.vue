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
        <button @click="buy">В корзину</button>
      </div>
      <!-- <div class="card__footer" v-else>
        <button>-</button>
        <div class="card__price">{{ price }} ₽</div>
        <button>+</button>
      </div> -->
    </div>
  </div>
  <div v-if="product">true</div>
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
  },
  computed: {
    ...mapState(["items"]),
    product() {
      if (this.items.length) {
        return this.items.find((item) => item.id === this.id);
      }
      return false;
    },
  },
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
