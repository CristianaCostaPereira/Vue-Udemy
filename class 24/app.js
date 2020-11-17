const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name // sets it equal to the internally stored name
    },

    submitForm() {
      alert('Submitted!');
    },

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