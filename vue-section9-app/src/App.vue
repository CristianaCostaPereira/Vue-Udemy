<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    
    <course-goals>
      <!-- Our scoped slot: allows to pass data from inside the component where we defined a slot to the component where we passed the markup for the slot and we do this by going to the component and add a prop to the slot -->
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>

        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  // components only usable here, in this file
  components: {
    TheHeader, // or 'the-header': TheHeader
    BadgeList,
    UserInfo,
    CourseGoals
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