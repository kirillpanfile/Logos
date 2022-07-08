<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__title">Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут</div>
      <div class="hero__subtitle">
        <div class="hero__subtitle-text">Ещё не пробовал?</div>
      </div>
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

  <select name="" id="">
    <option class="options__item">1</option>
    <option class="options__item">2</option>
  </select>

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
      <div class="contacts contacts__wrapper">
        <h1 class="contacts__title">КОНТАКТЫ</h1>
        <hr>
        <div class="contacts__info contacts-info">
          <div class="contacts-info__cell">
            <div class="contacts-info__image">
              <img src="../assets/images/Icons/Contacts/Location.svg" />
            </div>
            <div class="contacts-info__details">
              <small>Наш адрес:</small>
              <h1>МО, городской округ Красногорск, село Ильинкое, 
                Экспериментальная улица, 10</h1>
            </div>
          </div>
          <div class="contacts-info__cell">
            <div class="contacts-info__image">
              <img src="../assets/images/Icons/Contacts/Message.svg" />
            </div>
            <div class="contacts-info__details">
              <small>Наша почта:</small>
              <h1>LOGOSrestaurant@gmail.com</h1>
            </div>
          </div>
        </div>
        <hr>
        <div class="contacts__button">
          <base-button type="order" text="Забронировать стол" color="green"></base-button>
          <div>
            <div class="contacts__number">+7 (917) 510-57-59</div>
            <small>Звоните или оставляйте заявку</small>
          </div>
        </div>
        <div class="contacts__footer">
          <h2>Мы в соц сетях:</h2>
          <img src="../assets/images/Icons/Contacts/Social/facebook.svg" />
          <img src="../assets/images/Icons/Contacts/Social/vkontakte-logo.svg" />
          <img src="../assets/images/Icons/Contacts/Social/video-play-button.svg" />
          <img src="../assets/images/Icons/Contacts/Social/instagram.svg" />
        </div>
      </div>
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
