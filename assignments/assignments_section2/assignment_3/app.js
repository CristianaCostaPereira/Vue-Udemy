const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      messageOne: 'Not there yet',
      messageTwo: 'Too much!'
    }
  },

  methods: {
    addNumber(number) {
      this.counter = this.counter + number;
    },
  },

  // We just don't want to output the number, we want to output a result which is either some text or the number
  // Now we have the message computed property which depends on our counter property and Vue detectes this dependency and will only re-calculate and re-evaluate message whenever the counter changes
  computed: {
    message() {
      if (this.counter < 37) {
        return this.messageOne;
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return this.messageTwo;
      }
    }
  },

  // Watch for changes in the message computed property
  // Whenever message CHANGES, whenever has a new value, we want to trigger a watcher
  // watcher will only executes if message switch for messageOne, to a number or from a number to messageTwo, or from messageOne to messageTwo
  // So only if the value ield by message really changed, only in this case the watcher executes
  watch: {
    message() {
      const that = this;

      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    }
  },
});

app.mount('#assignment');