<template>
  <div class="sidebar">
    <template v-for="(item, id) of groups">
      <h3 :key="id">{{ item.label }}</h3>
      <template v-for="(link, key) of item.links">
        <router-link :to="link.href" :key="`${id}.${key}`">
          <span v-if="link.onClick" @click="link.onClick">{{ link.label }}</span>
          <template v-else>{{ link.label }}</template>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      id: '3',
    }
  },
  computed: {
    remote2Link() {
      return `/remote2/page?id=${this.id}`
    },
    remote4Link() {
      return `/remote4/page?id=${this.id}`
    },
    groups() {
      return [
        {
          label: 'HOST',
          links: [
            { label: 'Host: Home', href: '/' },
            { label: 'Host: Page', href: '/page' },
          ]
        },
        {
          label: 'Remote1',
          links: [
            { label: 'Remote1: Home', href: '/remote1' },
            { label: 'Remote1: Page', href: '/remote1/page' },
          ]
        },
        {
          label: 'Remote2',
          links: [
            { label: 'Remote2: Home', href: '/remote2' },
            { label: 'Remote2: Home child', href: '/remote2/home' },
            { label: 'Remote2: Page', href: '/remote2/page' },
            { label: 'Remote2: Page with query', href: this.remote2Link, onClick: this.randomId },
          ]
        },
        {
          label: 'Remote3',
          links: [
            { label: 'Remote3: Home', href: '/remote3' },
            { label: 'Remote3: Page', href: '/remote3/page' },
          ]
        },
        {
          label: 'Remote4',
          links: [
            { label: 'Remote4: Home', href: '/remote4' },
            { label: 'Remote4: Page', href: '/remote4/page' },
            { label: 'Remote4: Page with query', href: this.remote4Link, onClick: this.randomId },
          ]
        }
      ]
    }
  },
  methods: {
    randomId() {
      this.id = (Math.random() * 100).toFixed()
    },
  }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar h3:not(:first-child) {
  margin-top: 24px;
}
</style>
