<template lang="pug">
#moduleCollapse.module-collapse-wrapper
  b-collapse.c-card(animation='slide', aria-id='contentID', :open='false')
    template(#trigger='props')
      .c-card-header.tw-flex.tw-w-full.tw-py-3.tw-items-center(
        role='button',
        aria-controls='contentID'
      )
        .c-card-header-wrapper.tw-flex.tw-pl-3.tw-items-center(class='tw-w-2/4')
          a.c-card-header-icon
            b-icon(:icon='props.open ? "menu-down" : "menu-up"')
          div {{ module.module }}
        .c-card-header-notes.tw-flex(class='tw-w-2/4') {{ module.notes }}
    component(
      :transaction='transaction',
      v-for='(transaction, index) in module.transactions',
      :key='index',
      is='TransactionCollapse'
    )
</template>

<script>
export default {
  name: 'ModuleCollapse',
  components: {},
  props: {
    module: {
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

<style lang="scss" scoped>
.module-collapse-wrapper {
  .c-card-header {
    @media screen and (max-width: 526px) {
      flex-direction: column;
      align-items: flex-start;
      .c-card-header-wrapper,
      .c-card-header-notes {
        width: 100%;
      }
      .c-card-header-wrapper {
        font-weight: bold;
      }
      .c-card-header-notes {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
