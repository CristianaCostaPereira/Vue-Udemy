const app = Vue.createApp({
  data() {
    return {
      userInput: '', // Store the user input, task 1
      paragraphVisibility: true, // to show or hide the paragraph, task 2
      inlineBackgroundColor: '' // task 3
    }
  },

  // Because we added more classes
  computed: {
    paragraphClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.paragraphVisibility,
        hidden: !this.paragraphVisibility
      };
    },
  },

  // We want to change this property on every click
  methods: {
    toggleVisibility() {
      this.paragraphVisibility = !this.paragraphVisibility
    }
  }
});

app.mount('#assignment');