const app = Vue.createApp({
  data() {
    return {
      // which demo div is selected
      // Initially all set to false because no div is selected
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },

  // we can listen to clicks on basically any HTML elements
  // box is an identifier for which box was selected as an input
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = true;
      } else if (box === 'B') {
        this.boxBSelected = true;
      } else if (box === 'C') {
        this.boxCSelected = true;
      }
    }
  }
});

app.mount('#styling');