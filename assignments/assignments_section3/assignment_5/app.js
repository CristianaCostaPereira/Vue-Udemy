const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: ''
        };
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
    }
});

app.mount('#assignment');