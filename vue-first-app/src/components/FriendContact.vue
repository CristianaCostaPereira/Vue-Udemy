<template>
  <li>
    <h2>{{ name }}</h2>

    <button v-on:click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>

    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // Make Vue aware of the attributes of the props we want to accept on our component
  // Write props as strings and in camel case, becase they will be available just like data properties
  props: [
    'name',
    'phoneNumber',
    'emailAdress'
  ],

  data() {
    return {
      detailsAreVisible: false,
      friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>