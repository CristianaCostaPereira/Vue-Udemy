import { createStore } from 'vuex'

import cartModule from './modules/cart'
import productsModule from './modules/products'

const store = createStore ({
  modules: {
    cartModule: cartModule,
    productsModule: productsModule
  },

  state() {
    return {
      isLoggedIn: false
    }
  },

  mutations: {
    login (state) {
      state.isLoggedIn = true
    },

    logout (state) {
      state.isLoggedIn = false
    }
  },

  actions: {
    login (context) {
      context.commit('login')
    },

    logout (context) {
      context.commit('logout')
    }
  },

  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  }
})

export default store