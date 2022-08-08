const cartModule = {
  namespaced: true,

  state () {
    return {
      cart: {
        items: [],
        total: 0,
        qty: 0
      }
    }
  },

  mutations: {},

  actions: {},

  getters: {
    cartQuantity (state) {
      return state.cart.qty
    }
  }
}

export default cartModule