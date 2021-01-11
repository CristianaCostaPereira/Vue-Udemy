import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App)

// .use makes our Vue app aware of this router
app.use(router);

app.mount('#app');