<template lang="pug">
.home-page-wrapper
  component(is='AtribuicaoPerfil')
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    SolicitacaoDeAcesso: () =>
      import('@/components/partials/SolicitacaoDeAcesso'),
    MeuPerfil: () => import('@/components/partials/MeuPerfil'),
    PainelGestor: () => import('@/components/partials/PainelGestor'),
    BloquearUsuario: () => import('@/components/partials/BloquearUsuario'),
    DelegacaoAprovacao: () =>
      import('@/components/partials/DelegacaoAprovacao'),
    AtribuicaoPerfil: () => import('@/components/partials/AtribuicaoPerfil'),
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.$nuxt.$emit('menuType', 'MenuGestor')
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
