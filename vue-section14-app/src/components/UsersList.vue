<template>
  <div>
    <ul> 
     <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </ul>

    <div>
      <input type="text" ref="userNameInput"/>
      <button @click="addUser">Add Users 🖋️</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        'Cris',
        'Nuno',
        'Irene',
        'Cina',
        'Mino'
      ]
    };
  },

  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName); // to add the new user entered at the top
    },

    removeUser(user) {
      // So we keep all the users where the names are not equal to the user we are getting as an argument
      // And ig the name is equal, we return false
      this.users = this.users.filter(name => name !== user);
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>