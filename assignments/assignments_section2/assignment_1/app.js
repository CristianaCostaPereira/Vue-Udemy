// Every app can only be connected to one HTML element!
const app = Vue.createApp({
  data() {
    return {
      myName: 'Cris 😊',
      myAge: 31 + ' years' ,
      // falseMessage: 'No, a bit higher 😶',
      // trueMessage: 'Almost there 🙂',
      imgGoogle: 'https://cdn.pixabay.com/photo/2015/12/04/09/13/leaves-1076307_960_720.jpg'
    };
  },

  methods: {
    addAge() {
      let currentDate = new Date();
      let birthDate = new Date("1989/11/06");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference/31557600000 + (5)) + ' in 5 years'; // adds 5 more years to my age

      return age
    },

    myRandomNumber() {
      return Math.random();
      // For changing the messages set in data when we reload the page
      // if (Math.random <0.5) {
      //     return this.falseMessage;
      // } else {
      //     return this.trueMessage;
      // }
    }
  }
});

app.mount('#assignment');