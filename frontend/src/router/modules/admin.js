export default {
  name: "admin",
  path: "/admin",
  component: () => import("@/views/Admin.vue"),
  beforeEnter(to, from, next) {
    // console.log("beforeEnter", to, from, next);
    next();
  },
};
