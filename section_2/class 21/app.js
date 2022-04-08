const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  // Not only we use methods in curly braces or with v-bind to dynamically derive a value we want to output, but we can also use them with event listeners to define code that should be executed when the event occurs
  methods: {
    // this method above doesn't return anything because it doesn't has to, because the click listener doesn't want a return value
    addCounter() {
      this.counter = this.counter + 1;
      // or this.counter++, it's the same thing
    },

    reduceCounter() {
      this.counter = this.counter - 1;
    }
  }
});
  
app.mount('#events');