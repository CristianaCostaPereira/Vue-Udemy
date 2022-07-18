<template>
  <ul>
    <li :class="{active: modelValue === 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
    <li :class="{active: modelValue === 'average'}"><button type="button" @click="activate('average')">Average</button></li>
    <li :class="{active: modelValue === 'great'}"><button type="button" @click="activate('great')">Great</button></li>
  </ul>
</template>

<script>
export default {
  // If we use v-model on a CUSTOM component, Vue uses this specific prop and listen to this very specific event which we can emit in that component
  props: ['modelValue'],

  emits: ['update:modelValue'],

  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    }
  }
}
</script>

<style scoped>
.active {
  border-color: #0fb3b3;
}

.active button {
  color: #0fb3b3;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>