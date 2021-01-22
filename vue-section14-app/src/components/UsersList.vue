<template>
  <div>
    <!-- Capable of animate individual lists items, but also multiple elements at the same time, making it great for lists -->
    <!-- Will render an element to the DOM and we can control which element by adding the tag prop -->
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>

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

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out; 
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in; 
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>