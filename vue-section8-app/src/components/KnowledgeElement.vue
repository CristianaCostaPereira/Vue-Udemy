<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // expect to get the function that should be call when the button is press as as injected value ans bind it to the click above
  // so I expect that selectTopic is a function, which is then executed when a click occurs
  inject: ['selectTopic'],
  props: ['id', 'topicName', 'description'],
};
</script>