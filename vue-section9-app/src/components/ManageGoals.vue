<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter a few characters</p>
      <button @click="confirmError">Understand</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert
  },

  data() {
    return {
      inputIsInvalid: false
    };
  },

  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value; // to get the value the user entered
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },

    confirmError () {
      this.inputIsInvalid = false;
    }
  }
}
</script>