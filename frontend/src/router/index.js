import { createRouter, createWebHashHistory } from "vue-router";
import home from "./modules/home";
import delivery from "./modules/delivery";
import cart from "./modules/cart";
import product from "./modules/product";
import admin from "./modules/admin";
const routes = [home, delivery, cart, product, admin];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
