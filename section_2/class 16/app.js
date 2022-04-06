const app = Vue.createApp({
    // data itself is a function, a method
  data() {
    return {
      courseGoal: 'Master Vue 😄 !',
      vueLink: 'https://vuejs.org/'
    };
  },
  
  // Allows to define functions!
  // Takes an object, which will be full of methods (functions) that we define at our will
  // All properties defined here need to be FUNCTIONS because they need to be callable as functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber <0.5) {
        return 'Learn Vue 😄 !';
        
      } else {
        return 'Master Vue 🧐 !';
      }
    }
  }
});

app.mount('#user-goal');