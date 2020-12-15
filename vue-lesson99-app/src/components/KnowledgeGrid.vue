<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // inject basically works like props, we reference all the provided data we want to use in this component
  // in here, because is where we need the 'topics'
  // We can only inject what has been provided on a higher-up level (a PARENT component or an ancestor component of KnowledgeGrid)
  inject: ['topics'],
};
</script>