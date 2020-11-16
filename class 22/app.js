const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      // passing arguments to methods
      // Use number as a parameter to add/remove a number more dynamically.
      // Then these methods will never need to be changed when we decide to add or deduct a different number
      // It will only be changed in the HTML
        addCounter(number) {
          this.counter = this.counter + number;
          // We could also hard-coded: this.counter = this.counter + 10 but it is less dynamic and whenever we planned to change the number we also need to change it here in code
        },

        reduceCounter(number) {
          this.counter = this.counter - number;
        }
    }
  });
  
  app.mount('#events');