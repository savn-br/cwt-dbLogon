<template lang="pug">
#transactionCollapse.transaction-collapse-wrapper
  .content.tw-flex.tw-py-3.tw-items-center
    .content-transaction.tw-pl-10(class='tw-w-2/4') {{ transaction.transaction }}
    .content-notes(class='tw-w-2/4') {{ transaction.notes }}
</template>

<script>
export default {
  name: 'TransactionCollapse',
  components: {},
  props: {
    transaction: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss">
.transaction-collapse-wrapper {
  .content {
    border-bottom: 1px solid rgb(212, 211, 211);
    @media screen and (max-width: 526px) {
      flex-direction: column;
      align-items: flex-start;
      .content-transaction,
      .content-notes {
        width: 100%;
      }
      .content-transaction {
        font-weight: bold;
      }
      .content-notes {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
