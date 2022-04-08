const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    // If we have a scenario where we need to call setName, in the HTML, because, for example we need to pass in some other argument
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },

    addCounter(number) {
      this.counter = this.counter + number;
    },

    reduceCounter(number) {
      this.counter = this.counter - number;
    }
  }
});
  
app.mount('#events');