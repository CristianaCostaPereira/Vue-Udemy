import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  // Tells the router how to manage the routing history in our app
  history: createWebHistory(),

  // Here we register all the routes (URL's) we want to support
  routes: [
    { path: '/', redirect: '/teams' },

    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          props: true,
          component: TeamMembers
        }
      ]
    },

    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },

      // Navigational guard: route level
      beforeEnter(to,from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },

    { path: '/:notFound(.*)', component: NotFound }
  ],

  linkActiveClass: 'active', // Change the default CSS classes

  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition; // If we go back we use the savedPosition instead of jumping to the top of the page
    } else {
      return { left: 0, top: 0 }; // Means we want to scroll to the top of the page
    }
  }
});

// Global navigational guard: useful if we want to check whether the user is authenticated and prevent access to a certain page if not authenticated
router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs Authentication!');
    next();
  } else {
    next(); // confirm the navigation
  }
});

// Does NOT have the next argument because it will only run once a navigation has been confirmed
// Good for sending analytics data
router.afterEach(function(to, from) {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;