import counterMutations from './mutations'
import counterActions from './actions'
import counterGetters from './getters'

// It is an onject, NOT a store
// But now it is an object with the same features as the object we pass to create store
const counterModule = {
  namespaced: true,

  state () {
    return {
      counter: 0
    }
  },

  mutations: counterMutations,

  actions: counterActions,

  getters: counterGetters
}

export default counterModule