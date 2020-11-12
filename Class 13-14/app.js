// Use Vue features to interacte with the element section in our HTML
// We use Vue features by passing an object to creatApp
// This is the object that we can use to configure our app
const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Master Vue 💪 !'
        };
    }
});

app.mount('#user-goal');