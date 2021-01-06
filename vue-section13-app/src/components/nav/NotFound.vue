<template>
  <h2>
    Sorry, page not found 😓! Maybe check our&nbsp;
    <router-link to="/teams">Teams</router-link>?
  </h2>
</template>

<!-- &nbsp is an entity that allows me to have a non-breaking space -->

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 40px;
  height: 100%;
}
</style>