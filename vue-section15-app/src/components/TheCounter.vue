<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter () {
      // return this.$store.state.counter * 2
      // Alternative to the code above, using getters
      // We do NOT call the getter, we just point at it
      return this.$store.getters.finalCounter
    }
  },
}
</script>