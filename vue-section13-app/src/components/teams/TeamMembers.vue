<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],

  components: {
    UserItem
  },

  data() {
    return {
      teamName: '',
      members: []      
    };
  },

  // Give us access to our dynamic segment the user enters, so the concrete value that was entered for our route parameter
  // Will be called when the component is created, before it is shown on the screen, but once all data is available
  // In here, we get access to the injected data, but, also, to our routing data
  // We could use $route (without the 'r' ate the end) to get access to various pieces of info, for example the path that was responsible for loading a page (this.$route.path) but we are using the params property
  // params property will hold ALL the route parameters that were used for getting to our page (one in our case: teamId)
  created() {
    const teamId = this.$route.params.teamId; // will find the correct team in our injected teams array
    const selectedTeam = this.teams.find(team => team.id === teamId); // .find is a built in array method which needs a function that executes on every array element, which gets the team, for which has currently running, as an argument and should return true if it's the team we are looking for. This will helps us select the right team
    const members = selectedTeam.members; // finds the members once we got a team

    // this loop reachs to users and finds the full user entries for those members, because members is just an array full os Id's
    const selectedMembers = [];
    for (const member of members) {
      const selectedUser = this.users.find(user => user.id === member); // member is just a another user Id 
      selectedMembers.push(selectedUser); // add to selectedMembers by pushing it
    }

    this.teamName = selectedTeam.name;
    this.members = selectedMembers;
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>