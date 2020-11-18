const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  
  // Vue will be aware of the computed dependencies, in this case, 'name', and only re-executed them IF one of the dependencies CHANGES!  
  // fullname, because we are not going to call it and therefore we should name our computed properties just like we would name our data properties
  // Better to use computed properties than methods for outputting DYNAMIC values
  computed: {
    fullname() {
      console.log('Running...')
      if (this.name === '') {
        return ''; // so we only add 'Pereira' if the name is NOT empty
      }
      return this.name + ' ' + 'Pereira';
    }
  },

  methods: {
    outputFullName() {
      console.log('Running')
      if (this.name === '') {
        return ''; // so we only add 'Pereira' if the name is NOT empty
      }
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