const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },

    setText() {
      // Previous we had: this.message = this.currentUserInput
      // where we need the entered value
      // Points at the DOM object for the input element (an object full of keys value pairs, where the keys are the ref identifiers we set up in our template)
      // $refs is a special property, provided by Vue
      // All Vue provided properties starts with dollar sign, to make it clear that this is a built-in property
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
});

app.mount('#app');