import { createStore } from "vuex";
// import admin from "./modules/admin";
import cart from "./modules/cart";
import products from "./modules/products";

//! lucram pe module

export default createStore({
  modules: {
    // admin,
    products,
    cart,
  },
});
