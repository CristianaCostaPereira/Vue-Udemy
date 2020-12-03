<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>

    <button v-on:click="toggleFavorite">Toggle Favorite</button>
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
  // props: ['name', 'phoneNumber', 'emailAdress','isFavorite'] for simple apps and when working alone
  props: {
    name: {
      type: String,
      required: true
    },

    phoneNumber: {
      type: String,
      required: true
    },

    emailAdress: {
      type: String,
      required: true
    },

    isFavorite: {
      trype: String,
      required: false,
      // When having a non-required prop:
      default: '0',
      validator: function (value) {
        return value === '1' || value === '0';
      }
    }
  },

  data() {
    return {
      detailsAreVisible: false,
      friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
      },
      friendIsFavorite: this.isFavorite
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite
         = '1';
      }
    }
  },
};
</script>