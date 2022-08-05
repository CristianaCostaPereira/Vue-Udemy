<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // commit() is a built-in method that Vuex give us on its store
    // commit takes the name of the mutation we want to perform
    // addOne () {
    //   this.$store.commit('increment')
    // }

    // Bellow we are using the correct way, by using actions in our component, instead os mutations
    // addOne() {
    //   this.$store.dispatch('increment')
    // }

    ...mapActions(['increment', 'increase'])
  }
}
</script>