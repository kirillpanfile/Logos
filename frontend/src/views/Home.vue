<template>
  <div class="hero">
    <div class="hero__title">Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут</div>
    <div class="hero__subtitle">
      <div class="hero__subtitle-text">Ещё не пробовал?</div>
    </div>
  </div>
  <main v-if="loaded">
    <ProductCard
      v-for="item in typeProducts('Холод')"
      :key="item._id"
      :id="item._id"
      :image="item.image"
      :title="item.name"
      :weight="item.weight"
      :description="item.description"
      :price="item.price"
    ></ProductCard>
  </main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } =
  createNamespacedHelpers("products");
export default {
  name: "Home",
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    ...mapGetters(["typeProducts"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts().then(() => {
      this.loaded = true;
    });
  },
};
</script>

<style></style>
