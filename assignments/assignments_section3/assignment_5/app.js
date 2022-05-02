const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      showList: true,
    };
  },

  computed: {
    buttonText() {
      return this.showList ? 'Hide List' : 'Show List';
    }
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },

    toggleList() {
      this.showList = !this.showList;
    },
  }
});

app.mount('#assignment');