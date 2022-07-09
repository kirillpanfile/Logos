<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__title">Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут</div>
      <div class="hero__subtitle">
        <div class="hero__subtitle-text">Ещё не пробовал?</div>
        <span></span>
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

  <section class="about">
    <div class="about__wrapper">
      <div class="about__info about-info">
        <h1 class="about-info__title">НАШЕ КАФЕ</h1>
        <div class="about-info__text">
          Мы расположены в одном из самых живописных мест города — на берегу
          реки, это ваш оазис в черте города, куда можно сбежать от шумного и
          пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано
          до мелочей: проект построен из дикого закарпатского сруба, камин в
          основном зале ресторана и панорамные окна с видом на реку, уютные
          беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на
          200 человек, сказочный детский домик и бассейн.
        </div>
        <base-button
          type="order"
          text="Посмотреть меню"
          color="black"
        ></base-button>
      </div>
      <div class="about__buttons">
        <div class="about__button about-button">
          <img
            class="about-button__image"
            src="@/assets/images/Icons/About/onion.svg"
          />
          <div class="about-button__text">Свежайшие продукты</div>
        </div>
        <div class="about__button about-button">
          <img
            class="about-button__image"
            src="@/assets/images/Icons/About/flash.svg"
          />
          <div class="about-button__text">Быстрая доставка</div>
        </div>
        <div class="about__button about-button">
          <img
            class="about-button__image"
            src="@/assets/images/Icons/About/chef-hat.svg"
          />
          <div class="about-button__text">Лучшие повора</div>
        </div>
        <div class="about__button about-button">
          <img
            class="about-button__image"
            src="@/assets/images/Icons/About/onion.svg"
          />
          <div class="about-button__text">Свежайшие продукты</div>
        </div>
      </div>
    </div>
  </section>

  <section class="map">
    <div class="map__container">
      <div class="map__card">
        <h1 class="map__card-title">КОНТАКТЫ</h1>
        <div class="map__separator"></div>
        <div class="map__info">
          <div>
            <img src="../assets/images/Icons/map/Iconly/Light/Location.png" />
            <span>Наш адрес:</span>
          </div>
          <p>
            МО, городской округ Красногорск, село Ильинкое, Экспериментальная
            улица, 10
          </p>
          <div>
            <img src="../assets/images/Icons/map/Iconly/Light/Message.png" />
            <span>Наша почта:</span>
          </div>
          <p>auto.wash@gmail.com</p>
        </div>

        <div class="map__separator"></div>
        <div class="map__contacts">
          <base-button type="order" text="ЗАБРОНИРОВАТЬ СТОЛ"></base-button>
          <div class="map-phone">
            <h1>+7 (917) 510-57-59</h1>
            <p>Звоните или оставляйте заявку</p>
          </div>
        </div>
        <div class="map__footer">
          <span>Мы в соц сетях:</span>
          <div class="map__icons">
            <img src="../assets/images/Icons/Contacts/Social/facebook.png" />
            <img
              src="../assets/images/Icons/Contacts/Social/vkontakte-logo.png"
            />
            <img
              src="../assets/images/Icons/Contacts/Social/video-play-button.png"
            />
            <img src="../assets/images/Icons/Contacts/Social/instagram.png" />
          </div>
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
