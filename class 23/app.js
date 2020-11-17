const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: ''
      };
    },
    methods: {
        setName(event) {
          // event.target give us access to the target, the element on which the event occurred
          this.name = event.target.value; // it will be the value the user enters
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