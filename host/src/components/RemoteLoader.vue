<template>
  <div>
    <div ref="remote">
      Carregando...
    </div>
  </div>
</template>

<script>
import VueRouterService from "../services/vue-router-service"

export default {
  name: 'RemoteLoader',
  props: {
    factory: { type: Function },
    basename: { type: String },
  },
  data() {
    return {
      remote: null,
      forceSync: false,
      removeRemoteEvent: () => { },
      removeHostEvent: () => { },
    }
  },
  mounted() {
    this.remote = this.factory({ el: this.$refs.remote, basename: this.basename });

    const isAbstractRouterMode = this.remote.$router.mode = 'abstract'
    if (isAbstractRouterMode) {
      // esse bloco garante que a aplicação remota sincronize o roteamento no primeiro render
      const { path, query, hash } = this.$router.currentRoute
      this.remote.$router.replace({ path, query, hash })
    }

    VueRouterService.extendsRouter(this.remote.$router)

    this.removeRemoteEvent = this.remote.$router.beforeEach(this.beforeRouteChange(this.$router))
    this.removeHostEvent = this.$router.beforeEach(this.beforeRouteChange(this.remote.$router))
  },
  beforeDestroy() {
    this.removeRemoteEvent()
    this.removeHostEvent()
    this.remote.$destroy()
  },
  methods: {
    beforeRouteChange(externalRouter) {
      return (to, _, next) => {
        const externalRoute = externalRouter?.currentRoute
        const isRemoteOut = !new RegExp(this.basename).test(to.path)
        const shouldSync = isRemoteOut || VueRouterService.hasRoutesDiff(to, externalRoute)

        if (this.forceSync) {
          this.forceSync = false
          return next()
        }

        if (!externalRouter) return next()

        if (shouldSync) {
          this.forceSync = true
          const { path, query, hash, params } = to
          const isReplace = !!query._replace
          if (isReplace) {
            delete query._replace
            externalRouter.replace({ path, query, hash, params })
          } else {
            externalRouter.push({ path, query, hash, params })
          }
        }

        return next()
      }
    }
  }
}
</script>
