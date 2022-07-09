export default {
  data() {
    return {
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
    };
  },
};
