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

  mutations: {
    addProduct (state, productData) {
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      )

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        }

        state.cart.items.push(newItem);
      }

      state.cart.qty++
      state.cart.total += productData.price
    }
  },

  actions: {
    addProduct (context, payload) {
      context.commit('addProduct', payload)
    }
  },

  getters: {
    cartQuantity (state) {
      return state.cart.qty
    },

    cartTotal (state) {
      return state.cart.total.toFixed(2)
    },

    cartItems (state) {
      return state.cart.items
    }
  }
}

export default cartModule