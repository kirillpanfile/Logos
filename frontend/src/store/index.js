import { createStore } from "vuex";
import * as admin from "./modules/admin";
import * as cart from "./modules/cart";
import * as products from "./modules/products";

//! lucram pe module
export default createStore({
  state: {
    allProducts: {}
  },
  actions: {
    async getAllProducts({commit}) {
      try{
        const response = await fetch("http://localhost:5000/api/product/")
        console.log(await response.json())
        let getResponse = await response.json()
        commit("insertAllProducts", getResponse)
      }catch(e){
        console.log("Error: ",e)
      }

  }
  },
  mutations: {
    insertAllProducts(state, payload){
      state.allProducts = payload
    }
  },
  modules: {
    admin,
    products,
    cart,
  },
});
