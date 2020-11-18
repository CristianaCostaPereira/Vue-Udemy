const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            messageOne: 'Not there yet',
            messageTwo: 'Too much!'
        }
    },

    watch: {
        counter(value) {
            if (value <= 37) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 5000);
            }
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