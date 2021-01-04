import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(), // Tells the router how to manage the routing history in our app

  routes: [ // Here we register all the routes (URL's) we want to support
    // Then, we pass a JS object and every object represents one route and the configuration for that route
    // path option needs to be ALWAYS set on every route. Tells the router for which path a certain component should be loaded
    // component option is where we define which component should be loaded by the vue-router when the user visits our path ('/teams' in this case)
    { path: '/teams', component: TeamsList}, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList},
  ],

  linkActiveClass: 'active' // Change the default CSS classes
});

const app = createApp(App)

// Allow us to connect our Vue app with a 3rd party package, with some other functionality
// .use makes our Vue app aware of this router
app.use(router);

app.mount('#app');