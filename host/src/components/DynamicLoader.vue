<template>
  <div v-if="error">
    Erro
  </div>
  <div v-else-if="isLoading">
    Carregando...
  </div>
  <RemoteLoader v-else-if="factory" :basename="basename" :factory="factory" />
  <div v-else>
    Não encontrado
  </div>
</template>

<script>
import MfeService from "../services/mfe-service"
import RemoteLoader from "./RemoteLoader.vue"

export default {
  name: 'DynamicLoader',
  components: { RemoteLoader },
  props: {
    basename: { type: String },
    scope: { type: String },
    module: { type: String },
    source: { type: String },
  },
  data() {
    return {
      isLoading: true,
      error: false,
      factory: null,
    }
  },
  async mounted() {
    try {
      this.isLoading = true
      this.factory = await MfeService.loadRemoteModule(this.source, this.scope, this.module)
    } catch (error) {
      this.error = true
    } finally {
      this.isLoading = false
    }
  },
}
</script>
