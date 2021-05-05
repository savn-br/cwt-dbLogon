<template lang="pug">
#maintainTransaction.maintain-transaction-wrapper.tw-p-4.tw-shadow.tw-mb-4.tw-max-w-2xl.tw-mx-auto
  .description-wrapper.tw-flex.tw-font-bold
    .d-select.tw-w-24.tw-mr-4 Selecionar
    .name System / Module / Transaction
  .systems(v-for='(system, index) in systems')
    .systems-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
      b-checkbox.tw-w-24(
        :value='system.selected',
        @input='(status) => handleChangeSystem(system.systemId, status)'
      )
      .system-name.tw-ml-2 {{ system.systemName }}
    .modules(v-for='(module, index) in system.modules')
      .modules-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
        b-checkbox.tw-w-24(
          :value='module.selected',
          @input='(status) => handleChangeModule(module.moduleId, status)'
        )
        .module-name.tw-ml-8 {{ module.moduleName }}
      .transactions(v-for='(transaction, index) in module.transactions')
        .transactions-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
          b-checkbox.tw-w-24(
            :value='transaction.selected',
            @input='(status) => handleChangeTransaction(transaction.transactionId, status)'
          )
          .module-name.tw-ml-16 {{ transaction.transactionName }}
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'MaintainTransaction',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      systems: (state) => state.maintainTransactions,
    }),
  },
  watch: {},
  async mounted() {
    await this.getMaintaintransactions()
  },
  created() {},
  methods: {
    ...mapActions(['getMaintaintransactions']),
    ...mapMutations([
      'updateMaintainTransactionsTransaction',
      'updateMaintainTransactionModule',
      'updateMaintainTransactionSystem',
    ]),

    handleChangeTransaction(transactionId, status) {
      this.updateMaintainTransactionsTransaction({ transactionId, status })
    },
    handleChangeModule(moduleId, status) {
      this.updateMaintainTransactionModule({ moduleId, status })
    },
    handleChangeSystem(systemId, status) {
      this.updateMaintainTransactionSystem({
        systemId: systemId.toString(),
        status,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-transaction-wrapper {
}
</style>
