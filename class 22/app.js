const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
        // this method above doesn't return anything because it doesn't has to, because the click listener doesnt want a return value
        addCounter() {
            this.counter++ // or this.counter = this.conter + 1, it's the same thing
        },

        reduceCounter() {
            this.conter--
        }
    }
  });
  
  app.mount('#events');