<template>
<!-- With Vue 3 we dont need to wrap the template in one root level element, this is called FRAGMENTS -->
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>

  <!-- <teleport> needs one attribute, the 'to' prop -->
  <!-- there we provide a CSS selector, selecting an HTML element where the content should actually be added to in the HTML -->
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter a few characters</p>
      <button @click="confirmError">Got it 😄 !</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },

  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value; // to get the value the user entered
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>