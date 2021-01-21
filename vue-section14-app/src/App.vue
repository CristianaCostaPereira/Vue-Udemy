<template>
  <div>
    <div class="container">
      <!-- When animatedBlock is true the animate class will be added -->
      <div class="block" :class="{animate: animatedBlock}"></div>
      <button @click="animateBlock">Animate</button>
    </div>

    <div class="container">
      <!-- transition will manipulate our wrapped element so we will be able to animate (control) the apperance and removal of HTML elements with Vue -->
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
      </transition>
        <button @click="toggleParagraph">Toggle paragraph</button>
    </div>

    <!-- This is the exception were we are allowed to have more than one direct child element inside of the transition component -->
    <!-- EXCEPTION: if of the child elements we have in our transition we garantee that ONLY one is added to the real DOM at the same time -->
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show Users 👩‍💼</button>
        <button @click="hideUsers" v-else>Hide Users  👤</button>
      </transition>  
    </div>

    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
</div>
</template>  

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
      };
  },

  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },

    // Executes when the enter animation starts (when .paragraph-enter-from is being added)
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);

      el.style.opacity = 0;
    },

    enter(el, done) {
      console.log('enter');
      console.log(el);

      let round = 1;

      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },

    // Only call when the animation finishes
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },

    // When the element is leaving the DOM
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);

      el.style.opacity = 1;
    },

    leave(el, done) {
      console.log('leave');
      console.log(el);

      let round = 1;

      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },

    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },

    enterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },

    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },

    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },

    showUsers() {
      this.usersAreVisible = true;
    },

    hideUsers() {
      this.usersAreVisible = false;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },

    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; Name of the property we want to animate, its durantion and his accelaration */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards ;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* Define in detail how animation should behave */
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>