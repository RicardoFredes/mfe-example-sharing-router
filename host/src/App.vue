<template>
  <div class="host">
    <header></header>
    <aside>
      <Navigation />
    </aside>
    <main>
      <h1>Host</h1>
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: { Navigation }
}
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3 {
  margin: 0;
}

a,
a:visited {
  color: blue;
}

a.active::before {
  content: '-> '
}

.host {
  display: grid;
  grid-template:
    "nav nav" 64px
    "sidebar main" 1fr
    / 280px 1fr;
  gap: 4px;
  min-height: 100vh;
}

.host>header {
  grid-area: nav;
  background-color: lightgrey;
}

.host>aside {
  background-color: lightgrey;
  grid-area: sidebar;
  padding: 24px;
}

.host>main {
  grid-area: main;
  padding: 24px;
}

.host>main>section {
  padding: 24px;
  border: 1px solid lightgrey;
  min-height: 500px;
}
</style>
