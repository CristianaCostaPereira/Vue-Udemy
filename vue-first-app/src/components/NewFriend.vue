<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>

    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>

    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>

    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
// This object will hold the configuration for our component
export default {
  emits: ['add-contact'],

  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    };
  },

  methods: {
    // Here, I want to emit my custom add-contact event, so I can forward the properties in data to whoever is listening to that custom event, the app.vue file
    submitData() {
      this.$emit(
        'add-contact', // the custom event we defined above
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    }
  }
};
</script>