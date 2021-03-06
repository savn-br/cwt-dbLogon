<template lang="pug">
.solicitacao-de-acesso-wrapper.tw-px-4
  steps
  perfil-form-default(:data='perfil')
  .update-buttons.tw-flex.tw-justify-center(class='sm:tw-justify-end')
    b-button.tw-mx-2(type='is-success') {{ $t("update") }}
    b-button.tw-mx-2(type='is-primary') {{ $t("requestAccess") }}
  .logs.tw-mt-2.tw-mb-4
    h1 Status
    table-default(:data='data', , :bordered='true')
      b-table-column(field='date', :label='$t("date")', v-slot='props')
        span.tw-text-xs {{ props.row.date }}
      b-table-column(field='action', :label='$t("action")', v-slot='props')
        span.tw-text-xs {{ props.row.action }}
</template>

<script>
export default {
  name: 'SolicitacaoDeAcesso',
  components: {
    TableDefault: () => import('@/components/TableDefault'),
    PerfilFormDefault: () => import('@/components/partials/PerfilFormDefault'),
  },
  data() {
    const table = Object.assign(require('@/jsons/statusTable.json'))
    return {
      perfil: require('@/jsons/perfil.json'),
      ...table,
    }
  },
  computed: {
    Steps: () => import('@/components/Steps'),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.solicitacao-de-acesso-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.solicitacao-de-acesso-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
