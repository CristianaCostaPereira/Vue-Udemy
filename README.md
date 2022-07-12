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

    vue-first-app :octocat:

  2. Then install all the required packages and dependencies:

    `cd` into your new folder and run:
```
npm install
```
  This will create a `node_modules` folder.

  3. Run:
```
npm run serve
```
  to bring up the development server, view the app at `localhost:8080` (or whichever port is shown in your terminal)

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
  * tool very useful for letting components communicate.


### Sectiom 9: Diving Deeper Into Components

vue-section9-app:
  * lesson 107: local components registration;
  * lesson 108: `scoped` styles;
  * lesson 109: `slots` - allow us to receive HTML content from outside of the component;
  * lesson 110: `v-slot` directive;
  * lesson 112: `$slots` and the v-slot: shorthand;
  * lesson 113: scoped props;
  * lesson 114: `<component>` element: dynamic components;
  * lesson 115: `<keep-alive>` component;
  * lesson 116: build our own alert component;
  * lesson 117: `<teleport>` component;
  * lesson 118: fragment concept;


### Section 10: Course Project: The Learning Resources APP

  * access through: [Cristiana Costa Pereira](https://github.com/CristianaCostaPereira/Resources-App) :octocat:


### Section 11: Forms

vue-section11-app:
  * lesson 139: v-model and `.number` modifier;
  * lesson 140: v-model and dropdowns;
  * lesson 141: extract values from checkboxes and radio buttons with v-model and the help of `value` attribute;
  * lesson 142: basic form validation (with the `blue event`);
  * lesson 144: v-model on custom components.


### Section 12: Sending HTTP Requests

vue-section12-app:
  * lesson 150: fetch method;
  * lesson 151: sending a `POST` request to store data;
  * lesson 154: getting data (GET request) and transforming response data;
  * lesson 155: loading data when a component mounts;
  * lesson 156: 'Loading' message added;
  * lesson 157: 'No data' message added;
  * lesson 158: handling browser-side errors;
  * lesson 159: handling error responses;


### Section 13: Routing: Building "Multi-Page" Single Page Applications

vue-section13-app:
  * lesson 164: `npm install --save vue-router@next` (package we can add to our projects to add the routing functionality);
  * lesson 165: registering and rendering routes and the `router-view` component;
  * lesson 166: navigating with `router-link` component;
  * lesson 167: styling active links;
  * lesson 168: programmatic navigation with `$router`;
  * lesson 169: passing data with route params (dynamic segments);
  * lesson 170: navigation and dynamic paths;
  * lesson 173: option of passing params as props;
  * lesson 174: `redirect` and `alias` properties, "catch all" routes and handle invalid input's;
  * lesson 175: nested routes - `children` option;
  * lesson 176: `name` and `params` property;
  * lesson 177: `query` property;
  * lesson 178: multiple routes with named router views;
  * lesson 179: controlling scroll behaviour;
  * lesson 180-182: navigation guards;
  * lesson 183: route leave guards: `beforeRouteLeave`;
  * lesson 184: route metadata;


  ### Section 14: Animations and Trasitions

vue-section14-app:
  * lesson 189: basic animation with CSS transistions;
  * lesson 190: `@keyframes`;
  * lesson 192-193: `<transition>` component;
  * lesson 195: custom CSS classes names;
  * lesson 196: animating a modal;
  * lesson 197: `mode` prop and transitioning between multiple elements;
  * lesson 198: transition events;
  * lesson 199-200: building animations with JS transitions instead of CSS and disabling CSS transitions (`css` prop);
  * lesson 201-202: animating lists with `tansition-group`;
  * lesson 203: animate list item movement with the special CSS class `move`;
  * lesson 204: animating route changes;