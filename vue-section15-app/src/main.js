import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    // Vuex garantees that this method will automatically get the current (latest) state as an argument whenever this method is triggered
    increment(state) {
      state.counter = state.counter + 2
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
