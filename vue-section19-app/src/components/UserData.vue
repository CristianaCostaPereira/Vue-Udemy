<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],

  // setup(props, context) {
  setup(props) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })

    // Same as this.$emit('sava-data', 1) in the options API
    // context.emit('sava-data', 1)

    return { userName: userName }
  }
}

</script>