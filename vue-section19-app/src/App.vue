<template>
  <section class="container">
    <h2>{{ userName }}</h2>

    <h3>{{ age }}</h3>

    <button @click="setNewAge">Change Age</button>

    <div>
      <input
        type="text"
        placeholder="First Name"
        @input="setFirstName"
      />

      <input
        type="text"
        placeholder="Last Name"
        @input="setLastName"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// const userName = ref('Cristiana')
const age = ref(31)
const firstName = ref('')
const lastName = ref('')

// const user = reactive({
//   name: 'Cristiana',
//   age: 32,
// }),

const userName = computed(function() {
  return firstName.value + ' ' + lastName.value
})

function setNewAge () {
  age.value = 33
}

function setFirstName (event) {
  firstName.value = event.target.value
}

function setLastName (event) {
  lastName.value = event.target.value
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>