import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router = createRouter({
  // Tells the router how to manage the routing history in our app
  history: createWebHistory(),

  // Here we register all the routes (URL's) we want to support
  routes: [
    { path: '/', redirect: '/teams' },

    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers
        }
      ]
    },

    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter }
    },
    
    { path: '/:notFound(.*)', component: NotFound }
  ],

  linkActiveClass: 'active' // Change the default CSS classes
});

const app = createApp(App)

// .use makes our Vue app aware of this router
app.use(router);

app.mount('#app');