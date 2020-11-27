import { createApp } from 'vue';

// import a name export by usin {}
// default export by using an identifier of our choice, but typically we name it like the file was named
import App from './App.vue';
import FriendContact from "./components/FriendContact.vue"; // Where we are getting the object for my component 


const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');