<template>
  <div>
    <!-- <TheHeader /> -->
    <the-header></the-header>

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- It is the same as below, but without all of the v-if's -->
    <!-- <component> is our Dynamic component -->
    <!-- it needs the 'is' property to work and tells Vue which of the components created should be shown -->
    <!-- <keep-alive> tells Vue that components should not be removed and deleted entirely, but, instead, their state should be saved, cached behind the scenes -->
    <keep-alive>
      <component v-bind:is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },

  data() {
    return {
      selectedComponent: 'active-goals',

      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
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