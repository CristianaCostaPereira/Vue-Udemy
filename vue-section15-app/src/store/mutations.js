export default {
  login (state) {
    state.userIsAuthentiticated = true
  },

  logout (state) {
    state.userIsAuthentiticated = false
  }
}