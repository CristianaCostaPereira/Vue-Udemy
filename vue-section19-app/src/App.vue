<template>
  <section class="container">
    <h2>{{ userName }}</h2>

    <h3>{{ age }}</h3>

    <button @click="setNewAge">Change Age</button>

    <div>
      <input
        type="text"
        placeholder="First Name"
        v-model="user.firstName"
      />

      <input
        type="text"
        placeholder="Last Name"
        v-model="user.lastName"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

// const name = ref('Cristiana')
// const age = ref(31)
// const firstName = ref('')
// const lastName = ref('')
const age = ref(32)

// We can't watch a property of a reactive object because we are passing a number to watch()
const user = reactive({
  // name: 'Cristiana',
  age: 32,
  firstName: '',
  lastName: ''
})

watch(age, (newValue, oldValue) => {
  console.log('Old age: ' + oldValue)
  console.log('New age: ' + newValue)
})

// Note: Can not separate the consts with a ','. Need to use ';' or nothing
const userName = computed(() => {
  return user.firstName + ' ' + user.lastName
})

// multiple dependencies that trigger the watcher function
// watch([age, userName], (newValues, oldValues) => {
//   console.log('Old age: ' + oldValues[0])
//   console.log('New age: ' + newValues[0])

//   console.log('Old name: ' + oldValues[1])
//   console.log('New name: ' + newValues[1])
// })

function setNewAge () {
  age.value = 33
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