<template lang="pug">
.meu-perfil-wrapper.tw-mt-5.tw-px-4
  perfil-form-default(:data='perfil')
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4(type='is-success') {{ $t("update") }}
  collapse.tw-text-sm(:title='$t("accessProfile")')
    detail-table(:data='tree')
  collapse.tw-text-sm(:title='$t("customerView")')
</template>

<script>
export default {
  name: 'MeuPerfil',
  components: {
    Collapse: () => import('@/components/Collapse'),
    DetailTable: () => import('@/components/DetailTable'),
    PerfilFormDefault: () => import('@/components/partials/PerfilFormDefault'),
  },
  props: {},
  data() {
    const perfil = require('@/jsons/perfil.json')
    const tree = require('@/jsons/directory.json')
    return { tree, perfil }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.meu-perfil-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @media screen and(min-width: 1500px) {
      grid-template-columns: repeat(4, minmax(300px, 1fr));
    }
  }
}
</style>

<style lang="scss">
.meu-perfil-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
