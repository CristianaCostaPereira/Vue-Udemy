const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
        addCounter(number) {
          this.counter = this.counter + number;
        },

        reduceCounter(number) {
          this.counter = this.counter - number;
        }
    }
  });
  
  app.mount('#events');