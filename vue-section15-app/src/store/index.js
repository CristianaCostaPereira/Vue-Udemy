import { createStore } from 'vuex'

import counterModule from './modules/counter/index'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

const store = createStore({
  modules: {
    // namespaced of the counterModules
    numbers: counterModule
  },

  state() {
    return {
      userIsAuthentiticated: false
    }
  },

  mutations: rootMutations,

  actions: rootActions,

  getters: rootGetters
})

export default store