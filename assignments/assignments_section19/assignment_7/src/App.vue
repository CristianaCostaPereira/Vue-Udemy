<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <!-- Task 3.1 -->
  <!-- <h3 v-if="isGoalVisible">{{ goal }}</h3> -->

  <!-- Task 3.2 -->
  <!-- <h3 v-if="courseData.goalVisibility">{{ courseData.goal }}</h3> -->

  <!-- Task 3.3 -->
  <h3 v-if="courseData.goalVisibility">{{ courseData.goal }}</h3>

  <!-- Task 4 -->
  <h3>{{ courseGoal }}</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>

  <!-- Task 3: Manage data in three ways -->
  <!-- => 3.1:Separate refs -->
  <!-- => 3.2: Ref Object -->
  <!-- => 3.3: Reactive Object -->

  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup >
import { reactive } from 'vue'

// Task 3.1:
// const goal = ref('Finish the course 👨‍🎓 !')
// const isGoalVisible = ref(false)

// Task 3.2:
// const courseData = ref({
//   goal: 'Finish the course 👨‍🎓 !',
//   goalVisibility: false
// })

// Task 3.3:
const courseData = reactive({
  goal: 'Finish the course 👨‍🎓 !',
  goalVisibility: false
})

function toggleGoal() {
  // Task 2:
  // isGoalVisible.value = !isGoalVisible.value

  // Tasks 3.1 and 3.2:
  // courseData.value.goalVisibility = !courseData.value.goalVisibility

  // Task 3.3:
  courseData.goalVisibility = !courseData.goalVisibility
}
</script>


<script>
// Task 4:
// export default {
//   data() {
//     return {
//       isGoalVisible: true
//     }
//   },

//   computed: {
//     courseGoal () {
//       return this.isGoalVisible ? 'Finish the course 👨‍🎓 !' : ''
//     }
//   },

//   methods: {
//     toggleGoal () {
//       this.isGoalVisible = !this.isGoalVisible
//     }
//   }
// }
// </script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>