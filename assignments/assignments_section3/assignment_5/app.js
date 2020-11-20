const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            showList: true,
        };
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },

        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');