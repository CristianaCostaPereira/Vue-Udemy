const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            messageOne: 'Not there yet',
            messageTwo: 'Too much!'
        }
    },

    computed: {
        message() {
            if (this.counter <= 37) {
                return this.messageOne;
            } else {
                return this.messageTwo;
            }
        }
    },

    methods: {
        addNumber(number) {
            this.counter = this.counter + number;
        },
    }
});

app.mount('#assignment');