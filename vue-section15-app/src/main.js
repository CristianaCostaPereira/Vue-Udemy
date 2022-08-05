import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// It is an onject, NOT a store
// But now it is an object with the same features as the object we pass to create store
const counterModule = {
  state () {
    return {
      counter: 0
    }
  },

  mutations: {
    // Vuex garantees that this method will automatically get the current (latest) state as an argument whenever this method is triggered
    increment(state) {
      state.counter = state.counter + 2
    },

    increase (state, payload) {
      state.counter = state.counter + payload.value
    }
  },

  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    },

    increase (context, payload) {
      console.log(context)
      context.commit('increase', payload)
    }
  },

  getters: {
    // All getter methods in Vuex, gets TWO arguments: state and getters
    finalCounter (state) {
      return state.counter * 3
    },

    normalizedCounter (_, getters) {
      const finalCounter = getters.finalCounter
      if (finalCounter < 0) {
        return 0
      }

      if (finalCounter > 100) {
        return 100
      }
      return finalCounter
    },
  }
}

const store = createStore({
  modules: {
    numbers: counterModule
  },

  state() {
    return {
      userIsAuthentiticated: false
    }
  },

  mutations: {
    login (state) {
      state.userIsAuthentiticated = true
    },

    logout (state) {
      state.userIsAuthentiticated = false
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
    userIsAuthentiticated (state) {
      return state.userIsAuthentiticated
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');