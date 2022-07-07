export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    incrementItemQuantity(state, item) {
      item.quantity++;
    },
    decrementItemQuantity(state, item) {
      item.quantity--;
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
      else commit("incrementItemQuantity", cartItem);
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
