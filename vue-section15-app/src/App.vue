<template>
  <base-container
    title="Vuex"
    v-if="userIsAuthentiticated">

    <the-counter></the-counter>

    <favorite-value></favorite-value>

    <button @click="addOne">Add 10</button>

    <change-counter></change-counter>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },

  computed: {
    ...mapGetters(['userIsAuthentiticated'])
  },

  methods: {
    addOne () {
      // this.$store.dispatch('increase', { value: 10 })
      // Alternative to the code line above
      // Needs to have a 'type' property that will hold the name of the action
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      })
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>