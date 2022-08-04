import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import router from './router.js';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// Will let us know when the router successfully evaluated which page should be loaded
// Set were we register our router const with our Vue app
router.isReady().then(function() {
  app.mount('#app');
})