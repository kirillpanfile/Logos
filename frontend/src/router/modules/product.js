export default {
  name: "product",
  path: "/product/:id",
  component: () => import("@/views/Product.vue"),
  beforeEnter(to, from, next) {
    // console.log("beforeEnter", to, from, next);
    next();
  },
};
