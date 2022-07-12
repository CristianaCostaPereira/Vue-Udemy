<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // expect to get the function that should be called when the button is press as an injected value and bind it to the click above
  // so I expect that selectTopic, is a FUNCTION, which is then executed when a click occurs
  inject: ['selectTopic'],
  props: ['id', 'topicName', 'description'],
};
</script>