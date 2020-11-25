const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // Previous we had: this.message = this.currentUserInput
      this.message = this.$refs.userText.value;
    },
  },

  //Mounted Vue instance hooks:
  beforeCreate() {
    // Where we could also send a HTTP request to a server, set a timer, whatever we need to do
    console.log('beforeCreate()');
  },

  // Vue app was initialized internally, but it was not mounted yet, so, visually we will still not see anything
  created() {
    console.log('created()');
  },

  // Triggers right before the app is really mounted, so right before we see something on the screen
  beforeMount() {
    console.log('beforeMount()');
  },

  // The Vue app was mounted to the screen
  mounted() {
    console.log('mounted');
  },


  // Data changes triggering their own lifecycle hooks:
  beforeUpdate() {
    console.log('beforeUpdate()'); // the update is not fully proccess so, no changes will be seen on the screen yet
  },

  // Output is processed and visible on the screen
  updated() {
    console.log('updated()'); 
  },


  // Instance unmounted hooks:
  beforeUnmount() {
    console.log('beforeUnmount()');
  },

  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');

// To remove the Vue app
setTimeout(function () {
  app.unmount();
}, 3000);