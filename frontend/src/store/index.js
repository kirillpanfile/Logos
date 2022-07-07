import { createStore } from "vuex";
import * as admin from "./modules/admin";
import * as cart from "./modules/cart";
import * as products from "./modules/products";

//! lucram pe module
export default createStore({
  state:{
    allProducts: []
  },
  mutations:{
    insertAllProducts(state, payload){
      state.allProducts = payload
    }

  },
  actions:{
    async getAllProducts({commit}) {
      try{
        let response = await fetch(
          "http://localhost:5000/api/product/"
          ).then(response => response.json())
          commit("insertAllProducts", response[0])
      }catch(e){
        console.log("Error: ",e)
      }
    }
  },
  modules: {
    admin,
    products,
    cart,
  },
});
