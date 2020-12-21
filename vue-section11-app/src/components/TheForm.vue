<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidation === 'invalid'}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="validateInput"/>
      <p v-if="userNameValidation === 'invalid'">Please enter a valid name!</p>
    </div>

    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="userAge" ref="ageInput" />
    </div>

    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>

      <!-- v-model works on <select> just as it does on <input> elements -->
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>

    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input 
          id="interest-news"
          name="interest" 
          type="checkbox"
          value="news"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>

      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>

      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>

    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>

      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>

      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>

    <div class="form-control">
      <rating-control v-model="rating"></rating-control>
    </div>

    <div class="form-control">
      <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirm" />
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>

    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
components: {
  RatingControl
},

  data() {
    return {
      userName: '',
      userAge: null, // Make it clear that we have no value yet
      referrer: 'wom',
      interest: [], // An array because we have multiple checkboxes with the same name, creating, automatically, a group, so Vue adds all the checked elements to the array
      how: null,
      confirm: false, // Single checkbox for a single name value we get true or false
      rating: null,
      userNameValidation: 'pending'
    }
  },

  methods: {
    // Connect Vue to all ours inputs and get their information
    submitForm () {
      console.log('Username: ' + this.userName);
      this.userName = '';

      console.log('User Age:');
      console.log(this.userAge + 5);
      console.log(this.$refs.ageInput.value + 5);
      console.log(31);
      this.userAge = null;

      console.log('referrer: ' + this.referrer);
      this.referrer = 'wom';

      console.log('Checkboxes');
      console.log(this.interest);
      this.interest = [];

      console.log('Radio Buttons');
      console.log(this.how);
      this.how = null;

      console.log('Confirm?');
      console.log(this.confirm);
      this.confirm = false;

      console.log('Rating');
      console.log(this.rating);
      this.rating = null;
    },

    validateInput() {
      if (this.userName  === '') {
        this.userNameValidation = 'invalid';
      } else {
        this.userNameValidation = 'valid';
      }
    }
  },
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>