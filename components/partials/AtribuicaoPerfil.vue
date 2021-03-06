<template lang="pug">
.atribuicao-perfil-wrapper.tw-mt-6.tw-px-4
  perfil-form-default(:data='perfil')
    template(v-slot:content)
      b-checkbox.tw-m-5(v-model='perfil.ativo') Ativo
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4.tw-w-32(type='is-success') {{ $t("update") }}
  .view-perfil
    .button-wrapper.tw-flex.tw-justify-end
      b-button.tw-w-24(type='is-primary') {{ $t("add") }}
    table-default(:data='atribuicao')
      b-table-column(
        field='codigo_perfil',
        :label='$t("perfilCode")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.codigo_perfil }}
      b-table-column(
        field='descricao_perfil',
        :label='$t("perfilDescription")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.descricao_perfil }}
      b-table-column(
        field='initial_date',
        :label='$t("initialDate")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.initial_date }}
      b-table-column(
        field='final_date',
        :label='$t("finalDate")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.final_date }}
      b-table-column(
        ,
        :label='$t("operation")',
        v-slot='props',
        :centered='true'
      )
        .actions-wrapper.tw-flex.tw-justify-center
          b-field
            b-switch(
              size='is-small',
              true-value='on',
              false-value='off',
              v-model='props.row.operation'
            ) {{ props.row.operation }}
          a(href='#')
            b-icon.tw-cursor-pointer(icon='eye', size='')
    .view-vendas.tw-mt-6
      .button-wrapper.tw-flex.tw-justify-end
        b-button.tw-w-24(type='is-primary') {{ $t("add") }}
      table-default(:data='vendas')
        b-table-column(
          field='descricao_venda',
          :label='$t("salesName")',
          v-slot='props',
          width='80%'
        )
          span.tw-text-xs {{ props.row.descricao_venda }}
        b-table-column(
          :label='$t("operation")',
          v-slot='props',
          :centered='true'
        )
          .actions-wrapper.tw-flex.tw-justify-center
            b-field
              b-switch(
                size='is-small',
                true-value='on',
                false-value='off',
                v-model='props.row.operation'
              ) {{ props.row.operation }}
            a(href='#')
              b-icon.tw-cursor-pointer(icon='eye', size='')
</template>

<script>
export default {
  name: 'AtribuicaoPerfil',
  components: {
    PerfilFormDefault: () => import('@/components/partials/PerfilFormDefault'),
    TableDefault: () => import('@/components/TableDefault'),
  },
  props: {},
  data() {
    return {
      perfil: require('@/jsons/perfil.json'),
      atribuicao: require('@/jsons/atribuicao.json'),
      vendas: require('@/jsons/vendas.json'),
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
.atribuicao-perfil-wrapper {
}
</style>
