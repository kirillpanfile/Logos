export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    incrementQty(state, id) {
      const item = state.items.find((item) => item.id === id);
      item.quantity++;
    },
    decrementQty(state, id) {
      const item = state.items.find((item) => item.id === id);
      if (item.quantity >= 0) item.quantity--;
      if (item.quantity === 0) state.items.splice(state.items.indexOf(item), 1);
    },
    removeItem(state, item) {
      const index = state.items.indexOf(item);
      state.items.splice(index, 1);
    },
  },
  actions: {
    addToCart({ commit, state }, item) {
      const cartItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (!cartItem) commit("addItem", item);
    },
    isItemInCart(state) {
      return function (item) {
        return state.items.find((cartItem) => cartItem.id === item.id);
      };
    },
  },
  getters: {
    cartQuantity(state) {
      return state.items.reduce(
        (quantity, item) => quantity + item.quantity,
        0
      );
    },
  },
};
