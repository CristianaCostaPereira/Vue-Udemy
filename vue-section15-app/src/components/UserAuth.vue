<template>
  <button v-if="!userIsAuthentiticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>

  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['userIsAuthentiticated', 'testAuth'])
  },

  methods: {
    ...mapActions(['login', 'logout']),
  }
}
</script>