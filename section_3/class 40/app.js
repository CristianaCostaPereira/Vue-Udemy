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
    }
  }
});

app.mount('#user-goals');