const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        lastName: '',
        // fullname: ''
      };
    },

    // watcher is basically a function we can tell Vue to execute when one of its dependencies changes, similar to computed
    // Here we can use a name we used in a data or computed property as a name for a watcher method
    // Whenever 'name' (in data) changes, the watcher method will re-execute, this will stablish a connection and is how the watchers works
    // We repeat another data or computed property name as a method name and by doing this, that watcher method will be executed automatically by Vue whenever a property of that name changes
    // We do NOT return anything because we are not using the watcher anywhere in out HTML to use a return value
    // A watcher function automatically gets the last value of the watch property as an argument!!!!
    // Watchers are helpful if we want to run code that MAYBE also updates a data property but which shouldn't also do that, in reaction to a property!!!
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
    // the code below is the same as in watch but with less code
    computed: {
      fullname() {
        console.log('Running...')
        if (this.name === '' || this.lastName === '') { // If either of the two is empty we retur an empty full name
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