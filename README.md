# Vue-Udemy
The Vue.js course from Udemy - The Complete Guide (with Router, Vuex, Composition API).

Lesson 5 (Section 1 of the course):
    * starts the first pratical exercise in which we create an
    app using only JS.

Lesson 6 (Section 1):
    * re-building the previous app with Vue.

Lesson 13-15 (Section 2):
    * class 13 - creating and connecting Vue App instances;
    * class 14 - interpolation and data binging;
    * class 15 - binding attributes with the `v-bind` directive.

Lesson 16 (Section 2):
    * added a bit dynamism to the app (whenever it is reloaded, randomly changes the text content);
    * understanding "methods" in Vue apps.

Lesson 17 (Section 2):
    * working with data inside of a Vue app.

Lesson 18 (Section 2):
    * outputting raw HTML content with `v-html`;
    * not needed to often, and should not be used as a default because we can introduce security issues because we basically circumvent the built in cross site scripting attack protection we have with the double curly braces.

Assignment 1 section 2:
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

Assignment 2 section 2:
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

Assignment 3 section 2:
    * practive reactivity with computed and watch p

Lesson 32:
    * dynamic styling with inline styles.

Lesson 33:
    * adding CSS classes dynamically.

Lesson 34:
    * classes and computed properties.