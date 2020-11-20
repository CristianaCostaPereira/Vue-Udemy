const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue by completing the course😄 !',
            courseGoalB: 'Master Vue and build amazing apps 🧐 !',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber <0.5) {
                // allows us to output these different course goals which are stored in our data with the help of the outputGoal method
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');