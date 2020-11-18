const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        lastName: '',
        // fullname: ''
      };
    },
    
    watch: {
        counter(value) {
            if (value > 50 ) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }
        }
        // name(value) {
        //     // ensure that full name is empty
        //     if (value === '') {
        //        this.fullname = '';
        //     } else {
        //         this.fullname = value + ' ' + this.lastName;
        //     }
        // },

        // lastName(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //      } else {
        //          this.fullname = this.name + ' ' + value;
        //      }
        // }
    },

    // To calcute some output value dynamically
    computed: {
      fullname() {
        console.log('Running...')
        if (this.name === '' || this.lastName === '') {
          return ''; // so we only add 'Pereira' if the name is NOT empty
        }
        return this.name + ' ' + this.lastName;
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