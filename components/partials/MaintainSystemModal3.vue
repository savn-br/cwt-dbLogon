<template lang="pug">
#maintainSystemModal3.maintain-system-modal3-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(:label='$t("transactionCode")', v-if='!!transactionId')
          b-input(v-model='transactionId', size='is-small', disabled)
        b-field(:label='$t("description")')
          b-input(v-model='transactionName', size='is-small', maxlength='40')
        b-field(:label='$t("notes")')
          b-input(maxlength='512', type='textarea', v-model='notes')
        b-field
          b-switch(v-model='active') {{ $t("active") }}
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary', @click='proccessTransactionRequest') {{ $t("save") }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'MaintainSystemModal3',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['transactionModalMode', 'selectedTransaction']),

    transactionId: {
      get() {
        return this.selectedTransaction.transactionId
      },
      set(value) {
        this.setSelectedTransactionTerm({ key: 'transactionId', value })
      },
    },
    transactionName: {
      get() {
        return this.selectedTransaction.transactionName
      },
      set(value) {
        this.setSelectedTransactionTerm({ key: 'transactionName', value })
      },
    },
    notes: {
      get() {
        return this.selectedTransaction.notes
      },
      set(value) {
        this.setSelectedTransactionTerm({ key: 'notes', value })
      },
    },
    active: {
      get() {
        return this.selectedTransaction.active
      },
      set(value) {
        this.setSelectedTransactionTerm({ key: 'active', value })
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapMutations(['setSelectedTransactionTerm']),
    ...mapActions(['saveTransaction', 'getTransactions', 'editTransaction']),

    async proccessTransactionRequest() {
      this.$emit('close')
      if (this.transactionModalMode === 'save') {
        const status = await this.saveTransaction()
        if (status === 200) {
          this.getTransactions()
        }
      }
      if (this.transactionModalMode === 'edit') {
        const status = await this.editTransaction()
        if (status === 200) {
          this.getTransactions()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-system-modal3-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
    grid-column-gap: px2rem(15);
  }
}
</style>

<style lang="scss">
.maintain-system-modal3-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
