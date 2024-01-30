<template>
  <div>
    <div ref="remote">
      Carregando...
    </div>
  </div>
</template>

<script>
import factory from 'remote4/app'
import ReactRouterService from '@/services/react-router-service'

export default {
  name: 'Remote4',
  data() {
    return {
      basename: 'remote4',
      remote: null,
      preventHostSync: false,
      preventRemoteSync: false,
      removeRemoteEvent: () => { },
      removeHostEvent: () => { },
    }
  },
  async mounted() {
    this.remote = factory({ el: this.$refs.remote, basename: this.basename });

    // esse bloco garante que a aplicação remota sincronize o roteamento no primeiro render
    const pathname = ReactRouterService.toPathname(this.$router.currentRoute)
    this.remote.$router.replace(pathname)

    this.removeRemoteEvent = this.remote.$router.beforeEach(this.remoteRouteChange)
    this.removeHostEvent = this.$router.beforeEach(this.hostRouteChange)
  },
  beforeDestroy() {
    this.removeHostEvent()
    this.removeRemoteEvent()
    this.remote.$destroy()
  },
  methods: {
    hostRouteChange(to, _, next) {
      const isRemoteOut = !new RegExp(this.basename).test(to.path)

      if (isRemoteOut) return next()

      if (this.preventHostSync) {
        this.preventHostSync = false
        return next()
      }

      const pathname = ReactRouterService.toPathname(to)
      this.remote.$router.replace(pathname)

      return next()
    },

    remoteRouteChange({ pathname, isReplace = false }) {
      const location = ReactRouterService.toLocation(pathname)

      this.preventHostSync = true

      if (isReplace) this.$router.replace(location)
      else this.$router.push(location)

    }
  }
}
</script>
