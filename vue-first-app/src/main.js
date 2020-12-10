import { createApp } from 'vue';

// import a name export by using {}
// default export by using an identifier of our choice, but typically we name it like the file was named
import App from './App.vue';
import FriendContact from './components/FriendContact.vue'; // Where we are getting the object for my component
import NewFriend from './components/NewFriend.vue';


const app = createApp(App);

app.component('friend-contact', FriendContact); // The 1st argument will be our custom HTML tag (component), in kebab-case, and the 2nd is our component configuration
app.component('new-friend', NewFriend);

app.mount('#app');