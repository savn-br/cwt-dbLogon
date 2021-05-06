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
  .systems(v-for='(system, systemIdx) in systems')
    .systems-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
      b-checkbox.tw-w-20(
        :value='system.selected',
        @input='(status) => handleChangeSystem(system.systemId, systemIdx, status)'
      )
      .system-name.tw-ml-2.tw-flex.tw-items-center
        b-icon.tw-mr-1.system-color(icon='arrow-right-circle', size='is-small')
        | {{ system.systemName }}
      b-button.tw-ml-auto(
        @click='handleToggleSystem(systemIdx)',
        :icon-left='!!stateTransactions[systemIdx] && stateTransactions[systemIdx].show ? "chevron-down" : "chevron-up"'
      )
    .modules(
      v-show='!!stateTransactions[systemIdx] && stateTransactions[systemIdx].show ',
      v-for='(module, moduleIdx) in system.modules'
    )
      .modules-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
        b-checkbox.tw-w-20(
          :value='module.selected',
          @input='(status) => handleChangeModule(module.moduleId, systemIdx, moduleIdx, status)'
        )
        .module-name.tw-ml-8.tw-flex.tw-items-center
          b-icon.tw-mr-1.module-color(
            icon='arrow-right-circle',
            size='is-small'
          )
          | {{ module.moduleName }}
        b-button.tw-ml-auto(
          @click='handleToggleModule(systemIdx, moduleIdx)',
          :icon-left='!!stateTransactions[systemIdx] && !!stateTransactions[systemIdx].modules && stateTransactions[systemIdx].modules[moduleIdx].show ? "chevron-down" : "chevron-up"'
        )

      .transactions(
        v-show='!!stateTransactions[systemIdx] && !!stateTransactions[systemIdx].modules && stateTransactions[systemIdx].modules[moduleIdx].show',
        v-for='(transaction, index) in module.transactions'
      )
        .transactions-wrapper.tw-flex.tw-p-2.tw-border-b.tw-border-solid.tw-border-gray-400
          b-checkbox.tw-w-20(
            :value='transaction.selected',
            @input='(status) => handleChangeTransaction(transaction.transactionId, status)'
          )
          .module-name.tw-ml-16.tw-flex.tw-items-center
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
    return {
      stateTransactions: [],
    }
  },
  computed: {
    ...mapState({
      systems: (state) => state.maintainTransactions,
    }),
  },
  watch: {},
  async mounted() {
    this.systems.forEach((system, systemIdx) => {
      const modules = []
      system.modules.forEach((module, moduleIdx) => {
        modules.push({ show: false })
      })
      this.stateTransactions.push({ show: false, modules })
    })
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
    handleChangeModule(moduleId, systemIdx, moduleIdx, status) {
      this.handleChangeModuleState(systemIdx, moduleIdx, status)
      this.updateMaintainTransactionModule({ moduleId, status })
    },
    handleChangeSystem(systemId, systemIdx, status) {
      this.handleChangeSystemState(systemIdx, status)
      this.updateMaintainTransactionSystem({
        systemId: systemId.toString(),
        status,
      })
    },
    handleChangeSystemState(systemIdx, value) {
      if (value) {
        this.stateTransactions[systemIdx].show = value
        this.stateTransactions[systemIdx].modules.forEach((module) => {
          module.show = value
        })
      }
    },
    handleChangeModuleState(systemIdx, moduleIdx, value) {
      if (value)
        this.stateTransactions[systemIdx].modules[moduleIdx].show = value
    },
    handleToggleSystem(systemIdx, value) {
      this.stateTransactions[systemIdx].show = !this.stateTransactions[
        systemIdx
      ].show
    },
    handleToggleModule(systemIdx, moduleIdx) {
      this.stateTransactions[systemIdx].modules[moduleIdx].show = !this
        .stateTransactions[systemIdx].modules[moduleIdx].show
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
