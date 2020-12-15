<template>
  <section>
    <base-card>
    <!-- v-slot directive is used to let Vue know that the content inside of the template will go to the argument added -->
    <!-- #header is shorthand for v-slot:header -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge
          :type="role"
          :caption="role.toUpperCase()">
        </base-badge>
      </template>

      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>