import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(), // Tells the router how to manage the routing history in our app
  routes: [] // Here we register all the routes (URL's) we want to support
});

const app = createApp(App)

app.mount('#app');