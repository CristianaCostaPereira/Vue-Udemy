<template>
  <div>
    <!-- $slots we can check weather we do receive data for a specific slot and if we don't we could use that info to not render a certain element -->
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>

    <slot></slot> <!-- Use our own component as a wrapper around different kinds of HTML content -->
  </div>
</template>

<script>
export default {
  // In the component where we define slots
  mounted() {
    console.log(this.$slots.header);
  }
}
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>

<!-- If we use more than one slot, we can add name to distinguish our slots, like we did in our template -->
<!-- If we leave one unnamed slot (and can only be one) it will be the default slot -->