<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <slot></slot> <!-- Use our own component as a wrapper around different kinds of HTML content -->
  </div>
</template>

<style scoped>
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
