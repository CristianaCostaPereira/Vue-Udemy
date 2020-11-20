const app = Vue.createApp({
  data() {
    return {
      goals: [], // When empty it will let appear the paragraph
      enteredGoal: '', // What the user enters
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal); // push enteredGoal to our goals
    },

    // 'index' is our identifier of the goal we want to remove, so we can get it as an argument
    // splice method, used like below, will find the element at this index and remove it from the array
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');