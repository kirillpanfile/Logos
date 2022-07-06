<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="icon-menu" @click="isBurgherMenuOpen = !isBurgherMenuOpen">
        <span></span>
        <div class="icon-menu-text">МЕНЮ</div>
      </div>
      <div
        class="burgher-menu"
        v-if="isBurgherMenuOpen"
        @click="isBurgherMenuOpen = false"
      >
        <!--todo Bungher menu-->
      </div>
      <div class="header__logo">LOGOS</div>
      <div class="header__input">
        <img src="@/assets/images/Icons/Navbar/Location.svg" />
        <input type="text" />
        <img src="@/assets/images/Icons/Navbar/Search.svg" />
      </div>
      <div class="header__call call">
        <a class="call__icon" href="tel:+7 (917) 510-57-59">
          <img src="@/assets/images/Icons/Navbar/Calling.png" />
        </a>

        <div class="call__desc">
          <h1 class="call__title">Контакты:</h1>
          <div class="call__number">+7 (917) 510-57-59</div>
        </div>
      </div>
      <button class="header__button">
        <base-button type="nav" color="green" text="Hello"></base-button>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isCallOpen: false,
      isBurgherMenuOpen: false,
    };
  },
};
</script>
