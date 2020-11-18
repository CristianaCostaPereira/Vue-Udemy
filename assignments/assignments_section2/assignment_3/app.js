const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    
    methods: {
        addNumber(number) {
            this.counter = this.counter + number;
        },
    }
});

app.mount('#assignment');