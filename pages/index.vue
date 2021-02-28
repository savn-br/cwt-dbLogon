<template lang="pug">
.home-page-wrapper
  component(is='SolicitacaoDeAcesso')
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    SolicitacaoDeAcesso: () =>
      import('@/components/partials/SolicitacaoDeAcesso'),
    MeuPerfil: () => import('@/components/partials/MeuPerfil'),
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>
