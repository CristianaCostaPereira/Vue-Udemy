<template>
  <div>
    <the-header></the-header>
    <active-goals></active-goals>
    <manage-goals></manage-goals>
    
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  // components only usable here, in this file
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },

  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>