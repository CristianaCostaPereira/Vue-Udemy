<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
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
      results: []
    };
  },

  methods: {
    // In this method we wanna send another HTTP request to the server we previosly send our data to (Firebase) . But now to GET data
    // fetch returns an object on which we can listen for the data once is there, to then set up code that will be executed when that data is there.
    // We set up such listener by adding a THEN method on the result of fetch
    // The THEN method takes a function which will be executed automatically by the browser once the result is there
    // We will also get an argument automatically: the RESPONSE of this resquest (so, the response send back by the server to the browser)
    loadExperiences() {
      fetch('https://vue-http-demo-ee864-default-rtdb.firebaseio.com/surveys.json')
        .then(function (response) {
          if (response.ok) {
            return response.json(); // method we want to use for parsing the data that is part os the response
          }
        })

        // Here we will get the actual data which response.json yielded
        .then(function(data) {
          console.log(data);
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>