const app = Vue.createApp({
    data() {
        return {
            message: '',
            addInput: ''
        };
    },

    methods: {
        showAlert() {
            alert('On my way to master Vue 😄 !');
        },

        setInput(event) {
            this.message = event.target.value; // What the user enters
        },

        confirmInput() {
            this.addInput = this.message // Sets it equal to the internally stored name
        }
    }
});

app.mount('#assignment');