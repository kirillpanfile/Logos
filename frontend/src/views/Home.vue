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
        <li
          v-for="(item, index) in categories"
          @click="active = item.name"
          :class="{ active: active === item.name }"
          :key="index"
        >
          {{ item.name }}
        </li>
        <li @click="active = 'ВСЕ'" :class="{ active: active === 'ВСЕ' }">
          ВСЕ
        </li>
      </ul>
    </div>
  </section>

  <section
    class="products"
    v-if="loaded"
    v-for="(category, index) in activeCategory"
    :key="index"
  >
    <div class="products__container">
      <div class="products__title">{{ category.name }}</div>
      <swiper
        :slides-per-view="4"
        :space-between="16"
        :loop="true"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <swiper-slide v-for="item in typeProducts(category.req)">
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

  <section class="map">
    <div class="map__container">
      <base-map></base-map>
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
      categories: [
        {
          name: "ХОЛОДНЫЕ ЗАКУСКИ",
          req: "Холод",
        },
        {
          name: "ГОРЯЧИЕ ЗАКУСКИ",
          req: "Горячие",
        },
        {
          name: "МЯСНЫЕ БЛЮДА",
          req: "Мясные",
        },
        {
          name: "НАПИТКИ",
          req: "Напитки",
        },
      ],
      active: "ВСЕ",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["typeProducts"]),
    activeCategory() {
      if (this.active.includes("ВСЕ")) return this.categories;
      return [this.categories.find((item) => item.name.includes(this.active))];
    },
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
