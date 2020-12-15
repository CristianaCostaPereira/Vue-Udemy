# Vue-Udemy
The Vue.js course from Udemy - The Complete Guide (with Router, Vuex, Composition API).

### Section 1: Getting Started

Lesson 5
  * starts the first pratical exercise in which we create an
  app using only JS.

Lesson 6
  * re-building the previous app with Vue.

### Section 2: Basics & Core Concepts - DOM Interaction with Vue

Lesson 13-15:
  * class 13 - creating and connecting Vue App instances;
  * class 14 - interpolation and data binging;
  * class 15 - binding attributes with the `v-bind` directive.

Lesson 16
  * added a bit dynamism to the app (whenever it is reloaded, randomly changes the text content);
  * understanding "methods" in Vue apps.

Lesson 17:
  * working with data inside of a Vue app.

Lesson 18:
  * outputting raw HTML content with `v-html`;
  * not needed to often, and should not be used as a default because we can introduce security issues because we basically circumvent the built in cross site scripting attack protection we have with the double curly braces.

Assignment 1:
  * put in practice what was learned so far (data binding).

Lesson 20:
  * listening to user events;
  * the `v-on` directive;
  * understanding event binding.

Lesson 21:
  * events and methods;
  * code from previous exercise reorganitation (all logic code into JS).

Lesson 22:
  * working with event arguments by passing them to methods.

Lesson 23:
  * using the native `event` object;
  * `event` as an argument;
  * `input` event, a default DOM event available on input elements (nothing Vue specific) also listened in vanilla JS;
  * update of a property (name, in this case) whenever it is typed in the `input` field which will be outputed in our paragraph;
  * the `$ event` (lesson 23_1).

Lesson 24:
  * exploring event modifiers;
  * `.prevent` to prevent the page reload, default;
  * `keyup` event.

Lesson 25:
  * locking content with `v-once`.

Assignment 2:
  * practice event binding.

Lesson 26:
  * `v-model`;
  * data binding + event binding = two-way binding;
  * two-way binding: because we are communicating in two ways; we are listening to an event coming out of the input element to the input event and, at the same time, we are writing the value back to the input element through its value attribute.

Lesson 27:
  * methods used for data binding: how it works;
  * 'advanced' reactivity;
  * a better alternative to 'methods' in certain cases.

Lesson 28:
  * `computed` property.

Lesson 29:
  * working with watchers.

Lesson 30:
  * a theoretical class about methods vs computed vs watch.

Lesson 31:
  * `v-bind` and `v-on` shorthands.
  * `v-bind:` ---> `:`
  * `v-on:` ---> `@`

Assignment 3:
  * practice reactivity with computed and watch.

Lesson 32:
  * dynamic styling with inline styles.

Lesson 33:
  * adding CSS classes dynamically.

Lesson 34:
  * classes and computed properties.

Lesson 35:
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


### Section 7: Moving to a Better Development Setuo & Workflow with the Vue CLI

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
  * `props` (lesson 89) - configure the same component with different data when used multiple times;
  * passing data from our app.vue file (parent) into our FriendContact component (child);
  * `$emit` (lesson 94) - communication from the component to the parent

vue-section8-app:
  * lesson 99: avoid passing through components and props unnecessary with `provide` and `inject` to provide data in one place and use it in another place;

  * tool very useful for letting components communicate.

### Sectiom 9: Diving Deeper Into Components
  * lesson 107: local components registration;
  * lesson 108: `scoped` styles;
  * lesson 109: `slots` - allow us to receive HTML content from outside of the component;
  * lesson 110: `v-slot` directive;