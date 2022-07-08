<template>
  <section class="hero">
    <div class="hero__title">Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут</div>
    <div class="hero__subtitle">
      <div class="hero__subtitle-text">Ещё не пробовал?</div>
      <span></span>
    </div>
  </section>

  <section class="menu">
    <div class="menu__container">
      <ul>
        <li class="active">Холодные закуски</li>
        <li>Горячие закуски</li>
        <li>Мясные блюда</li>
        <li>Напитки</li>
        <li>все</li>
      </ul>
    </div>
  </section>
  <section class="products" v-if="loaded">
    <div class="products__container">
      <div class="products__title">ХОЛОДНЫЕ ЗАКУСКИ</div>
      <swiper
        :slides-per-view="4"
        :space-between="16"
        :loop="true"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <swiper-slide v-for="item in typeProducts('Холод')">
          <ProductCard
            :key="item._id"
            :id="item._id"
            :image="item.image"
            :title="item.name"
            :weight="item.weight"
            :description="item.description"
            :price="item.price"
          ></ProductCard>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="products" v-if="loaded">
    <div class="products__container">
      <div class="products__title">ГОРЯЧИЕ ЗАКУСКИ</div>
      <swiper
        :slides-per-view="4"
        :space-between="16"
        :loop="true"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <swiper-slide v-for="item in typeProducts('Горячие')">
          <ProductCard
            :key="item._id"
            :id="item._id"
            :image="item.image"
            :title="item.name"
            :weight="item.weight"
            :description="item.description"
            :price="item.price"
          ></ProductCard>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="products" v-if="loaded">
    <div class="products__container">
      <div class="products__title">МЯСНЫЕ БЛЮДА</div>
      <swiper
        :slides-per-view="4"
        :space-between="16"
        :loop="true"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <swiper-slide v-for="item in typeProducts('Мясные')">
          <ProductCard
            :key="item._id"
            :id="item._id"
            :image="item.image"
            :title="item.name"
            :weight="item.weight"
            :description="item.description"
            :price="item.price"
          ></ProductCard>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="products" v-if="loaded">
    <div class="products__container">
      <div class="products__title">НАПИТКИ</div>
      <swiper
        :slides-per-view="4"
        :space-between="16"
        :loop="true"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <swiper-slide v-for="item in typeProducts('Напитки')">
          <ProductCard
            :key="item._id"
            :id="item._id"
            :image="item.image"
            :title="item.name"
            :weight="item.weight"
            :description="item.description"
            :price="item.price"
          ></ProductCard>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("products");
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  name: "Home",
  data() {
    return {
      loaded: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["typeProducts"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts().then(() => {
      this.loaded = true;
    });
  },
};
</script>

<style></style>
