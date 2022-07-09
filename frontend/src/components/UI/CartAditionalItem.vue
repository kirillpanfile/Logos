<template>
  <div class="card-aditional">
    <div class="card-aditional__image">
      <img :src="`http://localhost:5000/images/${image}`" />
    </div>
    <div class="card-aditional__info">
      <div class="card-aditional__title">
        <h1>{{ title }}</h1>
      </div>
      <div class="card-aditional__add">
        <span>Добавить</span>
        <button>
          <img src="../../assets/images/Icons/Product/plus.png" />
        </button>
      </div>
      <div class="card-aditional__price">
        <span>{{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartAditionalItem",
  props: ["image", "title", "price", "id"],
};
</script>

<style></style>
