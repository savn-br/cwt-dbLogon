<template lang="pug">
#maintainTransaction.maintain-transaction-wrapper.tw-p-4.tw-shadow.tw-mb-4.tw-max-w-2xl.tw-mx-auto
  .description-wrapper.tw-flex.tw-font-bold
    .d-select.tw-w-24.tw-mr-4 Selecionar
    .name System / Module / Transaction
  .systems(v-for='(system, index) in systems')
    .systems-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
      b-checkbox.tw-w-24(:value='system.selected')
      .system-name.tw-ml-2 {{ system.systemName }}
    .modules(v-for='(module, index) in system.modules')
      .modules-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
        b-checkbox.tw-w-24(:value='module.selected')
        .module-name.tw-ml-6 {{ module.moduleName }}
      .transactions(v-for='(transaction, index) in module.transactions')
        .transactions-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
          b-checkbox.tw-w-24(:value='transaction.selected')
          .module-name.tw-ml-10 {{ transaction.transactionName }}
</template>

<script>
export default {
  name: 'MaintainTransaction',
  components: {},
  props: {},
  data() {
    return {
      systems: require('@/jsons/data.json'),
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
.maintain-transaction-wrapper {
}
</style>
