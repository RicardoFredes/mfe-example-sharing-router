<template>
  <RemoteLoader
    :basename="name"
    :factory="factory"
  />
</template>

<script>
import factory from "remote3/app"
import RemoteLoader from "./RemoteLoader.vue"

export default {
  name: 'Remote3',
  components: { RemoteLoader },
  data() {
    return {
      name: 'remote3',
      factory
    }
  }
}
</script>
