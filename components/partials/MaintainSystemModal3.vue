<template lang="pug">
#maintainSystemModal3.maintain-system-modal3-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(:label='$t("transactionCode")')
          b-input(v-model='transactionId', size='is-small')
        b-field(:label='$t("description")')
          b-input(v-model='transactionName', size='is-small')
        b-field(:label='$t("notes")')
          b-input(maxlength='255', type='textarea', v-model='notes')
        b-field
          b-switch(v-model='active') {{ $t("active") }}
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary', @click='proccessTransactionRequest') {{ $t("save") }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MaintainSystemModal3',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      transactionModalMode: (state) => state.transactionModalMode,
    }),
    transactionId: {
      get() {
        return this.$store.state.selectedTransaction.transactionId
      },
      set(value) {
        this.$store.commit('changeSelectedTransactionTransactionId', value)
      },
    },
    transactionName: {
      get() {
        return this.$store.state.selectedTransaction.transactionName
      },
      set(value) {
        this.$store.commit('changeSelectedTransactionTransactionName', value)
      },
    },
    notes: {
      get() {
        return this.$store.state.selectedTransaction.notes
      },
      set(value) {
        this.$store.commit('changeSelectedTransactionNotes', value)
      },
    },
    active: {
      get() {
        return this.$store.state.selectedTransaction.active
      },
      set(value) {
        this.$store.commit('changeSelectedTransactionActive', value)
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    async proccessTransactionRequest() {
      if (this.transactionModalMode === 'save') {
        const status = await this.$store.dispatch('saveTransaction')
        if (status === 200) {
          this.$store.dispatch('getTransactions')
          this.$emit('close')
        }
      }
      if (this.transactionModalMode === 'edit') {
        const status = await this.$store.dispatch('editTransaction')
        if (status === 200) {
          this.$store.dispatch('getTransactions')
          this.$emit('close')
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
