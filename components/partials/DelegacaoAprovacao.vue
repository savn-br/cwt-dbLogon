<template lang="pug">
.delegacao-aprovacao-wrapper.tw-mt-8.tw-px-5
  .button-primary.tw-flex.tw-justify-end
    b-button(type='is-primary') Adicionar
  b-table.tw-mt-5(:data='data', :bordered='true')
    b-table-column(
      field='matricula',
      label='Matricula Delegado',
      v-slot='props'
    )
      | {{ props.row.matricula }}
    b-table-column(
      field='name',
      label='Nome aprovador Delegado',
      v-slot='props'
    )
      | {{ props.row.name }}
    b-table-column(field='initial_date', label='Data inicial', v-slot='props')
      | {{ props.row.initial_date }}
    b-table-column(field='end_date', label='Data final', v-slot='props')
      | {{ props.row.end_date }}
    b-table-column(, label='Operação', v-slot='props')
      b-field
        b-switch(
          true-value='on',
          false-value='off',
          v-model='props.row.operation'
        ) {{ props.row.operation }}
</template>

<script>
export default {
  name: 'DelegacaoAprovacao',
  components: {},
  props: {},
  data() {
    return {
      data: require('@/jsons/approval.json'),
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.delegacao-aprovacao-wrapper {
}
</style>
