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
    },

    removeProduct (state, prodId) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      )

      const prodData = state.cart.items[productInCartIndex]

      state.cart.items.splice(productInCartIndex, 1)
      state.cart.qty -= prodData.qty
      state.cart.total -= prodData.price * prodData.qty
    }
  },

  actions: {
    addProduct (context, payload) {
      context.commit('addProduct', payload)
    },

    removeProduct (context, payload) {
      context.commit('removeProduct', payload)
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