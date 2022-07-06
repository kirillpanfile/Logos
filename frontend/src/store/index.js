import { createStore } from "vuex";
import * as admin from "./modules/admin";
import * as cart from "./modules/cart";
import * as products from "./modules/products";

//! lucram pe module
export default createStore({
  modules: {
    admin,
    products,
    cart,
  },
});
