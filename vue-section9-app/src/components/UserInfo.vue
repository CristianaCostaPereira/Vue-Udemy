<template>
  <section>
    <base-card>
    <!-- v-slot directive is used to let Vue know that the content inside of the template will go to the argument added -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge
          :type="role"
          :caption="role.toUpperCase()">
        </base-badge>
      </template>

      <template v-slot:default>
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

<style scoped> /* SCOPED tells VUE that the styles defined in here should only affect the template created in this file */
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>