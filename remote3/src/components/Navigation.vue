<template>
  <div>
    <hr />
    <router-link to="/">Host: Home</router-link>
    <br />
    <router-link to="/page">Host: Page</router-link>
    <br />
    <br />
    <router-link to="/remote3">Remote3: Home</router-link>
    <br />
    <router-link to="/remote3/page">Remote3: Page</router-link>
    <br />
    <br />
    <button @click="handleClick">Replace method</button>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    handleClick() {
      const id = (Math.random() * 100).toFixed()
      this.$router.replace(`/remote3/page/?id=${id}`)
    }
  }
}
</script>
