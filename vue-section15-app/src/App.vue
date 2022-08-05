<template>
  <base-container title="Vuex">
    <the-counter></the-counter>

    <favorite-value></favorite-value>

    <button @click="addOne">Add 10</button>

    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },

  methods: {
    addOne () {
      // this.$store.commit('increase', { value: 10 })
      // Alternative to the code line above
      // Needs to have a 'type' property that will hold the name of the mutation
      this.$store.commit({
        type: 'increase',
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