<template>
  <div id="remote3">
    <h2>Remote 3</h2>
    <router-view></router-view>
    <hr />
    <router-link to="/">Host: Home</router-link>
    <br />
    <router-link to="/page">Host: Page</router-link>
    <br />
    <br />
    <router-link to="/remote1">Remote1: Home</router-link>
    <br />
    <router-link to="/remote1/page">Remote1: Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
