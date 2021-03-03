<template lang="pug">
.home-page-wrapper
  component(is='PainelGestor')
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    SolicitacaoDeAcesso: () =>
      import('@/components/partials/SolicitacaoDeAcesso'),
    MeuPerfil: () => import('@/components/partials/MeuPerfil'),
    PainelGestor: () => import('@/components/partials/PainelGestor'),
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
