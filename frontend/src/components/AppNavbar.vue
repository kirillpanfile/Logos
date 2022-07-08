<template>
  <div class="header">
    <div class="header__container">
      <div class="mobile-menu" @click="openMenu">
        <div class="icon-menu" ref="menu">
          <span></span>
        </div>
        <h1 class="icon-menu-text">МЕНЮ</h1>
      </div>
      <h1 class="header__logo">LOGOS</h1>
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
          <p class="call__number">+7 (917) 510-57-59</p>
        </div>
      </div>
      <button class="header__button">
        <base-button type="nav" color="green" text="Корзина"></base-button>
      </button>
    </div>
    <MobileMenu ref="sidemenu" @close="closeMenu"></MobileMenu>
  </div>
</template>

<script>
import MobileMenu from "./UI/MobileMenu.vue";
export default {
  name: "AppNavbar",
  methods: {
    openMenu() {
      this.$refs.menu.classList.add("menu-open");
      this.$refs.sidemenu.open();
    },
    closeMenu() {
      this.$refs.menu.classList.remove("menu-open");
    },
  },
  components: { MobileMenu },
};
</script>
