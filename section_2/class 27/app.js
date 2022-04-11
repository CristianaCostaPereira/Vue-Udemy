const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
    
  methods: {
    // The problem with this is when we press the counter button, Vue tries to find out where, on the HTML, it needs to update the rendered page
    outputFullName() {
      console.log('Running')
      // Since we are using a method we can add an if statement
      if (this.name === '') {
        return ''; // so we only add 'Pereira' if the name is NOT empty
      }
      // Should return something, because we are not going to use it to bind it to an event but, instead call it in the HTML
      return this.name + ' ' + 'Pereira';
    },

    setName(event) {
      this.name = event.target.value;
    },
  
    add(num) {
      this.counter = this.counter + num;
    },
  
    reduce(num) {
      this.counter = this.counter - num;
    },
  
    resetInput() {
      this.name = '';
    }
  }
});
  
app.mount('#events');
  