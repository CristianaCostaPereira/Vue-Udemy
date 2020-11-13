const app = Vue.createApp({
    data() {
        return {
            myName: 'Cris 😊',
            myAge: 30 + ' years' ,
            falseMessage: 'No, a bit higher',
            trueMessage: 'Almost there'
        };
    },

    methods: {
        addAge() {
            let currentDate = new Date();
            let birthDate = new Date("1989/11/06");
            let difference = currentDate - birthDate;
            let age = Math.floor(difference/31557600000 + (5)) + ' years'; // adds 5 more years to my age
            return age
        },

        myRandomNumber() {
            const favoriteNumber = Math.random();
            if (favoriteNumber <0.5) {
                return this.falseMessage;
            } else {
                return this.trueMessage;
            }
        }
    }
});

app.mount('#assignment');