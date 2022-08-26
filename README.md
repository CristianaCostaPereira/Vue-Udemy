# Vue-Udemy
The Vue.js course from Udemy - The Complete Guide (with Router, Vuex, Composition API).


### Section 1: Getting Started

Lesson 5
  * starts the first pratical exercise in which we create an
  app using only JS.

Lesson 6
  * re-building the previous app with Vue.


### Section 2: Basics & Core Concepts - DOM Interaction with Vue

Lesson 14-16:
  * class 14 - creating and connecting Vue App instances;
  * class 15 - interpolation and data binding;
  * class 16 - binding attributes with the `v-bind` directive (The alternative to interpolation).

Lesson 17
  * added a bit dynamism to the app (whenever it is reloaded, randomly changes the text content);
  * understanding "methods" in Vue apps.

Lesson 18-19:
  * working with data inside of a Vue app (this).
  * outputting raw HTML content with `v-html`;
  * not needed to often, and should not be used as a default because we can introduce security issues because we basically circumvent the built in cross site scripting attack protection we have with the double curly braces.

Assignment 1:
  * put in practice what was learned so far (data binding).

Lesson 21:
  * listening to user events;
  * the `v-on` directive;
  * understanding event binding.

Lesson 22:
  * events and methods;
  * code from previous exercise reorganitation (all logic code into JS).

Lesson 23:
  * working with `event` arguments by passing them to methods.

Lesson 24:
  * using the native `event` object;
  * `event` as an argument;
  * `input` event, a default DOM event available on input elements (nothing Vue specific) also listened in vanilla JS;
  * update of a property (name, in this case) whenever it is typed in the `input` field which will be outputed in our paragraph;
  * the `$ event` (lesson 23_1).

Lesson 25:
  * exploring event modifiers;
  * `.prevent` to prevent the page reload, default;
  * `keyup` event.

Lesson 26:
  * locking content with `v-once`.

Assignment 2:
  * practice event binding.

Lesson 27:
  * `v-model`;
  * data binding + event binding = two-way binding;
  * two-way binding: because we are communicating in two ways; we are listening to an event coming out of the input element, to the input event and, at the same time, we are writing the value back to the input element through its value attribute.

Lesson 28:
  * methods used for data binding: how it works;
  * 'advanced' reactivity;
  * a better alternative to 'methods' in certain cases.

Lesson 29:
  * `computed` property.

Lesson 30:
  * working with watchers.

Lesson 31:
  * a theoretical class about methods vs computed vs watch.

Lesson 32:
  * `v-bind` and `v-on` shorthands.
  * `v-bind:` ---> `:`
  * `v-on:` ---> `@`

Assignment 3:
  * practice reactivity with computed and watch.

Lesson 33:
  * dynamic styling with inline styles.

Lesson 34:
  * adding CSS classes dynamically.

Lesson 35:
  * classes and computed properties.

Lesson 36:
  * dynamic classes: array syntax.

Assignment 4:
  * practice dynamic styling.


### Section 3: Rendering Conditional Content & Lists

Lesson 40:
  * rendering content conditionally;
  * `v-if`.

Lesson 41:
  * `v-if`, `v-else` and `v-else-if`.

Lesson 42:
  * when using `v-show`, intead of `v-if`.

Lesson 43:
  * rendering lists of data with `v-for` in an array.

Lesson 44:
  * get the index of the item in the array with `v-for`.

Lesson 45:
  * removing list items.

Lesson 46:
  * lists and `key` attribute.

Assignment 5:
  * practice conditional content and lists.


### Section 4: Course Project: The Monster Slayer Game

  * access through: [Cristiana Costa Pereira](https://github.com/CristianaCostaPereira/Monster-Slayer-Game) :octocat:


### Section 5: Vue: Behind the Scenes

Lesson 62:
  * `template` concept;
  * multiple apps concept.

Lesson 63:
  * working with `refs` (getting a value out of a DOM element).

Lesson 66:
  * lifecycle.


### Section 6: Introducing Components

Lesson 69:
  * components preview;

Lesson 70-72:
  * use of `components`;


### Section 7: Moving to a Better Development Setup & Workflow with the Vue CLI

From this section on, to run the attached code, follow these steps:

  1. Clone or fork the project named:

    vue-first-app

  2. Then, install all the required packages and dependencies:

      `cd` into your new folder and in there run:

  ```
  npm install
  ```

  This will create a `node_modules` folder.

  3. Run:

```
npm run serve
```

  To bring up the development server, view the app at `localhost:8080` (or whichever port is shown in your terminal)

Lesson 83:
  * `Vue CLI`;
  * creating a new app.

Lesson 84-85:
  * adding components.
  * adding style.


### Section 8: Component Communication

vue-first-app:
  * `props` (lesson 92) - configure the same component with different data when used multiple times;
  * passing data from our app.vue file (parent) into our FriendContact component (child) (lesson 93 - Prop Behaviour and Changing Props);
  * `$emit` (lesson 97-101) - communication from the child component to the parent

vue-section8-app:
  * lesson 103-105: avoid passing through components and props unnecessary with `provide` and `inject` to provide data in one place and use it in another place;


### Sectiom 9: Diving Deeper Into Components

vue-section9-app:
  * lesson 110: local components registration;
  * lesson 111: `scoped` styles;
  * lesson 112: `slots` - allow us to receive HTML content from outside of the component;
  * lesson 113: `v-slot` directive;
  * lesson 115: `$slots` and the v-slot: shorthand;
  * lesson 116: scoped slots;
  * lesson 117: `<component>` element: dynamic components;
  * lesson 118: `<keep-alive>` component;
  * lesson 119: build our own alert component;
  * lesson 120: `<teleport>` component;
  * lesson 121: fragment concept;


### Section 10: Course Project: The Learning Resources APP

  * access through: [Cristiana Costa Pereira](https://github.com/CristianaCostaPereira/Resources-App) :octocat:


### Section 11: Forms

vue-section11-app:
  * lesson 142: v-model and `.number` modifier;
  * lesson 143: v-model and dropdowns;
  * lesson 144: extract values from checkboxes and radio buttons with v-model and the help of `value` attribute;
  * lesson 145: basic form validation (with the `blur event`);
  * lesson 147: v-model on custom components.


### Section 12: Sending HTTP Requests

vue-section12-app:
  * lesson 153: fetch method;
  * lesson 154: sending a `POST` request to store data;
  * lesson 157: getting data (GET request) and transforming response data;
  * lesson 158: loading data when a component mounts;
  * lesson 159: 'Loading' message added;
  * lesson 160: 'No data' message added;
  * lesson 161: handling browser-side errors;
  * lesson 162: handling error responses;


### Section 13: Routing: Building "Multi-Page" Single Page Applications

vue-section13-app:
  * lesson 167: `npm install --save vue-router@next` (package we can add to our projects to add the routing functionality);
  * lesson 168: registering and rendering routes and the `router-view` component;
  * lesson 169: navigating with `router-link` component;
  * lesson 170: styling active links;
  * lesson 171: programmatic navigation with `$router`;
  * lesson 172: passing data with route params (dynamic segments);
  * lesson 173: navigation and dynamic paths with `:to`;
  * lesson 175: updating params data with `watchers`;
  * lesson 176: option of passing params as props;
  * lesson 177: `redirect` and `alias` properties, "catch all" routes and handle invalid input's;
  * lesson 178: nested routes - `children` option;
  * lesson 179: `name` and `params` properties;
  * lesson 180: `query` property;
  * lesson 181: multiple routes with named router views;
  * lesson 182: controlling scroll behaviour;
  * lesson 183-185: navigation guards;
  * lesson 186: route leave guards: `beforeRouteLeave`;
  * lesson 187: route metadata;


### Section 14: Animations and Trasitions

vue-section14-app:
  * lesson 192: basic animation with CSS transistions;
  * lesson 193: `@keyframes`;
  * lesson 195-197: `<transition>` component;
  * lesson 198: custom CSS classes names;
  * lesson 199: animating a modal;
  * lesson 200: `mode` prop and transitioning between multiple elements;
  * lesson 201: transition events;
  * lesson 202-203: building animations with JS transitions instead of CSS and disabling CSS transitions (`css` prop);
  * lesson 204-205: animating lists with `transition-group`;
  * lesson 206: animate list item movement with the special CSS class `move`;
  * lesson 207: animating route changes;


### Section 15: Vuex

vue-section15-app:
  * lesson 211: what is Vuex and why use it;
  * lesson 212: creating and using a `store`;
  * lesson 213: connecting components to state;
  * lesson 214: introducing `mutations` (a better way of changing data);
  * lesson 215: passing data to mutations with `payloads`;
  * lesson 216: introducing `getters` (a better way of getting data);
  * lesson 217-218: running `async` code with `actions` and understanding the action 'context';
  * lesson 219: `mapper` helpers;
  * lesson 220: practice mapper helpers;
  * lesson 221: organizing our store with modules;
  * lesson 222: local module state;
  * lesson 223: `namespaced`;
  * lesson 226-227: 'VueShop' challenge.


### Section 16: Main Project: Find a Coach Web APP

  * access through: [Cristiana Costa Pereira](https://github.com/CristianaCostaPereira/Find_a_Coach)


### Section 17: Vue & authentication
Whithin the scope of the Find_a_Coach app:
  * lesson 261: how authentication works in Vue apps (or any SPA);
  * lesson 262: locking / protecting backend resources (rules published in Firebase);
  * lesson 263: adding an authentication page (login and sign up);
  * lesson 264-265: adding a 'signup' action;
  * lesson 266: better UX - loading spinner and error handling;
  * lesson 267: adding a 'login' action;
  * lesson 268: attaching token to outgoing requests;
  * lesson 269: UI update based on auth state;
  * lesson 270: 'logout' action added;
  * lesson 271: authentication and routing (navigational guards included);
  * lesson 272-273: `localStorage`


### Section 18: Optimizing & Deploying Vue apps
  * lesson 278: asynchronous components (`defineAsyncComponent`) and routing - `import()`;
  * lesson 280: building the project for production: `npm run build`;
  * lesson 281: deploying the appto Firebase.


### Section 19: The Composition API - Replacing the Options API
  * lesson 284: what is and which problems does the Composition API solve;
  * lesson 285-288: data management concepts for reactive data - `refs` and `reactive`;
  * lesson 289: replacing "methods" with regular functions;

Assignment 7:
  * practice data and functions;

  * lesson 290: replacing "computed properties" with the "computed" function;
  * lesson 291: two-way-binding and the composition API;
  * lesson 292: working with watchers;

Assignment 8:
  * practice composition API core building blocks;

  * lesson 294: how to use template refs;
  * lesson 295: components, props and the composition API;
  * lesson 296: emitting custom events;
  * lesson 297: working with provide / inject;
  * lesson 298: lifecycle hooks in the composition API;