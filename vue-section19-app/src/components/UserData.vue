<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],

  // setup(props, context) {
  setup(props) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })

    const age = inject('userAge')

    onBeforeMount (() => {
      console.log('onBeforeMount');
    })

    onMounted (() => {
      console.log('onMounted');
    })

    onBeforeUpdate (() => {
      console.log('onBeforeUpdate');
    })

    onUpdated (() => {
      console.log('onUpdated');
    })

    onBeforeUnmount (() => {
      console.log('onBeforeUnmount');
    })

    onUnmounted (() => {
      console.log('onUnmounted');
    })

    // Same as this.$emit('sava-data', 1) in the options API
    // context.emit('sava-data', 1)

    return { userName: userName, age }
  }
}
</script>