const app = Vue.createApp({
    data() {
        return {
            myName: 'Cris 😊',
            myAge: 30 + ' ' + 'years' ,
        };
    },
    methods: {
        addAge() {
            let currentDate = new Date();
            let birthDate = new Date("1989/11/06");
            let difference = currentDate - birthDate;
            let age = Math.floor(difference/31557600000 + (5)); // adds 5 more years to my age
            return age
          }
        }
});

app.mount('#assignment');

// addAge(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1989 + (5));
// }