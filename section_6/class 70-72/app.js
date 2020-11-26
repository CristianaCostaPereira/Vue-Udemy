const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },

        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// Component are reusable pieces of HTML with connected data and logic
// allow us to easily reusable and encapsulate pieces of HTML code
// It needs two things: an IDENTIFIER (basically is a custom HTML element/tag and we ALWAYS need to name it with a dash) and a config OBJECT
// is essentially just another VUE app, a mini app that belongs to another app
// We can use components by adding the template option
app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
  
    <button v-on:click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
  
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  
  data() {
    return {
      detailsAreVisible: false,
      // just temporary to see if everything is working
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      }
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
