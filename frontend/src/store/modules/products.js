export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const request = await fetch("http://localhost:5000/api/product/");
        commit("setProducts", await request.json());
      } catch (error) {
        console.error("Error: ", error);
      }
    },
  },
  getters: {
    typeProducts(state) {
      return function (type) {
        return state.products.filter((product) => {
          return product.category.includes(type);
        });
      };
    },
  },
};
