<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>

    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm">
    </base-search>

    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title">
      </project-item>
    </ul>

    <h3 v-else>No projects found.</h3>
  </base-container>

  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { ref, computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },

  props: ['user'],

  setup(props) {
    const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('')

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        )
      }
      return props.user.projects
    })

    const hasProjects = computed(() => {
      return props.user.projects && availableProjects.value.length > 0
    })

    function updateSearch(val) {
      enteredSearchTerm.value = val
    }

    watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue
        }
      }, 300)
    })

    // A watcher runs whenever any prop changes, so we use toRefs if we want to garantee that only changes in one of our props triggers the watcher
    const { user } = toRefs(props)

    watch(user, () => {
      enteredSearchTerm.value = ''
    })

    // The code above could be an alternative to the code below, in case I had multiple props (and they could change)
    // watch(props, () => {
    //   enteredSearchTerm.value = ''
    // })

    return {
      enteredSearchTerm,
      hasProjects,
      availableProjects,
      updateSearch
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>