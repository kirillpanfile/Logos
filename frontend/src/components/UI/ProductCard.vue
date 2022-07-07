<template>
  <div class="card__wrapper">
    <div class="card__image">
      <img :src="allProducts.image" alt="">
    </div>
    <div class="card__info">
      <div class="card__hero">
        <h1>{{allProducts.name}}</h1>
        <small>Вес: {{allProducts.weight}}г</small>
      </div>
      <div class="card__description">
        {{allProducts.description}}
      </div>
      <div class="card__footer">
        <div class="card__price">{{allProducts.price}} ₽</div>
        <button>В корзину ц</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProductCard",
  computed:{
    ...mapState(['allProducts'])
  },
  mounted(){
    this.$store.dispatch("getAllProducts")
  }
};
</script>

<style></style>
