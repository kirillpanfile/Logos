<template>
  <div class="card-aditional">
    <div class="card-aditional__image">
      <img :src="`http://localhost:5000/images/${item.image}`" />
    </div>
    <div class="card-aditional__info">
      <div class="card-aditional__title">
        <h1>{{ item.name }}</h1>
      </div>
      <div class="card-aditional__add" @click="addToCart">
        <span>Добавить</span>
        <button>
          <img src="../../assets/images/Icons/Product/plus.png" />
        </button>
      </div>
      <div class="card-aditional__price">
        <span>{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartAditionalItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      const { _id, image, price, description, name, weight } = this.item;
      this.$store.dispatch("cart/addToCart", {
        id: _id,
        image: image,
        price: price,
        description,
        title: name,
        weight,
        quantity: 1,
      });
    },
  },
};
</script>

<style></style>
