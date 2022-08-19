<template>
  <section class="container">
    <h2>{{ user.name }}</h2>

    <h3>{{ user.age }}</h3>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// const name = ref('Cristiana')
// const age = ref(31)
const user = ref({
  name: 'Cristiana',
  age: 32
})

console.log(user);

setTimeout(() => {
  user.value.name = 'Cris';
  user.value.age = 33
}, 2000);
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>