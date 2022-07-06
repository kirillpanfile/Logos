<template>
  <div class="card__wrapper">
    <div class="card__image">
      <!-- <img src="" alt=""> -->
    </div>
    <div class="card__info">
      <div class="card__hero">
        <h1>Гусь</h1>
        <small>Вес: 225г</small>
      </div>
      <div class="card__description">
        Фаршированный гречневой кашей, 
        курагой, апельсином и зеленым яблоком.
      </div>
      <div class="card__footer">
        <div class="card__price">7 900 ₽</div>
        <button @click="checkState">В корзину ц</button>
      </div>
    </div>
  </div>
  {{allProducts}}
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ProductCard",
  computed:{
    ...mapState(['allProducts'])
  },
  methods:{
    checkState(){
      console.log(this.$store.state.allProducts)
    }
  },
  mounted(){
    this.$store.dispatch("getAllProducts")
  }
};
</script>

<style></style>
