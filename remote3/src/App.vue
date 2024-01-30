<template>
  <main id="remote3">
    <h2>Remote 3</h2>
    <router-view></router-view>
    <Navigation />
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style scoped>
#remote3 h2 {
  background-color: lightpink;
  padding: 8px;
  margin: 0 -8px 8px;
}
</style>
