<template>
  <div class="button base-button" :class="color + '-base'">
  <div class="button-nav-mobile__wrapper" v-if="type == 'nav'">
    <img src="@/assets/images/Icons/Product/cart.png" />
    <div class="button-nav-mobile__title">{{text}}</div>
  </div>
    <div :class="classType">
      <div class="button__card-title" v-if="type == 'card'">{{text}}</div>
      <div class="button__title" v-else-if="type != 'order' && type != 'counter'">{{text}}</div>
      <div class="button__title-borderless" v-else-if="type == 'order'">{{text}}</div>
      <img src="@/assets/images/Icons/Product/shopping-bag.png" v-if="type == 'prod'" />
      <img src="@/assets/images/Icons/Product/cart.png" v-else-if="type == 'card'" />
      <img src="@/assets/images/Icons/Product/minus.png" v-else-if="type == 'counter' && text == '-'" />
      <img src="@/assets/images/Icons/Product/plus.png" v-else-if="type == 'counter' && text == '+'" />
      <div class="button__image" v-else-if="type == 'nav'">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props:{
    type:{
      type: String,
      default: 'nav',
      validator(val){
        return ['nav','prod','card','order','counter'].includes(val)
      }
    },
    text:{
      type: String,
      default: 'Корзина'
    },
    color:{
      type: String,
      default: 'green',
      validator(val){
        return ['green', 'black'].includes(val)
      }
    }
  },
  computed: {
    classType(){
      let className = `button__wrapper-${this.type}`
      if(this.type == 'nav')
        return `${className} button-${this.type}-hide `

      return className
      }
  }
}
</script>