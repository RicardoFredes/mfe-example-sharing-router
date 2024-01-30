<template>
  <div id="remote2">
    <h2>Remote 2</h2>
    <router-view></router-view>
    <hr />
    <router-link to="/">Host: Home</router-link>
    <br />
    <router-link to="/page">Host: Page</router-link>
    <br />
    <br />
    <router-link to="/remote2">Remote2: Home</router-link>
    <br />
    <router-link to="/remote2/home">Remote2: Home Child</router-link>
    <br />
    <router-link to="/remote2/page">Remote2: Page</router-link>
    <br />
    <br />
    <button @click="handleClick">Replace method</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      const id = (Math.random() * 100).toFixed()
      this.$router.replace(`/remote2/page/?id=${id}`)
    }
  }
}
</script>

<style scoped>
#remote2 h2 {
  background-color: lightblue;
  padding: 8px;
  margin: 0 -8px 8px;
}
</style>
