<template lang="pug">
#maintainSystem3.maintain-system3-wrapper.tw-mt-8.tw-px-8
  .form.tw-grid.form-auto-fill.tw-mb-4(name='sistema')
    b-field.tw-mx-2(label='Código do sistema')
      b-input(v-model='selectedSystem.systemId', size='is-small', disabled)
    b-field.tw-mx-2(label='Sigla do sistema')
      b-input(
        v-model='selectedSystem.systemAcronym',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(label='Descrição')
      b-input(v-model='selectedSystem.systemName', size='is-small', disabled)
  .form.tw-grid.form-auto-fill(name='modulos')
    b-field.tw-mx-2(label='Código do Modulo')
      b-input(v-model='selectedModule.moduleId', size='is-small', disabled)
    b-field.tw-mx-2(label='Sigla do Modulo')
      b-input(
        v-model='selectedModule.moduleAcronym',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(label='Descrição')
      b-input(v-model='selectedModule.moduleName', size='is-small', disabled)
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-system-modal3(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='createTransaction') {{ $t("add") }}
  standard-table(:data='selectedModule.transactions')
    b-table-column(
      v-slot='props',
      field='transactionId',
      :searchable='true',
      label='Código da Transação'
    )
      span.tw-text-xs {{ props.row.transactionId }}
    b-table-column(
      v-slot='props',
      field='transactionName',
      :searchable='true',
      label='Descrição da Transação'
    )
      span.tw-text-xs {{ props.row.transactionName }}
    b-table-column(
      v-slot='props',
      field='active',
      :label='$t("active")',
      :centered='true'
    )
      span(v-if='props.row.active')
        b-icon(icon='check')
      span(v-else)
        b-icon(icon='close')
    b-table-column(
      :label='$t("operation")',
      field='active_operation',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='editTransaction(props.row)'
        )
          b-icon.tw-mr-2(icon='pencil')
        //- span.tw-cursor-pointer(class='hover:tw-text-primary')
        //-   b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='clipboard-text')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon(icon='eye')
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MaintainSystem3',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal3: () =>
      import('@/components/partials/MaintainSystemModal3'),
  },
  props: {},
  data() {
    return {
      systemCode: '2',
      systemSigla: 'REC',
      description: 'Receitas',
      isModalActive: false,
      profileDescription: require('@/jsons/profile-description-table-data.json'),
    }
  },
  computed: {
    ...mapState({
      selectedSystem: (state) => state.selectedSystem,
      selectedModule: (state) => state.selectedModule,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    createTransaction() {
      this.$store.commit('changeTransactionModalMode', 'save')
      this.$store.commit('changeSelectedTransaction', {})
      this.isModalActive = true
    },
    editTransaction(transaction) {
      this.$store.commit('changeTransactionModalMode', 'edit')
      this.$store.commit('changeSelectedTransaction', transaction)
      this.isModalActive = true
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-system3-wrapper {
}
</style>

<style lang="scss">
.maintain-system3-wrapper {
  .form {
    label {
      font-size: 0.75rem;
    }
  }
  input.input {
    height: px2rem(25);
  }
}
</style>
