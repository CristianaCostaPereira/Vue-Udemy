<template>
  <div>
    <div class="container">
      <!-- When animatedBlock is true the animate class will be added  -->
      <div class="block" :class="{animate: animatedBlock}"></div>
      <button @click="animateBlock">Animate</button>
    </div>

    <base-modal @close="hideDialog" v-if="dialogIsVisible">
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
      dialogIsVisible: false
      };
  },

  methods: {
    animateBlock() {
      this.animatedBlock = true;
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
  /* transform: translateX(-150px); Move elements around in an optimazed way */
  animation: slide-fade 0.3s ease-out forwards ;
}

/* Define in detail how animation should behave */
@keyframes slide-fade {
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