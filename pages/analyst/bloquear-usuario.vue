<template lang="pug">
.home-page-wrapper
  component(is='BloquearUsuario')
</template>

<script>
export default {
  name: 'Analyst',
  components: {
    SolicitacaoDeAcesso: () =>
      import('@/components/partials/SolicitacaoDeAcesso'),
    MeuPerfil: () => import('@/components/partials/MeuPerfil'),
    PainelGestor: () => import('@/components/partials/PainelGestor'),
    BloquearUsuario: () => import('@/components/partials/BloquearUsuario'),
    DelegacaoAprovacao: () =>
      import('@/components/partials/DelegacaoAprovacao'),
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.$nuxt.$emit('menuType', 'MenuAnalista')
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>
