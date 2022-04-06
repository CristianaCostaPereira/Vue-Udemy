const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Learn Vue by completing the course 😄 !',

      // Bellow we are assuming courseGoalB is HTML code
      courseGoalB: '<h2>Master Vue and build amazing apps 🧐 !</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber <0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');