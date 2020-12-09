<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>

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
    id: {
      type: String,
      required: true
    },

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
      trype: Boolean,
      required: false,
      // When having a non-required prop:
      default: false,
      // validator: function (value) {
      //   return value === '1' || value === '0';
      // }
    }
  },

  emits: ['toggle-favorite'],
  // emitis: {
  //   'toggle-favorite': function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('ID missing');
  //       return false;
  //     }
  //   }
  // },

  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      // Built in method, that we can call from inside a Vue component with 'this' and allows to emit our custom event to which we can listen from inside the parent component.
      // Wants, at least, one ARGUMENT and that is a name we choose, normally, the name of the custom event.
      // ALWAYS use kebab-case
      // Every estra argument will be simply be data we pass together with our event
      // this.id is available because we added a prop named id to our component
      this.$emit('toggle-favorite', this.id);
    }
  },
};
</script>