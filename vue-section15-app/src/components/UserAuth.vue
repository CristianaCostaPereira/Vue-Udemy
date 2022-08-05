<template>
  <button v-if="!userIsAuthentiticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['userIsAuthentiticated'])
  },

  methods: {
    ...mapActions(['login', 'logout']),
  }
}
</script>