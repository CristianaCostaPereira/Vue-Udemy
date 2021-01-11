<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save changes</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },

  inject: ['users'],

  data() {
    return { changesSaved: false };
  },

  methods: {
    confirmInput() {
      // does something

      // Special property available in our component config object because we added the router package (router is used in our Vue app)
      // Triggers the navigation from inside the JS code from inside our component config object programatically
      // .push() for navigating programatically, to add a new route to this routing memory the browser keeps
      // .push() takes a string with the path we want to go
      this.$router.push('/teams');
    },

    saveChanges() {
      this.changesSaved = true;
    }
  },

  // Navigational guard: component level
  // It will be called before navigation to this component is confirmed
  beforeRouteEnter(to, from, next) {
    console.log('UsersList component beforeRouteEnter');
    console.log(to, from);
    next();
  },

  // The router will call this first before calling all the others beforeEach an beforeEnter guards
  // Navigational guard that makes sure the user do not leave the page accidentally and lose their input
  beforeRouteLeave(to, from, next) {
    console.log('UserList component beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes!');
      next(userWantsToLeave);
    }
  },

  // this will be executed whenever we leave the user's page
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>