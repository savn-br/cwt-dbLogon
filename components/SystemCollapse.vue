<template lang="pug">
#systemCollapse.system-collapse-wrapper.tw-shadow-none
  b-collapse.c-card(animation='slide', aria-id='contentID', :open='false')
    template(#trigger='props')
      .c-card-header.tw-flex.tw-w-full.tw-py-3.tw-items-center(
        role='button',
        aria-controls='contentID'
      )
        .c-card-header-wrapper.tw-flex.tw-items-center(class='tw-w-2/4')
          a.c-card-header-icon
            b-icon(:icon='props.open ? "menu-down" : "menu-up"')
          div {{ system.system }}
        .c-card-header-notes.tw-flex(class='tw-w-2/4') {{ system.notes }}
    component(
      :module='module',
      v-for='(module, index) in system.modules',
      :key='index',
      is='ModuleCollapse'
    )
      slot
</template>

<script>
export default {
  name: 'SystemCollapse',
  components: {},
  props: {
    system: {
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
.system-collapse-wrapper {
  .c-card-header {
    border-bottom: 1px solid rgb(212, 211, 211);
  }
}
</style>

<style lang="scss" scoped>
.system-collapse-wrapper {
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
