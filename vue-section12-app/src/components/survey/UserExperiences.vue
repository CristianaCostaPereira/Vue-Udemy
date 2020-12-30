<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>

      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>

      <p v-if="isLoading">Loading ⚙️</p>

      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false
    };
  },

  methods: {
    // In this method we wanna send another HTTP request to the server we previously send our data to (Firebase). But now to GET data
    // fetch returns an object on which we can listen for the data once is there, to then set up code that will be executed when that data is there.
    // We set up such listener by adding a THEN method on the result of fetch
    // The THEN method takes a function which will be executed automatically by the browser once the result is there
    // We will also get an argument automatically: the RESPONSE of this resquest (so, the response send back by the server to the browser)
    loadExperiences() {
      this.isLoading = true;

      fetch('https://vue-http-demo-ee864-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json(); // method we want to use for parsing the data that is part os the response
          }
        })

        // Here we will get the actual data which response.json yielded
        .then((data) => {
          this.isLoading = false;

          const results = [];

          for (const id in data) {
            results.push({
              // This is how we are generating a bunch of objects based on the data we are fetching from Firebase and adding that all to our temporary results array
              id: id,
              name: data[id].name, // name equal to data for that id
              rating: data[id].rating
            });
          }

          this.results = results;
        });
    },
  },

  mounted() {
    // will trigger loadExperiences when this entire component is loaded for the 1st time; when the Vue app is mounted (fully initialized).
    // will load all the experiences and show them automatically
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>