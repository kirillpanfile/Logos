<template>
  <main v-if="loaded">
    {{ typeProducts("Холодные закуски") }}
    <ProductCard v-for="(item, index) in items" :key="index"></ProductCard>
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
