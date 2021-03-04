<template lang="pug">
.delegacao-aprovacao-wrapper.tw-mt-8.tw-px-5
  .button-primary.tw-flex.tw-justify-end
    b-button(type='is-primary') {{ $t("add") }}
  table-default.tw-mt-5(
    :data='data',
    :bordered='true',
    :narrowed='true',
    :hoverable='true'
  )
    b-table-column(
      field='matricula',
      :label='$t("delegateRegistration")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.matricula }}
    b-table-column(
      field='name',
      :label='$t("delegateApproverName")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.name }}
    b-table-column(
      field='initial_date',
      :label='$t("initialDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.initial_date }}
    b-table-column(field='end_date', :label='$t("finalDate")', v-slot='props')
      span.tw-text-xs {{ props.row.end_date }}
    b-table-column(
      ,
      :label='$t("operation")',
      v-slot='props',
      :centered='true'
    )
      b-field
        b-switch(
          size='is-small',
          true-value='on',
          false-value='off',
          v-model='props.row.operation'
        ) {{ props.row.operation }}
</template>

<script>
export default {
  name: 'DelegacaoAprovacao',
  components: {
    TableDefault: () => import('@/components/TableDefault'),
  },
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
