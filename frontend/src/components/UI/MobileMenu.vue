<template>
  <main>
    <div class="mobile-sidemenu" ref="sidemenu">
      <div class="mobile-sidemenu__content">
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <button class="mobile-sidemenu__close" @click="close">✖</button>
      </div>
      <div class="mobile-sidemenu__footer">LOGOS</div>
    </div>
    <div ref="overlay" @click="close" class="overlay"></div>
  </main>
</template>

<script>
export default {
  name: "MobileMenu",
  methods: {
    close() {
      this.$refs.sidemenu.classList.remove("sidemenu-open");
      this.$refs.overlay.classList.remove("overlay-open");
      this.$emit("close");
    },
    open() {
      this.$refs.sidemenu.classList.add("sidemenu-open");
      this.$refs.overlay.classList.add("overlay-open");
    },
  },
};
</script>

<style></style>
