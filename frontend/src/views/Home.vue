<template>
  <main v-if="loaded">
    <ProductCard
      v-for="item in typeProducts('Холод')"
      :key="item._id"
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
    ...mapState(["products"]),
    ...mapGetters(["typeProducts"]),
  },
  mounted() {
    this.getProducts().then(() => {
      this.loaded = true;
    });
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style></style>
