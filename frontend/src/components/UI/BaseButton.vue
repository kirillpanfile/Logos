<template>
  <div class="button base-button" :class="buttonColor">
    <div class="button-nav-mobile__wrapper" v-if="type == 'nav'">
      <img src="@/assets/images/Icons/Product/cart.png" />
      <div class="button-nav-mobile__title">{{ text }}</div>
    </div>
    <div :class="classType">
      <div class="button__card-title" v-if="type == 'card'">{{ text }}</div>
      <div class="button__title" v-if="type != 'counter' && type != 'order'">
        {{ text }}
      </div>
      <div class="button__title-borderless" v-else-if="type == 'order'">
        {{ text }}
      </div>
      <img
        v-if="currentImage"
        :src="require(`../../assets/images/Icons/Product/${currentImage}`)"
        alt=""
      />
      <div class="button__image" v-if="type == 'nav'">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      images: ["shopping-bag.png", "cart.png", "minus.png", "plus.png"],
    };
  },
  props: {
    type: {
      type: String,
      default: "nav",
      validator(val) {
        return ["nav", "prod", "card", "order", "counter"].includes(val);
      },
    },
    text: {
      type: String,
      default: "Корзина",
    },
    color: {
      type: String,
      default: "green",
      validator(val) {
        return ["green", "black"].includes(val);
      },
    },
  },
  computed: {
    classType() {
      return this.type == "nav"
        ? `button__wrapper-${this.type} button-${this.type}-hide `
        : `button__wrapper-${this.type}`;
    },
    buttonColor() {
      return this.color == "green" ? "green-base" : "black-base";
    },
    currentImage() {
      if (this.type == "prod") return this.images[0];
      if (this.type == "card") return this.images[1];
      if (this.type == "counter" && this.text == "+") return this.images[3];
      if (this.type == "counter" && this.text == "-") return this.images[2];
    },
  },
};
</script>
