<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    // commit() is a built-in method that Vuex give us on its store
    // commit takes the name of the mutation we want to perform
    addOne () {
      this.$store.commit('increment')
    }
  }
}
</script>