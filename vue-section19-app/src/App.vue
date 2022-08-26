<template>
  <section class="container">
    <user-data
      :first-name="user.firstName"
      :last-name="user.lastName">
    </user-data>

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
        ref="lastNameInput"
      />

      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, watch, provide } from 'vue'

// Import and declare it in the template, is all that is needed to use a componet with <script setup>
import UserData from './components/UserData.vue';

// const name = ref('Cristiana')
// const firstName = ref('')
// const lastName = ref('')
const age = ref(32)
const lastNameInput = ref(null)

const user = reactive({
  firstName: '',
  lastName: ''
})

provide('userAge', age)

watch(age, (newValue, oldValue) => {
  console.log('Old age: ' + oldValue)
  console.log('New age: ' + newValue)
})

function setNewAge () {
  age.value = 33
}

// How to work with template refs
function setLastName () {
  user.lastName = lastNameInput.value.value
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