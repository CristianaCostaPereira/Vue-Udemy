<template>
  <section>
    <h2>{{ teamName }}</h2>

    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role">
      </user-item>
    </ul>

    <router-link to="/teams/t2">
      Go to Team 2
    </router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],

  props: ['teamId'],

  components: {
    UserItem
  },

  data() {
    return {
      teamName: '',
      members: []
    };
  },

  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId) // will helps us select the right team
      const members = selectedTeam.members // finds the members once we got a team

      const selectedMembers = []

      // this loop reachs to users and finds the full user entries for those members, because members is just an array full os Id's
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member) // member is just another user Id
        selectedMembers.push(selectedUser) // add to selectedMembers by pushing it
      }

      this.teamName = selectedTeam.name
      this.members = selectedMembers

      console.log(this.$route.query)
    }
  },

  created() {
    // this.$route.path // / teams/t1
    this.loadTeamMembers(this.teamId)
  },

  // watches when teamId changes
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  },

  // Vue will call this method whenever this component is about to be reused with new data because the route changed
  // Can be an alternative to watch the teamId prop
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers Component beforeRouteUpdate');
    console.log(to, from);
    next();
  }
}
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