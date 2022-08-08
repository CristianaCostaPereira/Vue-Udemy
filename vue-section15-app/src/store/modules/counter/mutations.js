export default {
  // Vuex garantees that this method will automatically get the current (latest) state as an argument whenever this method is triggered
  increment(state) {
    state.counter = state.counter + 2
  },

  increase (state, payload) {
    console.log(state)
    state.counter = state.counter + payload.value
  }
}