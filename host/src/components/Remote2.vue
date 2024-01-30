<template>
  <DynamicLoader
    :basename="name"
    :scope="name"
    :source="remoteEntry"
  />
</template>

<script>
import DynamicLoader from "./DynamicLoader.vue"

export default {
  name: 'Remote2',
  components: { DynamicLoader },
  data() {
    return {
      name: 'remote2',
      remoteEntry: 'http://localhost:8092/remoteEntry.js'
    }
  }
}
</script>
