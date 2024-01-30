<template>
  <div>
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
  name: 'Navigation',
}
</script>
