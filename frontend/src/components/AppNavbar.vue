<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="icon-menu" @click="isBurgherMenuOpen = !isBurgherMenuOpen">
        <span></span>
        <div class="icon-menu-text">МЕНЮ</div>
      </div>
      <div class="burgher-menu" v-if="isBurgherMenuOpen" @click="isBurgherMenuOpen = false">132</div>
      <div class="header__logo">LOGOS</div>
      <div class="header__input">
        <img src="@/assets/images/Icons/Navbar/Location.svg" />
        <input type="text">
        <img src="@/assets/images/Icons/Navbar/Search.svg"/>
      </div>
      <div class="header__call call">
        <div class="call__icon" @click="isCallOpen = !isCallOpen">
          <img src="@/assets/images/Icons/Navbar/Calling.png" />
          <div class="call__modal" v-if="isCallOpen">
            <div class="call__modal-title">Позвоните нам!</div>
            <div class="call__modal-number">+7 (917) 510-57-59</div>
          </div>
        </div>
        
        <div class="call__desc">
          <div class="call__title">Контакты:</div>
          <div class="call__number">+7 (917) 510-57-59</div>
        </div>
      </div>
      <div class="header__button">
        <base-button
          type="nav"
          color="green"
          text="Корзина"
        ></base-button>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data(){
    return{
      isCallOpen: false,
      isBurgherMenuOpen: false
    }
  }
};
</script>