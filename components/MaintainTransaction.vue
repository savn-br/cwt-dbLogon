<template lang="pug">
#maintainTransaction.maintain-transaction-wrapper.tw-p-4.tw-shadow.tw-mb-4.tw-max-w-2xl.tw-mx-auto
  .description-wrapper.tw-flex.tw-font-bold
    .d-select.tw-w-20.tw-mr-4 Selecionar
    .name.tw-mb-2
      | System
      b-icon.tw-mx-1.system-color(icon='arrow-right-circle', size='is-small')
      | / Module
      b-icon.tw-mx-1.module-color(icon='arrow-right-circle', size='is-small')
      | / Transaction
      b-icon.tw-mx-1.transaction-color(
        icon='arrow-right-circle',
        size='is-small'
      )
  .systems(v-for='(system, index) in systems')
    .systems-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
      b-checkbox.tw-w-20(
        :value='system.selected',
        @input='(status) => handleChangeSystem(system.systemId, status)'
      )
      .system-name.tw-ml-2
        b-icon.tw-mr-1.system-color(icon='arrow-right-circle', size='is-small')
        | {{ system.systemName }}
    .modules(v-for='(module, index) in system.modules')
      .modules-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
        b-checkbox.tw-w-20(
          :value='module.selected',
          @input='(status) => handleChangeModule(module.moduleId, status)'
        )
        .module-name.tw-ml-8
          b-icon.tw-mr-1.module-color(
            icon='arrow-right-circle',
            size='is-small'
          )
          | {{ module.moduleName }}
      .transactions(v-for='(transaction, index) in module.transactions')
        .transactions-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
          b-checkbox.tw-w-20(
            :value='transaction.selected',
            @input='(status) => handleChangeTransaction(transaction.transactionId, status)'
          )
          .module-name.tw-ml-16
            b-icon.tw-mr-1.transaction-color(
              icon='arrow-right-circle',
              size='is-small'
            )
            | {{ transaction.transactionName }}
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
    await this.getMaintainTransactions()
  },
  created() {},
  methods: {
    ...mapActions(['getMaintainTransactions']),
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

<style lang="scss">
.maintain-transaction-wrapper {
  .system-color {
    color: #ea3636;
  }
  .module-color {
    color: #44b344;
  }
  .transaction-color {
    color: #5e5ecd;
  }
}
</style>
