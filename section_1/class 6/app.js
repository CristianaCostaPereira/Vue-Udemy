Vue.createApp({

  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);

      // Resets the input
      this.enteredValue = '';
    }
  }
}).mount('#app');